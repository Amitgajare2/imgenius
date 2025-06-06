import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { Client, Databases, Query } from "appwrite";
import "./gallery.css";
import Card from "../components/Card";
import Popup from "../components/Popup";


/* ────────────────────────────────
   Appwrite setup
────────────────────────────────── */
const client = new Client()
  .setEndpoint("https://fra.cloud.appwrite.io/v1")      // your endpoint
  .setProject("");                  // your project-ID

const databases = new Databases(client);
const DATABASE_ID = "";
const COLLECTION_ID = "";

const IMAGES_PER_PAGE = 6;

/* ────────────────────────────────
   Page-level animation
────────────────────────────────── */
const pageVariants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 1.1, opacity: 0 },
};
const transition = { duration: 0.4, ease: "easeInOut" };

/* ────────────────────────────────
   Categories
────────────────────────────────── */
const categories = [
  "All", "Painting", "Poster", "Sketch", "Letter",
  "3D", "Editors", "Illustration", "Others",
];

/* ────────────────────────────────
   Component
────────────────────────────────── */
export default function Gallery() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const [selected, setSelected] = useState(null);
  const [selectedCategory, setCategory] = useState("All");
  const [searchTerm, setSearch] = useState("");

  const sentinel = useRef(null);   


  /* ───── Fetch paged documents ───── */
  const fetchImages = useCallback(
    async (pageNumber) => {
      try {
        setLoading(true);
        const response = await databases.listDocuments(
          DATABASE_ID,
          COLLECTION_ID,
          [
            Query.limit(IMAGES_PER_PAGE),
            Query.offset(pageNumber * IMAGES_PER_PAGE),
            Query.orderDesc("$createdAt"),               // newest first
          ],
        );

        if (response.documents.length > 0) {
          setImages((prev) => [...prev, ...response.documents]);
        } else {
          setHasMore(false);
        }
      } catch (err) {
        console.error("Error fetching images:", err);
        setHasMore(false);
      } finally {
        setLoading(false);
      }
    },
    [],
  );


  /* ───── On first mount ───── */
  useEffect(() => {
    fetchImages(0);
  }, [fetchImages]);

  
  /* ───── Infinite scroll via IntersectionObserver ───── */
  useEffect(() => {
    if (!hasMore) return;
    const node = sentinel.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          setPage((p) => p + 1);
        }
      },
      { rootMargin: "200px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [hasMore, loading]);

  /* ───── Fetch next page when `page` increments ───── */
  useEffect(() => {
    if (page === 0) return;   // page 0 fetched on mount
    fetchImages(page);
  }, [page, fetchImages]);

  /* ───── Filtering (category + search) ───── */
  const filteredImages = images.filter((img) => {
    const matchesCat =
      selectedCategory === "All" || img.category === selectedCategory;
    const matchesSearch = img.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCat && (searchTerm === "" || matchesSearch);
  });

  const showImages = filteredImages;  // rename for clarity

  /* ───── Render ───── */
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={transition}
    >
      <Navbar />

      {/* ───────────────── Filter bar ───────────────── */}
      <div className="filter-bar">
        <select value={selectedCategory} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
      </div>

      {/* ───────────────── Masonry grid ───────────────── */}
      <div className="masonry-gallery">
        {showImages.map((item, index) => (
          <Card
            key={item.$id}
            src={item.imgUrl}
            alt={item.title}
            onClick={() => setSelected(item)}
            animationProps={{
              as: motion.img, 
              initial: { opacity: 0, y: 25 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.4, delay: index * 0.05 },
            }}
          />
        ))}
      </div>

      {/* ───────────────── Sentinel (infinite scroll) ───────────────── */}
      {hasMore && (
        <div ref={sentinel} className="loading-area">
          {loading && <span>Loading…</span>}
        </div>
      )}

      {/* ───────────────── Popup ───────────────── */}
      {selected && <Popup item={selected} onClose={() => setSelected(null)} />}


    </motion.div>
  );
}
