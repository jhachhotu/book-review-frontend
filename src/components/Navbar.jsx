import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="w-full flex items-center border border-slate-700 px-6 py-4 rounded-none text-white text-sm relative z-50 bg-slate-900">
      
      {/* Logo */}
      <Link to="/">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="4.706" cy="16" r="4.706" fill="#D9D9D9" />
          <circle cx="16.001" cy="4.706" r="4.706" fill="#D9D9D9" />
          <circle cx="16.001" cy="27.294" r="4.706" fill="#D9D9D9" />
          <circle cx="27.294" cy="16" r="4.706" fill="#D9D9D9" />
        </svg>
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-6 ml-7">
        <Link to="/" className="group relative overflow-hidden h-6">
          <span className="block group-hover:-translate-y-full transition-transform duration-300">Books</span>
          <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">Books</span>
        </Link>

        {token && (
          <Link to="/add-book" className="group relative overflow-hidden h-6">
            <span className="block group-hover:-translate-y-full transition-transform duration-300">Add Book</span>
            <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">Add Book</span>
          </Link>
        )}
      </div>

      {/* Right-side Auth Buttons */}
      <div className="hidden md:flex items-center gap-4 ml-auto">
        {token ? (
          <button
            onClick={handleLogout}
            className="border border-slate-600 hover:bg-slate-800 px-4 py-2 rounded-full text-sm font-medium transition"
          >
            Logout
          </button>
        ) : (
          <>
            <Link to="/login">
              <button className="border border-slate-600 hover:bg-slate-800 px-4 py-2 rounded-full text-sm font-medium transition">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="bg-white hover:shadow-[0px_0px_30px_7px] text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition duration-300">
                Get Started
              </button>
            </Link>
          </>
        )}
      </div>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden text-gray-200 z-50 ml-auto"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
          strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full flex flex-col items-center gap-4 bg-slate-900 py-6 md:hidden transition">
          <Link to="/" className="hover:text-indigo-400" onClick={() => setIsMobileMenuOpen(false)}>Books</Link>
          {token && <Link to="/add-book" className="hover:text-indigo-400" onClick={() => setIsMobileMenuOpen(false)}>Add Book</Link>}

          {!token ? (
            <>
              <Link to="/login" className="hover:text-indigo-400" onClick={() => setIsMobileMenuOpen(false)}>Login</Link>
              <Link to="/signup" className="hover:text-indigo-400" onClick={() => setIsMobileMenuOpen(false)}>Signup</Link>
            </>
          ) : (
            <button onClick={handleLogout} className="hover:text-red-400">Logout</button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
