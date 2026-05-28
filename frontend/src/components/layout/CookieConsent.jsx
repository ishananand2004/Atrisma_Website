import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight } from 'lucide-react';

const COOKIE_KEY = 'atrisma_cookie_consent';

const CATEGORIES = [
  {
    id: 'necessary',
    title: 'Necessary',
    always: true,
    description:
      'Necessary cookies are required to enable the basic features of this site, such as providing secure log-in or adjusting your consent preferences. These cookies do not store any personally identifiable data.',
  },
  {
    id: 'functional',
    title: 'Functional',
    always: false,
    description:
      'Functional cookies help perform certain functionalities like sharing the content of the website on social media platforms, collecting feedback, and other third-party features.',
  },,
  {
    id: 'analytics',
    title: 'Analytics',
    always: false,
    description:
      'Analytical cookies are used to understand how visitors interact with the website. These cookies help provide information on metrics such as the number of visitors, bounce rate, traffic source, etc.',
  },
  {
    id: 'performance',
    title: 'Performance',
    always: false,
    description:
      'Performance cookies are used to understand and analyse the key performance indexes of the website which helps in delivering a better user experience for the visitors.',
  },
];

const SHORT_DESC =
  'We use cookies to help you navigate efficiently and perform certain functions. You will find detailed information about all cookies under each consent category below.\n\nThe cookies that are categorised as "Necessary" are stored on your browser as they are essential for enabling the basic functionalities of the site.';

export default function CookieConsent() {
  const [visible, setVisible]       = useState(false);
  const [expanded, setExpanded]     = useState({});
  const [showMore, setShowMore]     = useState(false);
  const [enabled, setEnabled]       = useState({
    necessary: true,
    functional: false,
    analytics: false,
    performance: false,
  });

  useEffect(() => {
    const saved = localStorage.getItem(COOKIE_KEY);
    if (!saved) {
      // Small delay so the page loads first
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  const save = (prefs) => {
    localStorage.setItem(COOKIE_KEY, JSON.stringify(prefs));
    setVisible(false);
  };

  const handleAcceptAll = () =>
    save({ necessary: true, functional: true, analytics: true, performance: true });

  const handleRejectAll = () =>
    save({ necessary: true, functional: false, analytics: false, performance: false });

  const handleSave = () => save(enabled);

  const toggle = (id) =>
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));

  const toggleEnabled = (id) =>
    setEnabled((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9998] bg-black/40 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-title"
          >
            <div className="bg-white w-full max-w-2xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden">

              {/* Header */}
              <div className="flex items-start justify-between px-7 pt-6 pb-4 border-b border-slate-100 shrink-0">
                <h2 id="cookie-title" className="text-[17px] font-bold text-slate-800 leading-snug">
                  Customise Consent Preferences
                </h2>
                <button
                  onClick={() => setVisible(false)}
                  className="ml-4 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Body */}
              <div className="overflow-y-auto flex-1 px-7 py-5 space-y-5">
                {/* Description */}
                <div className="text-sm text-slate-600 leading-relaxed">
                  <p>
                    We use cookies to help you navigate efficiently and perform certain functions. You will find
                    detailed information about all cookies under each consent category below.
                  </p>
                  {showMore && (
                    <p className="mt-2">
                      The cookies that are categorised as "Necessary" are stored on your browser as they are
                      essential for enabling the basic functionalities of the site. We also use third-party cookies
                      that help us analyse how you use this website, store your preferences, and provide the content
                      and advertisements that are relevant to you.
                    </p>
                  )}
                  {!showMore && (
                    <p className="mt-1 text-slate-500">
                      The cookies that are categorised as "Necessary" are stored on your browser as they are
                      essential for enabling the basic functionalities of the site.{' '}
                      <button
                        onClick={() => setShowMore(true)}
                        className="text-blue-600 hover:underline font-medium"
                      >
                        Show more
                      </button>
                    </p>
                  )}
                </div>

                {/* Category Accordions */}
                <div className="space-y-2">
                  {CATEGORIES.map((cat) => (
                    <div key={cat.id} className="border border-slate-200 rounded-xl overflow-hidden">
                      {/* Accordion Header */}
                      <button
                        onClick={() => toggle(cat.id)}
                        className="w-full flex items-center justify-between px-4 py-3.5 bg-white hover:bg-slate-50 transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <ChevronRight
                            size={14}
                            className={`text-slate-400 transition-transform duration-200 ${
                              expanded[cat.id] ? 'rotate-90' : ''
                            }`}
                          />
                          <span className="text-[14px] font-bold text-slate-800">{cat.title}</span>
                        </div>
                        {cat.always ? (
                          <span className="text-[12px] font-bold text-green-600 tracking-wide">Always Active</span>
                        ) : (
                          /* Toggle Switch */
                          <div
                            role="switch"
                            aria-checked={enabled[cat.id]}
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleEnabled(cat.id);
                            }}
                            className={`relative w-10 h-5 rounded-full cursor-pointer transition-colors duration-200 ${
                              enabled[cat.id] ? 'bg-blue-600' : 'bg-slate-200'
                            }`}
                          >
                            <span
                              className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${
                                enabled[cat.id] ? 'translate-x-5' : 'translate-x-0'
                              }`}
                            />
                          </div>
                        )}
                      </button>

                      {/* Accordion Body */}
                      {expanded[cat.id] && (
                        <div className="px-5 pb-4 text-[13px] text-slate-600 leading-relaxed border-t border-slate-100 pt-3 bg-slate-50">
                          {cat.description}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Buttons */}
              <div className="shrink-0 px-7 py-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleRejectAll}
                  className="flex-1 py-2.5 px-4 text-[13px] font-bold text-blue-700 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Reject All
                </button>
                <button
                  onClick={handleSave}
                  className="flex-1 py-2.5 px-4 text-[13px] font-bold text-blue-700 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Save My Preferences
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 py-2.5 px-4 text-[13px] font-bold text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition-colors shadow-md"
                >
                  Accept All
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
