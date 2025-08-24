import React from 'react';
import { FaBookOpen, FaStar, FaUsers, FaSearch, FaComment, FaHeart } from 'react-icons/fa';

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaBookOpen className="w-8 h-8 text-indigo-600" />,
      title: "Explore Books",
      description: "Discover a vast collection of books across various genres and authors."
    },
    {
      icon: <FaStar className="w-8 h-8 text-yellow-500" />,
      title: "Rate & Review",
      description: "Share your thoughts and rate books to help others find their next great read."
    },
    {
      icon: <FaUsers className="w-8 h-8 text-blue-500" />,
      title: "Join the Community",
      description: "Connect with fellow book lovers and see what others are reading."
    },
    {
      icon: <FaSearch className="w-8 h-8 text-green-500" />,
      title: "Smart Search",
      description: "Quickly find books by title, author, or genre with our powerful search."
    },
    {
      icon: <FaComment className="w-8 h-8 text-purple-500" />,
      title: "Engaging Discussions",
      description: "Participate in discussions and share your insights about your favorite books."
    },
    {
      icon: <FaHeart className="w-8 h-8 text-red-500" />,
      title: "Personalized Lists",
      description: "Create and manage your reading lists and track your reading progress."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Book Review Platform</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover a world of books and connect with fellow readers in our vibrant community
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mb-6 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
