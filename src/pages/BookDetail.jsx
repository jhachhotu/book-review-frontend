import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../services/api';

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [review, setReview] = useState({ review_text: '', rating: 5 });
  const [reviews, setReviews] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 });
  const cardRefs = useRef([]);

  useEffect(() => {
    axios.get(`/books/${id}/reviews`).then(res => {
      setReviews(res.data.reviews);
      setBook(prev => ({ ...prev, average_rating: res.data.average_rating }));
    });
  }, [id]);

  const submitReview = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`/books/${id}/reviews`, review);
      setReview({ review_text: '', rating: 5 });
      window.location.reload(); // Optional: better to refresh via fetch
    } catch (err) {
      alert("Failed to add review");
    }
  };

  const handleMouseMove = (e, index) => {
    const bounds = cardRefs.current[index]?.getBoundingClientRect();
    if (bounds) {
      setHoveredIndex(index);
      setHoverPos({
        x: e.clientX - bounds.left,
        y: e.clientY - bounds.top
      });
    }
  };

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h2 className="text-3xl font-bold mb-1 text-gray-800">📖 Book Reviews</h2>
      <p className="mb-6 text-gray-600 text-sm">Average Rating: ⭐ {book.average_rating || 'N/A'}</p>

      <form onSubmit={submitReview} className="mb-8 bg-white p-4 rounded shadow-md max-w-xl">
        <textarea
          value={review.review_text}
          onChange={e => setReview({ ...review, review_text: e.target.value })}
          placeholder="Write your review..."
          className="w-full p-2 border border-gray-300 rounded mb-2"
          rows={4}
          required
        />
        <input
          type="number"
          min="1"
          max="5"
          value={review.rating}
          onChange={e => setReview({ ...review, rating: Number(e.target.value) })}
          className="w-full p-2 border border-gray-300 rounded mb-2"
          required
        />
        <button type="submit" className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded transition">
          Submit Review
        </button>
      </form>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4">✨ Reader Feedback:</h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {reviews.map((r, idx) => (
          <div
            key={idx}
            ref={el => (cardRefs.current[idx] = el)}
            onMouseMove={e => handleMouseMove(e, idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative rounded-xl p-0.5 bg-white text-gray-800 overflow-hidden shadow-lg cursor-pointer"
          >
            {hoveredIndex === idx && (
              <div
                className="pointer-events-none blur-xl bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 size-60 absolute z-0 transition-opacity duration-300"
                style={{
                  top: hoverPos.y - 120,
                  left: hoverPos.x - 120,
                }}
              />
            )}
            <div className="relative z-10 bg-white/80 backdrop-blur-md p-6 h-full w-full rounded-[10px] flex flex-col justify-between">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">
                  {r.reviewer?.username || 'Anonymous'}
                </h4>
                <p className="text-gray-600 text-sm mb-2">{r.review_text}</p>
              </div>
              <div className="text-sm text-indigo-500 font-medium">⭐ {r.rating}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookDetail;
