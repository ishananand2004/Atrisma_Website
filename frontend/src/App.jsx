import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { lazy, Suspense, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import CookieConsent from '@/components/layout/CookieConsent';
import PageLoader from '@/components/layout/PageLoader';
import { ThemeProvider } from '@/context/ThemeContext';

const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Products = lazy(() => import('@/pages/Products'));
const Research = lazy(() => import('@/pages/Research'));
const GlobalPresence = lazy(() => import('@/pages/GlobalPresence'));
const Careers = lazy(() => import('@/pages/Careers'));
const Contact = lazy(() => import('@/pages/Contact'));
const ProductDetail = lazy(() => import('@/pages/ProductDetail'));

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
              <Suspense fallback={<div className="flex h-screen items-center justify-center bg-white dark:bg-[#030014]"><div className="w-8 h-8 border-4 border-[var(--color-brand-cyan)] border-t-transparent rounded-full animate-spin"></div></div>}>
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
              </Suspense>
            </Layout>
          </Router>
        </motion.div>
      )}
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
