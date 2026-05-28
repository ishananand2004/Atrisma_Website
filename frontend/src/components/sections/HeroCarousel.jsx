import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2000&auto=format&fit=crop',
    tag: 'Our Mission',
    heading: 'Advancing Healthcare,\nEmpowering Lives.',
    subtext:
      'Atrisma Pharmaceuticals is dedicated to developing innovative solutions that improve patient outcomes worldwide.',
    cta: { label: 'Explore Products', to: '/products' },
    ctaSecondary: { label: 'Learn More', to: '/about' },
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2000&auto=format&fit=crop',
    tag: 'Research & Innovation',
    heading: 'Pioneering the\nFuture of Medicine.',
    subtext:
      'Our state-of-the-art R&D centers are at the forefront of scientific breakthroughs across multiple therapeutic areas.',
    cta: { label: 'Our Research', to: '/research' },
    ctaSecondary: { label: 'About Us', to: '/about' },
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?q=80&w=2000&auto=format&fit=crop',
    tag: 'Global Presence',
    heading: 'Reaching Patients\nAcross the Globe.',
    subtext:
      'With operations in 50+ countries, we deliver life-changing medicines to millions of patients every day.',
    cta: { label: 'Global Presence', to: '/global-presence' },
    ctaSecondary: { label: 'Contact Us', to: '/contact' },
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?q=80&w=2000&auto=format&fit=crop',
    tag: 'Clinical Excellence',
    heading: 'Committed to\nClinical Excellence.',
    subtext:
      'Rigorous clinical trials and regulatory compliance ensure that every product we deliver meets the highest safety standards.',
    cta: { label: 'View Products', to: '/products' },
    ctaSecondary: { label: 'Research', to: '/research' },
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=2000&auto=format&fit=crop',
    tag: 'Careers',
    heading: 'Join Our Team of\nHealthcare Innovators.',
    subtext:
      'Be part of a passionate team working to transform global healthcare. Discover career opportunities at Atrisma.',
    cta: { label: 'View Careers', to: '/careers' },
    ctaSecondary: { label: 'About Us', to: '/about' },
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=2000&auto=format&fit=crop',
    tag: 'Therapeutics',
    heading: 'Transforming Lives\nThrough Science.',
    subtext:
      'From oncology to cardiology, our diverse therapeutic portfolio addresses the most critical health challenges of our time.',
    cta: { label: 'Our Portfolio', to: '/products' },
    ctaSecondary: { label: 'Learn More', to: '/about' },
  },
];

const SLIDE_DURATION = 5500; // ms

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward

  const goTo = useCallback(
    (index, dir = 1) => {
      setDirection(dir);
      setCurrent(index);
    },
    []
  );

  const next = useCallback(() => {
    goTo((current + 1) % SLIDES.length, 1);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + SLIDES.length) % SLIDES.length, -1);
  }, [current, goTo]);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(next, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [next]);

  const slide = SLIDES[current];

  const bgVariants = {
    enter: (dir) => ({ opacity: 0, scale: dir > 0 ? 1.06 : 0.96 }),
    center: { opacity: 1, scale: 1, transition: { duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] } },
    exit: (dir) => ({ opacity: 0, scale: dir > 0 ? 0.96 : 1.06, transition: { duration: 0.8, ease: 'easeIn' } }),
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut', delay },
    }),
  };

  return (
    <section className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background Images */}
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={slide.id}
          custom={direction}
          variants={bgVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/20" />
        </motion.div>
      </AnimatePresence>

      {/* Slide Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 md:px-16">
          <AnimatePresence mode="wait">
            <motion.div key={`content-${slide.id}`} className="max-w-2xl">
              {/* Tag */}
              <motion.span
                variants={textVariants}
                initial="hidden"
                animate="visible"
                custom={0}
                className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-blue-300 border border-blue-400/40 px-3 py-1 rounded-full mb-5"
              >
                {slide.tag}
              </motion.span>

              {/* Heading */}
              <motion.h1
                variants={textVariants}
                initial="hidden"
                animate="visible"
                custom={0.15}
                className="text-4xl md:text-6xl font-bold text-white mb-5 leading-tight whitespace-pre-line"
              >
                {slide.heading}
              </motion.h1>

              {/* Subtext */}
              <motion.p
                variants={textVariants}
                initial="hidden"
                animate="visible"
                custom={0.3}
                className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed max-w-xl"
              >
                {slide.subtext}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={textVariants}
                initial="hidden"
                animate="visible"
                custom={0.45}
                className="flex flex-wrap gap-4"
              >
                <Link
                  to={slide.cta.to}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-md transition-all duration-300 shadow-lg hover:shadow-blue-600/40 hover:-translate-y-0.5"
                >
                  {slide.cta.label}
                </Link>
                <Link
                  to={slide.ctaSecondary.to}
                  className="px-6 py-3 border border-white/40 hover:border-white text-white text-sm font-semibold rounded-md transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5"
                >
                  {slide.ctaSecondary.label}
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 left-4 z-20 flex items-center">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition-all duration-200 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft size={18} />
        </button>
      </div>
      <div className="absolute inset-y-0 right-4 z-20 flex items-center">
        <button
          onClick={next}
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition-all duration-200 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-2">
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i, i > current ? 1 : -1)}
            aria-label={`Go to slide ${i + 1}`}
            className="relative h-1 rounded-full overflow-hidden transition-all duration-300"
            style={{ width: i === current ? 32 : 8, background: 'rgba(255,255,255,0.3)' }}
          >
            {i === current && (
              <motion.span
                className="absolute inset-0 bg-white rounded-full"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: SLIDE_DURATION / 1000, ease: 'linear' }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-8 right-6 z-20 text-white/40 text-xs tracking-widest tabular-nums">
        {String(current + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
      </div>
    </section>
  );
}
