import React from 'react';
import { Link } from 'react-router-dom';

const topBooks = [
  {
    title: 'Atomic Habits',
    image: 'https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UF1000,1000_QL80_.jpg'
  },
  {
    title: 'The Power of Now',
    image: 'https://m.media-amazon.com/images/I/71sBtM3Yi5L.jpg'
  },
  {
    title: 'Think and Grow Rich',
    image: 'https://m.media-amazon.com/images/I/71UypkUjStL.jpg'
  },
  {
    title: 'Man’s Search for Meaning',
    image: 'https://covers.openlibrary.org/b/isbn/9780807014295-L.jpg'
  },
  {
    title: 'Deep Work',
    image: 'https://covers.openlibrary.org/b/isbn/9781455586691-L.jpg'
  }
];



const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center bg-black text-white pb-16 pt-8 bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/bg-gradient-3.svg')] bg-center bg-cover">
      <div className="flex items-center gap-2 border border-white/15 rounded-full px-4 py-2 text-sm mt-24">
        <p>Join thousands of readers today</p>
        <Link to="/books" className="flex items-center gap-1 font-medium">
          Explore Now
          <svg className="mt-0.5" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.959 9.5h11.083m0 0L9.501 3.96m5.541 5.54-5.541 5.542" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>

      <h1 className="text-4xl md:text-6xl text-center font-semibold max-w-3xl mt-5 bg-gradient-to-r from-white to-[#748298] text-transparent bg-clip-text">
        Your Next Favorite Book Is Waiting
      </h1>
      <p className="text-slate-300 md:text-base text-center max-w-2xl mt-3">
        Discover, review, and share books with fellow readers. Dive into genres you love or explore something new today.
      </p>

      <div className="flex justify-center mt-8 text-sm">
        <Link to="/books">
          <button className="flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-6 py-3">
            <span>Browse Books</span>
            <svg className="mt-0.5" width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.25.5 4.75 4l-3.5 3.5" stroke="currentColor" strokeOpacity=".4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </Link>
      </div>

      <div className="mt-12 flex max-md:overflow-x-auto gap-6 max-w-4xl w-full pb-6">
        {topBooks.map((book, i) => (
          <div key={i} className="relative w-36 h-44 flex-shrink-0 group">
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-full rounded-lg object-cover hover:-translate-y-1 transition duration-300"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black/70 text-white text-xs p-1 text-center rounded-b-lg group-hover:bg-black/90 transition">
              {book.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;

