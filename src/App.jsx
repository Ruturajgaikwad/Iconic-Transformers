import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Footer from "./components/Footer";
import FloatingButton from "./components/Home/FloatingButton";
import Chatbot from './pages/Chatbot';

export default function App() {
  return (
    <div className="min-h-screen bg-grayscale-100 text-grayscale-950">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/chatbot" element={<Chatbot />} />
        </Routes>
        <FloatingButton />
        <Footer />
    </Router>
    </div>
  );
}


