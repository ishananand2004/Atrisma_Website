import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Shield, 
  FileText, 
  Database, 
  Send, 
  CheckCircle, 
  Share2, 
  Lock, 
  Clock, 
  Cookie, 
  ExternalLink, 
  AlertCircle, 
  UserCheck, 
  Mail, 
  RefreshCw, 
  Scale, 
  Calendar,
  ChevronRight,
  Sparkles,
  MapPin,
  Building
} from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import { Link } from 'react-router-dom';

const SECTIONS = [
  { id: 'introduction', number: '01', title: 'Introduction', icon: Shield },
  { id: 'scope', number: '02', title: 'Scope of This Policy', icon: FileText },
  { id: 'info-collected', number: '03', title: 'Information We Collect', icon: Database },
  { id: 'how-collected', number: '04', title: 'How We Collect Information', icon: Send },
  { id: 'how-used', number: '05', title: 'How We Use Information', icon: CheckCircle },
  { id: 'email-forms', number: '06', title: 'Email & Form Submissions', icon: Mail },
  { id: 'data-sharing', number: '07', title: 'Data Sharing & Disclosure', icon: Share2 },
  { id: 'data-security', number: '08', title: 'Data Security', icon: Lock },
  { id: 'data-retention', number: '09', title: 'Data Retention', icon: Clock },
  { id: 'cookies', number: '10', title: 'Cookies & Website Technologies', icon: Cookie },
  { id: 'third-party', number: '11', title: 'Third-Party Links', icon: ExternalLink },
  { id: 'children', number: '12', title: "Children's Privacy", icon: AlertCircle },
  { id: 'user-rights', number: '13', title: 'Your Rights & Choices', icon: UserCheck },
  { id: 'grievance', number: '14', title: 'Grievance & Privacy Inquiries', icon: Building },
  { id: 'changes', number: '15', title: 'Changes to This Policy', icon: RefreshCw },
  { id: 'governing-law', number: '16', title: 'Governing Law', icon: Scale },
  { id: 'last-updated', number: '17', title: 'Last Updated', icon: Calendar },
];

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState('introduction');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of SECTIONS) {
        const element = document.getElementById(section.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="w-full min-h-screen bg-white dark:bg-[#030014] transition-colors duration-300">
      <Helmet>
        <title>Atrisma Pharmaceuticals | Privacy Policy</title>
        <meta 
          name="description" 
          content="Official Privacy Policy of Atrisma Pharmaceuticals Pvt. Ltd. Learn how we handle, protect, and process personal information submitted through our website and forms." 
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Header */}
      <PageHeader 
        title="Privacy Policy"
        subtitle="Our commitment to transparency, data protection, and respecting your privacy."
      />

      <div className="container mx-auto px-4 sm:px-6 md:px-10 py-12 md:py-20 relative">
        {/* Decorative background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--color-brand-cyan)]/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-10 w-[500px] h-[500px] bg-[var(--color-brand-purple)]/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10">
          
          {/* Quick Navigation Sidebar (Desktop) */}
          <aside className="hidden lg:block lg:col-span-4 xl:col-span-3">
            <div className="sticky top-28 space-y-4">
              <div className="glass-panel p-5 rounded-2xl border border-gray-200 dark:border-white/10 shadow-sm">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-200 dark:border-white/10">
                  <Sparkles size={16} className="text-[var(--color-brand-cyan)]" />
                  <h2 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white">
                    Policy Contents
                  </h2>
                </div>
                <nav className="space-y-1 max-h-[calc(100vh-220px)] overflow-y-auto pr-1 text-xs">
                  {SECTIONS.map((sec) => (
                    <button
                      key={sec.id}
                      onClick={() => scrollToSection(sec.id)}
                      className={`w-full flex items-center justify-between text-left px-3 py-2 rounded-lg transition-all duration-200 cursor-pointer ${
                        activeSection === sec.id
                          ? 'bg-[var(--color-brand-cyan)]/15 text-[var(--color-brand-cyan)] font-semibold border-l-2 border-[var(--color-brand-cyan)]'
                          : 'text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5'
                      }`}
                    >
                      <span className="truncate flex items-center gap-2">
                        <span className="text-[10px] text-gray-400 dark:text-white/40">{sec.number}</span>
                        {sec.title}
                      </span>
                      <ChevronRight size={12} className={`shrink-0 transition-transform ${activeSection === sec.id ? 'translate-x-0.5' : 'opacity-40'}`} />
                    </button>
                  ))}
                </nav>
              </div>

              {/* Quick Contact Card */}
              <div className="glass-panel p-5 rounded-2xl border border-gray-200 dark:border-white/10 text-center shadow-sm">
                <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-[var(--color-brand-cyan)]/10 text-[var(--color-brand-cyan)] flex items-center justify-center border border-[var(--color-brand-cyan)]/20">
                  <Mail size={18} />
                </div>
                <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-1">Privacy Queries?</h3>
                <p className="text-xs text-gray-600 dark:text-white/60 mb-3">Reach our privacy team directly for any data assistance.</p>
                <a 
                  href="mailto:atrismapharmaceuticals@gmail.com"
                  className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold rounded-lg bg-[var(--color-brand-cyan)] text-white hover:bg-[#0891b2] transition-colors shadow-sm w-full"
                >
                  Contact Privacy Team
                </a>
              </div>
            </div>
          </aside>

          {/* Main Privacy Policy Content */}
          <main className="lg:col-span-8 xl:col-span-9 max-w-4xl space-y-12">
            
            {/* Introductory Notice Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-gray-200 dark:border-white/10 shadow-sm relative overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-gray-200 dark:border-white/10">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[var(--color-brand-cyan)]/10 text-[var(--color-brand-cyan)] border border-[var(--color-brand-cyan)]/20 mb-2">
                    <Shield size={12} />
                    Official Legal Notice
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 dark:text-white">
                    Atrisma Pharmaceuticals Pvt. Ltd.
                  </h2>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-xs text-gray-600 dark:text-white/70">
                  <Calendar size={14} className="text-[var(--color-brand-cyan)]" />
                  <span>Effective: August 2026</span>
                </div>
              </div>
              <p className="mt-6 text-gray-700 dark:text-white/70 text-base leading-relaxed">
                Atrisma Pharmaceuticals Pvt. Ltd. is dedicated to maintaining the highest ethical and professional standards in all operations, including the responsible collection and protection of user information. This document provides clear, transparent information regarding how we handle information submitted to our website.
              </p>
            </motion.div>

            {/* Section 1: Introduction */}
            <section id="introduction" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[var(--color-brand-cyan)]/10 text-[var(--color-brand-cyan)] flex items-center justify-center font-bold text-sm border border-[var(--color-brand-cyan)]/20 shrink-0">
                  01
                </div>
                <h2 className="text-2xl font-heading font-bold text-gray-900 dark:text-white">
                  Introduction
                </h2>
              </div>
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-white/10 space-y-4 text-gray-700 dark:text-white/70 leading-relaxed text-sm sm:text-base">
                <p>
                  Atrisma Pharmaceuticals Pvt. Ltd. (&ldquo;Atrisma Pharmaceuticals&rdquo;, &ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is an Indian pharmaceutical company dedicated to enhancing patient care and delivering quality healthcare solutions across India.
                </p>
                <p>
                  We deeply value the trust placed in us by visitors, healthcare professionals, business partners, and job applicants. This Privacy Policy explains our practices regarding the collection, use, storage, and protection of personal information gathered through our official website and associated direct communications.
                </p>
                <p>
                  By accessing or using our website, submitting inquiries, or applying for employment opportunities with Atrisma Pharmaceuticals, you acknowledge that you have read and understood the provisions of this Privacy Policy.
                </p>
              </div>
            </section>

            {/* Section 2: Scope */}
            <section id="scope" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[var(--color-brand-cyan)]/10 text-[var(--color-brand-cyan)] flex items-center justify-center font-bold text-sm border border-[var(--color-brand-cyan)]/20 shrink-0">
                  02
                </div>
                <h2 className="text-2xl font-heading font-bold text-gray-900 dark:text-white">
                  Scope of This Policy
                </h2>
              </div>
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-white/10 space-y-4 text-gray-700 dark:text-white/70 leading-relaxed text-sm sm:text-base">
                <p>
                  This Privacy Policy applies specifically to information collected through our official digital touchpoints and direct company interactions, including:
                </p>
                <ul className="space-y-2.5 list-none pl-0">
                  {[
                    'The official Atrisma Pharmaceuticals website and all its accessible pages.',
                    'The Contact Us inquiry form and general communication channels.',
                    'The Careers portal and Job Application submission forms.',
                    'Product-related inquiries from healthcare professionals, distributors, and customers.',
                    'Direct email, telephonic, or physical correspondence initiated through our listed contact channels.'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-cyan)] mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="pt-2 text-xs text-gray-500 dark:text-white/50 border-t border-gray-200 dark:border-white/5">
                  This policy does not apply to offline activities or external third-party websites that may be linked from our platform.
                </p>
              </div>
            </section>

            {/* Section 3: Information We Collect */}
            <section id="info-collected" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[var(--color-brand-cyan)]/10 text-[var(--color-brand-cyan)] flex items-center justify-center font-bold text-sm border border-[var(--color-brand-cyan)]/20 shrink-0">
                  03
                </div>
                <h2 className="text-2xl font-heading font-bold text-gray-900 dark:text-white">
                  Information We Collect
                </h2>
              </div>
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-white/10 space-y-6 text-gray-700 dark:text-white/70 leading-relaxed text-sm sm:text-base">
                <p>
                  We collect only the specific information required to process your inquiries, evaluate job applications, and ensure smooth website operation. We do not collect unnecessary personal or sensitive information.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10">
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                      <Mail size={16} className="text-[var(--color-brand-cyan)]" />
                      Contact Form Submissions
                    </h3>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-gray-600 dark:text-white/60">
                      <li>• Full Name</li>
                      <li>• Email Address</li>
                      <li>• Subject of inquiry</li>
                      <li>• Message content</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10">
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                      <FileText size={16} className="text-[var(--color-brand-cyan)]" />
                      Job Application Submissions
                    </h3>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-gray-600 dark:text-white/60">
                      <li>• Full Name</li>
                      <li>• Email Address & Phone Number</li>
                      <li>• Job Title / Role applied for</li>
                      <li>• Resume / CV document (PDF/DOC/DOCX up to 5MB)</li>
                      <li>• Cover Letter / Message</li>
                    </ul>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10">
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <Database size={16} className="text-[var(--color-brand-cyan)]" />
                    Technical & Browser Data
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-white/60 leading-relaxed">
                    When you access our website, standard web protocols may automatically record basic technical data such as your IP address, browser type, operating system, referring URL, and interface preferences (e.g., your selected Dark/Light visual theme and cookie consent settings stored locally in your browser).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[var(--color-brand-cyan)]/5 border border-[var(--color-brand-cyan)]/20 text-xs sm:text-sm text-gray-700 dark:text-white/80">
                  <strong className="text-gray-900 dark:text-white block mb-1">What We Do NOT Collect:</strong>
                  Our website does not collect sensitive medical histories, patient health data, credit card/banking credentials, or biometric information.
                </div>
              </div>
            </section>

            {/* Section 4: How We Collect Information */}
            <section id="how-collected" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[var(--color-brand-cyan)]/10 text-[var(--color-brand-cyan)] flex items-center justify-center font-bold text-sm border border-[var(--color-brand-cyan)]/20 shrink-0">
                  04
                </div>
                <h2 className="text-2xl font-heading font-bold text-gray-900 dark:text-white">
                  How We Collect Information
                </h2>
              </div>
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-white/10 space-y-4 text-gray-700 dark:text-white/70 leading-relaxed text-sm sm:text-base">
                <p>We collect information through transparent and direct methods:</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-gray-50 dark:bg-white/5">
                    <Send size={18} className="text-[var(--color-brand-cyan)] mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-gray-900 dark:text-white text-sm block">Direct User Input:</strong>
                      <span className="text-xs sm:text-sm text-gray-600 dark:text-white/60">
                        Information submitted voluntarily when filling out our Contact form, submitting a resume on the Careers portal, or emailing us directly.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-gray-50 dark:bg-white/5">
                    <Database size={18} className="text-[var(--color-brand-cyan)] mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-gray-900 dark:text-white text-sm block">Standard Server Logs:</strong>
                      <span className="text-xs sm:text-sm text-gray-600 dark:text-white/60">
                        Routine server access records that log IP addresses and request headers for security monitoring and server diagnostics.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-gray-50 dark:bg-white/5">
                    <Cookie size={18} className="text-[var(--color-brand-cyan)] mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-gray-900 dark:text-white text-sm block">Client-Side Local Storage:</strong>
                      <span className="text-xs sm:text-sm text-gray-600 dark:text-white/60">
                        Browser local storage is used solely to save your on-site preferences, such as your theme selection and cookie consent preferences.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5: How We Use Information */}
            <section id="how-used" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[var(--color-brand-cyan)]/10 text-[var(--color-brand-cyan)] flex items-center justify-center font-bold text-sm border border-[var(--color-brand-cyan)]/20 shrink-0">
                  05
                </div>
                <h2 className="text-2xl font-heading font-bold text-gray-900 dark:text-white">
                  How We Use Information
                </h2>
              </div>
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-white/10 space-y-4 text-gray-700 dark:text-white/70 leading-relaxed text-sm sm:text-base">
                <p>
                  Atrisma Pharmaceuticals processes and uses the collected information strictly for legitimate, reasonable operational purposes, including:
                </p>
                <ul className="space-y-2.5 list-none pl-0">
                  {[
                    'Responding promptly to inquiries, questions, and feedback submitted via our Contact page.',
                    'Evaluating candidate qualifications, reviewing resumes, and communicating regarding job opportunities.',
                    'Providing relevant pharmaceutical product information and commercial details to distributors and healthcare professionals upon request.',
                    'Ensuring the security, integrity, and operational availability of our website and IT infrastructure.',
                    'Optimizing website performance, visual layout, and cross-device responsiveness.',
                    'Complying with applicable legal, statutory, and regulatory obligations under Indian law.'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-[var(--color-brand-cyan)] mt-1 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Section 6: Email and Form Submissions */}
            <section id="email-forms" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[var(--color-brand-cyan)]/10 text-[var(--color-brand-cyan)] flex items-center justify-center font-bold text-sm border border-[var(--color-brand-cyan)]/20 shrink-0">
                  06
                </div>
                <h2 className="text-2xl font-heading font-bold text-gray-900 dark:text-white">
                  Email and Form Submissions
                </h2>
              </div>
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-white/10 space-y-4 text-gray-700 dark:text-white/70 leading-relaxed text-sm sm:text-base">
                <p>
                  When you submit details through our Contact form or Careers application portal, the submitted information is received by our backend server and transmitted directly to Atrisma Pharmaceuticals for human review and response.
                </p>
                <div className="p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 space-y-2 text-xs sm:text-sm">
                  <p>
                    <strong className="text-gray-900 dark:text-white">Inquiry Processing:</strong> Your message details are routed to our support team to formulate an appropriate response.
                  </p>
                  <p>
                    <strong className="text-gray-900 dark:text-white">Application Processing:</strong> Candidate submissions, including uploaded resumes and contact details, are reviewed by our hiring team for suitable vacancies.
                  </p>
                </div>
                <p className="text-xs text-gray-500 dark:text-white/50">
                  By submitting these forms, you consent to the internal processing and transmission of your submitted details for the stated purpose.
                </p>
              </div>
            </section>

            {/* Section 7: Data Sharing */}
            <section id="data-sharing" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[var(--color-brand-cyan)]/10 text-[var(--color-brand-cyan)] flex items-center justify-center font-bold text-sm border border-[var(--color-brand-cyan)]/20 shrink-0">
                  07
                </div>
                <h2 className="text-2xl font-heading font-bold text-gray-900 dark:text-white">
                  Data Sharing & Disclosure
                </h2>
              </div>
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-white/10 space-y-4 text-gray-700 dark:text-white/70 leading-relaxed text-sm sm:text-base">
                <p>
                  <strong className="text-gray-900 dark:text-white">We do not sell, rent, or lease your personal information to any third parties for advertising or commercial marketing.</strong>
                </p>
                <p>Personal information may be disclosed only under the following limited circumstances:</p>
                <ul className="space-y-2.5 list-none pl-0">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-cyan)] mt-2 shrink-0" />
                    <span>
                      <strong className="text-gray-900 dark:text-white">Authorized Internal Staff:</strong> Employees and hiring managers within Atrisma Pharmaceuticals who need access to evaluate applications or respond to business requests.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-cyan)] mt-2 shrink-0" />
                    <span>
                      <strong className="text-gray-900 dark:text-white">Operational Service Providers:</strong> Essential technical service providers (such as web hosting and email relay systems) operating under strict confidentiality obligations.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-cyan)] mt-2 shrink-0" />
                    <span>
                      <strong className="text-gray-900 dark:text-white">Legal & Regulatory Requirements:</strong> When mandated by applicable Indian laws, judicial proceedings, government directives, or law enforcement investigations.
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 8: Data Security */}
            <section id="data-security" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[var(--color-brand-cyan)]/10 text-[var(--color-brand-cyan)] flex items-center justify-center font-bold text-sm border border-[var(--color-brand-cyan)]/20 shrink-0">
                  08
                </div>
                <h2 className="text-2xl font-heading font-bold text-gray-900 dark:text-white">
                  Data Security
                </h2>
              </div>
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-white/10 space-y-4 text-gray-700 dark:text-white/70 leading-relaxed text-sm sm:text-base">
                <p>
                  Atrisma Pharmaceuticals takes reasonable and appropriate technical and organizational measures to safeguard your personal information against unauthorized access, loss, alteration, or misuse.
                </p>
                <p>
                  Access to candidate resumes and inquiry submissions is restricted to authorized personnel who require access to discharge their official responsibilities. We continually review and update our procedures in line with technological developments.
                </p>
                <p className="text-xs text-gray-500 dark:text-white/50">
                  Please note that while we employ reasonable measures, no transmission of data over the internet can be guaranteed as completely secure.
                </p>
              </div>
            </section>

            {/* Section 9: Data Retention */}
            <section id="data-retention" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[var(--color-brand-cyan)]/10 text-[var(--color-brand-cyan)] flex items-center justify-center font-bold text-sm border border-[var(--color-brand-cyan)]/20 shrink-0">
                  09
                </div>
                <h2 className="text-2xl font-heading font-bold text-gray-900 dark:text-white">
                  Data Retention
                </h2>
              </div>
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-white/10 space-y-4 text-gray-700 dark:text-white/70 leading-relaxed text-sm sm:text-base">
                <p>
                  We retain personal information only for the duration reasonably necessary to fulfill the purposes for which it was originally collected, including:
                </p>
                <ul className="space-y-2 list-none pl-0 text-sm">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-cyan)] mt-2 shrink-0" />
                    <span><strong>General Inquiries:</strong> Retained until the inquiry has been resolved and for a reasonable record-keeping period thereafter.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-cyan)] mt-2 shrink-0" />
                    <span><strong>Job Applications:</strong> Retained during the recruitment assessment period and for a reasonable duration to consider applicants for suitable future vacancies, unless a request for deletion is received.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-cyan)] mt-2 shrink-0" />
                    <span><strong>Legal Compliance:</strong> Retained as required to satisfy applicable statutory, tax, or legal obligations under Indian law.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 10: Cookies and Website Technologies */}
            <section id="cookies" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[var(--color-brand-cyan)]/10 text-[var(--color-brand-cyan)] flex items-center justify-center font-bold text-sm border border-[var(--color-brand-cyan)]/20 shrink-0">
                  10
                </div>
                <h2 className="text-2xl font-heading font-bold text-gray-900 dark:text-white">
                  Cookies and Website Technologies
                </h2>
              </div>
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-white/10 space-y-4 text-gray-700 dark:text-white/70 leading-relaxed text-sm sm:text-base">
                <p>
                  Our website includes a Cookie Consent management interface that allows visitors to customize their preferences across categories (Necessary, Functional, Analytics, and Performance).
                </p>
                <div className="p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 space-y-2 text-xs sm:text-sm">
                  <p>
                    <strong className="text-gray-900 dark:text-white">Essential Local Storage:</strong> Stored directly on your device via browser <code className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-white/10 text-[var(--color-brand-cyan)]">localStorage</code> to remember your cookie consent preferences (<code className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-white/10 text-[var(--color-brand-cyan)]">atrisma_cookie_consent</code>) and your preferred visual theme (dark/light mode).
                  </p>
                  <p>
                    <strong className="text-gray-900 dark:text-white">Third-Party Tracking:</strong> Currently, no third-party behavioral tracking or ad-retargeting pixels are active on the website. If analytics or additional tools are introduced in the future, this policy and your consent options will be updated accordingly.
                  </p>
                </div>
                <p>
                  You can modify or clear your stored browser preferences at any time by clearing your browser cookies and site data.
                </p>
              </div>
            </section>

            {/* Section 11: Third-Party Links */}
            <section id="third-party" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[var(--color-brand-cyan)]/10 text-[var(--color-brand-cyan)] flex items-center justify-center font-bold text-sm border border-[var(--color-brand-cyan)]/20 shrink-0">
                  11
                </div>
                <h2 className="text-2xl font-heading font-bold text-gray-900 dark:text-white">
                  Third-Party Links
                </h2>
              </div>
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-white/10 space-y-4 text-gray-700 dark:text-white/70 leading-relaxed text-sm sm:text-base">
                <p>
                  Our website may contain hyperlinks to external third-party websites or services for informational purposes. Atrisma Pharmaceuticals does not control and is not responsible for the privacy practices, content, or policies of external websites.
                </p>
                <p>
                  We encourage you to review the privacy policies of any third-party websites you visit before providing any personal data.
                </p>
              </div>
            </section>

            {/* Section 12: Children's Privacy */}
            <section id="children" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[var(--color-brand-cyan)]/10 text-[var(--color-brand-cyan)] flex items-center justify-center font-bold text-sm border border-[var(--color-brand-cyan)]/20 shrink-0">
                  12
                </div>
                <h2 className="text-2xl font-heading font-bold text-gray-900 dark:text-white">
                  Children&apos;s Privacy
                </h2>
              </div>
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-white/10 space-y-4 text-gray-700 dark:text-white/70 leading-relaxed text-sm sm:text-base">
                <p>
                  Our website is intended for general audiences, healthcare professionals, and adult job seekers. We do not knowingly solicit or collect personal information from individuals under the age of 18.
                </p>
                <p>
                  If we discover that personal data of a minor has been unintentionally submitted without verifiable parental or legal guardian consent, we will take prompt steps to delete such information from our records.
                </p>
              </div>
            </section>

            {/* Section 13: User Rights */}
            <section id="user-rights" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[var(--color-brand-cyan)]/10 text-[var(--color-brand-cyan)] flex items-center justify-center font-bold text-sm border border-[var(--color-brand-cyan)]/20 shrink-0">
                  13
                </div>
                <h2 className="text-2xl font-heading font-bold text-gray-900 dark:text-white">
                  Your Rights & Choices
                </h2>
              </div>
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-white/10 space-y-4 text-gray-700 dark:text-white/70 leading-relaxed text-sm sm:text-base">
                <p>
                  Subject to applicable Indian laws and reasonable identity verification, you have the following rights concerning your personal information:
                </p>
                <ul className="space-y-2.5 list-none pl-0">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-cyan)] mt-2 shrink-0" />
                    <span><strong className="text-gray-900 dark:text-white">Access:</strong> You may request details of the personal information you have submitted to us.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-cyan)] mt-2 shrink-0" />
                    <span><strong className="text-gray-900 dark:text-white">Correction:</strong> You may request the rectification of inaccurate or outdated personal details.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-cyan)] mt-2 shrink-0" />
                    <span><strong className="text-gray-900 dark:text-white">Deletion:</strong> You may request the deletion of your submitted application or inquiry records, subject to legal record-keeping obligations.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-cyan)] mt-2 shrink-0" />
                    <span><strong className="text-gray-900 dark:text-white">Withdrawal of Consent:</strong> You may withdraw your consent for communications at any time.</span>
                  </li>
                </ul>
                <p className="pt-2 text-xs sm:text-sm">
                  To exercise any of these rights, please write to our privacy contact at <a href="mailto:atrismapharmaceuticals@gmail.com" className="text-[var(--color-brand-cyan)] hover:underline font-semibold">atrismapharmaceuticals@gmail.com</a>.
                </p>
              </div>
            </section>

            {/* Section 14: Grievance / Privacy Queries */}
            <section id="grievance" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[var(--color-brand-cyan)]/10 text-[var(--color-brand-cyan)] flex items-center justify-center font-bold text-sm border border-[var(--color-brand-cyan)]/20 shrink-0">
                  14
                </div>
                <h2 className="text-2xl font-heading font-bold text-gray-900 dark:text-white">
                  Grievance & Privacy Inquiries
                </h2>
              </div>
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-white/10 space-y-6 text-gray-700 dark:text-white/70 leading-relaxed text-sm sm:text-base">
                <p>
                  For any questions, concerns, clarification requests, or grievances related to this Privacy Policy or our data handling practices, please contact Atrisma Pharmaceuticals:
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 space-y-2">
                    <div className="text-[var(--color-brand-cyan)] flex items-center gap-2 font-bold text-sm">
                      <Mail size={16} /> Official Email
                    </div>
                    <a 
                      href="mailto:atrismapharmaceuticals@gmail.com" 
                      className="text-gray-900 dark:text-white font-semibold text-sm hover:text-[var(--color-brand-cyan)] transition-colors break-all block"
                    >
                      atrismapharmaceuticals@gmail.com
                    </a>
                    <span className="text-xs text-gray-500 dark:text-white/50 block">Dedicated for privacy & general inquiries</span>
                  </div>

                  <div className="p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 space-y-2">
                    <div className="text-[var(--color-brand-cyan)] flex items-center gap-2 font-bold text-sm">
                      <Building size={16} /> Grievance Officer
                    </div>
                    <span className="text-gray-900 dark:text-white font-medium text-xs sm:text-sm block">
                      [INFORMATION TO BE PROVIDED]
                    </span>
                    <span className="text-xs text-gray-500 dark:text-white/50 block">Atrisma Pharmaceuticals Pvt. Ltd.</span>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 text-xs sm:text-sm">
                    <MapPin size={16} className="text-[var(--color-brand-cyan)] mt-1 shrink-0" />
                    <div>
                      <strong className="text-gray-900 dark:text-white block">Head Office:</strong>
                      <span>Flat no.501, Tower-B14, Supertech Eco Village 1, Sector 1, Greater Noida, PIN - 201306, Uttar Pradesh, India</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-xs sm:text-sm">
                    <MapPin size={16} className="text-[var(--color-brand-cyan)] mt-1 shrink-0" />
                    <div>
                      <strong className="text-gray-900 dark:text-white block">Regional Office:</strong>
                      <span>Atrisma Pharmaceuticals Private Limited, Badh Chowk near Hanuman Mandir Bela, Muzaffarpur, Bihar, India</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 15: Changes to This Policy */}
            <section id="changes" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[var(--color-brand-cyan)]/10 text-[var(--color-brand-cyan)] flex items-center justify-center font-bold text-sm border border-[var(--color-brand-cyan)]/20 shrink-0">
                  15
                </div>
                <h2 className="text-2xl font-heading font-bold text-gray-900 dark:text-white">
                  Changes to This Policy
                </h2>
              </div>
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-white/10 space-y-4 text-gray-700 dark:text-white/70 leading-relaxed text-sm sm:text-base">
                <p>
                  Atrisma Pharmaceuticals reserves the right to amend, update, or revise this Privacy Policy periodically to accommodate changes in our operational procedures, website features, or applicable legal and statutory requirements.
                </p>
                <p>
                  Any updates will be published directly on this page with an updated revision date. We recommend that visitors review this Privacy Policy periodically to stay informed about our data protection practices.
                </p>
              </div>
            </section>

            {/* Section 16: Governing Law */}
            <section id="governing-law" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[var(--color-brand-cyan)]/10 text-[var(--color-brand-cyan)] flex items-center justify-center font-bold text-sm border border-[var(--color-brand-cyan)]/20 shrink-0">
                  16
                </div>
                <h2 className="text-2xl font-heading font-bold text-gray-900 dark:text-white">
                  Governing Law
                </h2>
              </div>
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-white/10 space-y-4 text-gray-700 dark:text-white/70 leading-relaxed text-sm sm:text-base">
                <p>
                  This Privacy Policy and any matters, disputes, or claims relating to the handling of personal data through this website shall be governed by and construed in accordance with the applicable laws of India.
                </p>
              </div>
            </section>

            {/* Section 17: Last Updated */}
            <section id="last-updated" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[var(--color-brand-cyan)]/10 text-[var(--color-brand-cyan)] flex items-center justify-center font-bold text-sm border border-[var(--color-brand-cyan)]/20 shrink-0">
                  17
                </div>
                <h2 className="text-2xl font-heading font-bold text-gray-900 dark:text-white">
                  Last Updated
                </h2>
              </div>
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-white/10 space-y-4 text-gray-700 dark:text-white/70 leading-relaxed text-sm sm:text-base">
                <p className="font-semibold text-gray-900 dark:text-white">
                  Last Updated: August 2026
                </p>
                <p className="text-xs text-gray-500 dark:text-white/50">
                  This policy is effective as of the date indicated above and supersedes any prior versions.
                </p>
              </div>
            </section>

            {/* Bottom Navigation / Help Banner */}
            <div className="pt-6 border-t border-gray-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link
                to="/"
                className="text-sm font-semibold text-[var(--color-brand-cyan)] hover:underline flex items-center gap-1"
              >
                ← Return to Home
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-[var(--color-brand-cyan)] hover:bg-[#0891b2] text-white text-sm font-semibold transition-colors shadow-sm"
              >
                Have Questions? Contact Us
              </Link>
            </div>

          </main>
        </div>
      </div>
    </div>
  );
}
