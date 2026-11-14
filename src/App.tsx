import { MotionConfig } from 'framer-motion';
import { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AccountDeletion from './pages/AccountDeletion';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

// Sayfa değişince başa, #bağlantı varsa ilgili bölüme kaydır
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const t = setTimeout(() => {
        document.getElementById(hash.substring(1))?.scrollIntoView({ behavior: 'smooth' });
      }, 80);
      return () => clearTimeout(t);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

// Not: /privacy, /terms, /account-deletion ve /contact adresleri uygulamada
// ve mağaza kayıtlarında kullanılıyor — değiştirmeyin.
function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/account-deletion" element={<AccountDeletion />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </MotionConfig>
  );
}

export default App;
