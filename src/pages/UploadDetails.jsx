import React, { useEffect, useState } from 'react';
import { Client, Databases, ID, Account } from 'appwrite';
import './UploadDetails.css';
import { useNavigate } from 'react-router-dom';

const client = new Client()
  .setEndpoint('https://fra.cloud.appwrite.io/v1')
  .setProject('Your project ID'); // Replace with your actual project ID

const databases = new Databases(client);
const account = new Account(client);

const categories = [
  'Painting', 'Poster', 'Sketch', 'Letter', '3D',
  'Editors', 'Illustration', 'Others'
];

function UploadDetails() {
  const [form, setForm] = useState({
    imgUrl: '',
    title: '',
    name: '',
    prompt: '',
    category: '',
  });

  const [isAllowed, setIsAllowed] = useState(null); // null = loading, false = blocked, true = allowed
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      try {
        const user = await account.get();
        if (user.$id === 'Your User ID') {
          setIsAllowed(true);
        } else {
          setIsAllowed(false);
          navigate('/admin-login');
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        setIsAllowed(false);
        navigate('/admin-login');
      }
    };

    checkUser();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await databases.createDocument(
        'Your Database ID', // database ID
        'Your Collection ID', // collection ID
        ID.unique(),
        form
      );
      alert('Uploaded successfully!');
      setForm({ imgUrl: '', title: '', name: '', prompt: '', category: '' });
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Upload failed.');
    }
  };

  if (isAllowed === null) return <p>Checking permission...</p>;
  if (!isAllowed) return null;

  return (
    <form className="upload-form" onSubmit={handleSubmit}>
      <h2>Upload Image Details</h2>

      <input
        type="text"
        name="imgUrl"
        placeholder="Image URL"
        value={form.imgUrl}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="title"
        placeholder="Title"
        value={form.title}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        required
      />

      <textarea
        name="prompt"
        placeholder="Prompt"
        value={form.prompt}
        onChange={handleChange}
        required
      />

      <select
        name="category"
        value={form.category}
        onChange={handleChange}
        required
      >
        <option value="">Select Category</option>
        {categories.map((cat, index) => (
          <option key={index} value={cat}>{cat}</option>
        ))}
      </select>

      <button type="submit">Upload</button>
    </form>
  );
}

export default UploadDetails;
