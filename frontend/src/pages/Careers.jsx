import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHeader from '@/components/layout/PageHeader';
import { getCareers } from '@/services/api';
import GlassCard from '@/components/ui/GlassCard';
const benefits = [
  {
    title: "Pan India Presence 🇮🇳",
    desc: "We have a growing distribution network across multiple states in India, ensuring timely delivery and accessibility of our pharmaceutical products.",
    icon: "🇮🇳",
  },
  {
    title: "Expanding Globally 🌍",
    desc: "We are actively working towards expanding our presence in international markets with a focus on quality, compliance, and innovation.",
    icon: "🌍",
  },
  {
    title: "Trusted Quality 🏥",
    desc: "Our products are manufactured under strict quality standards to ensure safety, effectiveness, and trust among healthcare professionals.",
    icon: "🏥",
  },
];
export default function Careers() {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getCareers().then(setJobs);
  }, []);

  const handleApply = (job) => {
    navigate('/apply-job', {
      state: {
        job: {
          title: job.title,
          location: job.location,
          type: job.type,
        },
      },
    });
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-[#030014]">
      <PageHeader 
        title="Build Your Career With Us"
        subtitle="Join a team of passionate professionals dedicated to making a difference in global healthcare."
      />

      {/* Culture & Benefits */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neonPurple/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-6 md:px-10 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Why <span className="text-neonCyan">Atrisma?</span></h2>
            <p className="text-white/50 max-w-2xl mx-auto">We offer a dynamic, inclusive, and rewarding environment where your talents can thrive.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
  {benefits.map((item, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: i * 0.15 }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <GlassCard
        hoverEffect={true}
        className="p-8 text-center h-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.1)]"
      >
        {/* Icon */}
        <div className="w-14 h-14 bg-gradient-to-br from-cyan-400/20 to-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl border border-white/10">
          {item.icon}
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-white mb-3">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-white/60 text-sm leading-relaxed">
          {item.desc}
        </p>

        {/* Bottom Glow Line */}
        <div className="mt-6 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full mx-auto"></div>
      </GlassCard>
    </motion.div>
  ))}
</div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="jobs" className="py-24 bg-[#01000B] flex-grow border-t border-white/5">
        <div className="container mx-auto px-6 md:px-10 max-w-5xl">
          <div className="mb-16">
            <h2 className="text-3xl font-heading font-bold text-white mb-4">Current <span className="text-neonPurple">Openings</span></h2>
            <p className="text-white/50">Find your next role at Atrisma Pharmaceuticals.</p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
  {jobs.map((job, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(0,255,255,0.08)]">

        {/* Left Side */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">
            {job.title}
          </h3>

          <div className="flex flex-wrap gap-3 text-sm text-white/60">
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">
              {job.department}
            </span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">
              📍 {job.location}
            </span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10">
              {job.type}
            </span>
          </div>
        </div>

        {/* Right Side */}
        <div className="mt-4 md:mt-0">
          <button
            type="button"
            onClick={() => handleApply(job)}
            className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Apply Now →
          </button>
        </div>
      </div>
    </motion.div>
  ))}
</div>
        </div>
      </section>
    </div>
  );
}
