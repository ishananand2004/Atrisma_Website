import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import CookieConsent from '@/components/layout/CookieConsent';
import PageLoader from '@/components/layout/PageLoader';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Products from '@/pages/Products';
import Research from '@/pages/Research';
import GlobalPresence from '@/pages/GlobalPresence';
import Careers from '@/pages/Careers';
import Contact from '@/pages/Contact';
import ProductDetail from '@/pages/ProductDetail';
import { ThemeProvider } from '@/context/ThemeContext';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <HelmetProvider>
      <ThemeProvider>
        <CookieConsent />
      <AnimatePresence>
        {loading && (
          <PageLoader onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <Router>
            <ScrollToTop />
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:slug" element={<ProductDetail />} />
                <Route path="/research" element={<Research />} />
                <Route path="/global-presence" element={<GlobalPresence />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Layout>
          </Router>
        </motion.div>
      )}
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
