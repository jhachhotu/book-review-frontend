import React, { useEffect, useState, useRef } from 'react';
import axios from '../services/api';
import { Link } from 'react-router-dom';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });

  const cardRefs = useRef([]);

  useEffect(() => {
    axios.get('/books')
      .then(res => setBooks(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleMouseMove = (e, index) => {
    const bounds = cardRefs.current[index]?.getBoundingClientRect();
    if (bounds) {
      setHoveredCard(index);
      setHoverPosition({
        x: e.clientX - bounds.left,
        y: e.clientY - bounds.top
      });
    }
  };

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <h2 className="text-3xl font-bold mb-8 text-white">📚 Book List</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book, index) => (
          <Link
            to={`/books/${book._id}`}
            key={book._id}
            ref={(el) => (cardRefs.current[index] = el)}
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
            className="relative w-full h-96 rounded-xl p-px bg-gray-900 backdrop-blur-md text-white overflow-hidden shadow-lg"
          >
            {/* Hover Glow Effect */}
            {hoveredCard === index && (
              <div
                className="pointer-events-none blur-3xl rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-300 size-60 absolute z-0 transition-opacity duration-500"
                style={{
                  top: hoverPosition.y - 120,
                  left: hoverPosition.x - 120
                }}
              />
            )}

            {/* Card Content */}
            <div className="relative z-10 bg-gray-900/75 p-6 h-full w-full rounded-[11px] flex flex-col items-center justify-center text-center">
              <img
                src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=100&q=80"
                alt="Book Cover"
                className="w-24 h-24 rounded-full shadow-md mb-4"
              />
              <h3 className="text-2xl font-bold text-white mb-1">{book.title}</h3>
              <p className="text-sm text-indigo-500 font-medium">by {book.author}</p>
              <p className="text-sm text-slate-400 mt-2">Genre: {book.genre}</p>

              {/* Optional social-like footer */}
              <div className="flex space-x-4 mt-6 text-xl text-slate-400">
                <span className="hover:text-indigo-400 transition text-sm">📖 Read More</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BookList;
