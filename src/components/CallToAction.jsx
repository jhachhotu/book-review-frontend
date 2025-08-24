import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaBookOpen, FaPenAlt } from 'react-icons/fa';

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Dive Into the World of Books?</h2>
        <p className="text-xl mb-10 max-w-3xl mx-auto text-indigo-100">
          Join our community of book lovers and share your thoughts on your favorite reads.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link 
            to="/books" 
            className="group flex items-center justify-center gap-2 bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <FaBookOpen className="w-5 h-5" />
            Browse Books
            <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link 
            to="/signup" 
            className="group flex items-center justify-center gap-2 bg-gray-800 border-2 border-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            <FaPenAlt className="w-5 h-5" />
            Sign Up to Write Reviews
            <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
