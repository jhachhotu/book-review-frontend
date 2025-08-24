import React, { useState, useRef } from 'react';
import axios from '../services/api';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const [form, setForm] = useState({ title: '', author: '', genre: '' });
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();
  const cardRef = useRef(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleMouseMove = (e) => {
    const bounds = cardRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/books', form);
      navigate('/');
    } catch (err) {
      alert('Error adding book');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black px-4">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="relative w-full max-w-md rounded-xl p-px bg-gray-900 backdrop-blur-md text-gray-800 overflow-hidden shadow-lg"
      >
        {/* Glowing gradient hover effect */}
        {visible && (
          <div
            className="pointer-events-none blur-3xl rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-300 size-60 absolute z-0 transition-opacity duration-500"
            style={{
              top: position.y - 120,
              left: position.x - 120,
            }}
          />
        )}

        <div className="relative z-10 bg-gray-900/80 p-8 h-full w-full rounded-xl flex flex-col justify-center text-white">
          <h2 className="text-2xl font-bold mb-6 text-center">📚 Add New Book</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="title"
              placeholder="Book Title"
              className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={handleChange}
              required
            />
            <input
              name="author"
              placeholder="Author"
              className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={handleChange}
              required
            />
            <input
              name="genre"
              placeholder="Genre"
              className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 transition-all active:scale-95 py-2.5 rounded text-white font-semibold"
            >
              Add Book
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
