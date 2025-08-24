import React from 'react';

const BookTestimonialSlider = () => {
  const reviewCardsData = [
    {
      image: 'https://randomuser.me/api/portraits/women/10.jpg',
      name: 'Ananya Sharma',
      username: '@ananya_reads',
      date: 'June 10, 2025',
      book: 'Atomic Habits',
      review: 'This book completely shifted my perspective on daily habits. A must-read!',
      rating: 5
    },
    {
      image: 'https://randomuser.me/api/portraits/men/14.jpg',
      name: 'Rohan Mehta',
      username: '@rohan_devours_books',
      date: 'May 28, 2025',
      book: 'Think and Grow Rich',
      review: 'Incredible book for mindset growth. Really empowering.',
      rating: 4
    },
    {
      image: 'https://randomuser.me/api/portraits/women/22.jpg',
      name: 'Sara Khan',
      username: '@sarak_reviews',
      date: 'May 18, 2025',
      book: 'The Power of Now',
      review: 'Deep and meaningful. Makes you think about the present moment differently.',
      rating: 5
    },
    {
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      name: 'Amit Rao',
      username: '@amitrao_books',
      date: 'April 30, 2025',
      book: 'Deep Work',
      review: 'Productivity redefined. Great for students and professionals alike.',
      rating: 4
    }
  ];

  const StarRating = ({ count }) => (
    <div className="flex gap-0.5 text-yellow-500">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill={i < count ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );

  const TestimonialCard = ({ card }) => (
    <div className="p-4 rounded-lg mx-4 shadow hover:shadow-lg transition-all duration-200 w-72 shrink-0 bg-white">
      <div className="flex gap-3 items-center">
        <img className="size-11 rounded-full" src={card.image} alt={card.name} />
        <div>
          <p className="font-medium">{card.name}</p>
          <p className="text-sm text-slate-500">{card.username}</p>
        </div>
      </div>
      <p className="text-sm text-gray-700 mt-3 italic">“{card.review}”</p>
      <p className="text-sm text-indigo-500 font-semibold mt-2">Book: {card.book}</p>
      <div className="flex items-center justify-between mt-2 text-xs text-slate-500">
        <StarRating count={card.rating} />
        <p>{card.date}</p>
      </div>
    </div>
  );

  return (
    <>
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .marquee-inner {
          animation: marqueeScroll 30s linear infinite;
        }
        .marquee-reverse {
          animation-direction: reverse;
        }
      `}</style>

      <section className="py-10 bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">What Readers Are Saying</h2>

        {/* Forward Scroll */}
        <div className="marquee-row w-full mx-auto max-w-6xl overflow-hidden relative">
          <div className="marquee-inner flex transform-gpu min-w-[200%] pt-4 pb-5">
            {[...reviewCardsData, ...reviewCardsData].map((card, index) => (
              <TestimonialCard key={`f-${index}`} card={card} />
            ))}
          </div>
        </div>

        {/* Reverse Scroll */}
        <div className="marquee-row w-full mx-auto max-w-6xl overflow-hidden relative mt-4">
          <div className="marquee-inner marquee-reverse flex transform-gpu min-w-[200%] pt-4 pb-5">
            {[...reviewCardsData, ...reviewCardsData].map((card, index) => (
              <TestimonialCard key={`r-${index}`} card={card} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BookTestimonialSlider;
