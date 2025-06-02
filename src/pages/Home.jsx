import React, { useState } from 'react';
import FeatureCard from '../components/FetureCard';
import FaqSection from '../components/Faq';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';


function Home() {

    return (
        <>

            {/* hero section */}
            <div className="hero-section">
                <div className="logo"></div>

                <div className="hero-content">
                    <div className="img-cover"></div>
                    <div className="hero-text">
                        <h1>IMGenius</h1>
                        <p>
                            A free, curated library of ChatGPT image generation prompts - easy
                            to browse, copy, and create stunning AI images in seconds.
                        </p>
                    </div>
                </div>
            </div>

            {/* Cards showcase section */}
            <div className="showcase">
                <h2>Inspiration from Image Prompt</h2>
                <p>Explore a world of visual inspiration with our AI-generated images</p>
                <FeatureCard />

                <button className="btn-23">
                    <Link to="/gallery">
                        <span className="text">EXPLORE MORE</span>
                        <span aria-hidden="" className="marquee">EXPLORE</span>
                    </Link>
                </button>

            </div>

            {/* FAQ section */}
            <FaqSection />

            {/* What Our Users Say
Every Review Comes from a Real User */}

            {/* Footer section */}
            <Footer />

        </>
    );
}

export default Home;
