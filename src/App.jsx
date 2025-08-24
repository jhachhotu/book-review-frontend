import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import BookList from './pages/BookList';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import AddBook from './pages/AddBook';
import BookDetail from './pages/BookDetail';
import HeroSection from './pages/HeroSection';
import TestimonialSection from './components/TestimonialSection';
import FeaturesSection from './pages/FeaturesSection';
import CallToAction from './components/CallToAction';

function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <TestimonialSection />
      <CallToAction />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />              {/* ✅ Combined Hero + Testimonial */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/books/:id" element={<BookDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
