import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PageHeader from '@/components/layout/PageHeader';
import { getCareers } from '@/services/api';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Briefcase, ArrowRight } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';

export default function Careers() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getCareers().then(setJobs);
  }, []);

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
            {['Continuous Learning', 'Global Exposure', 'Health & Wellness'].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="h-full"
              >
                <GlassCard hoverEffect={true} className="p-8 text-center h-full">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 text-neonCyan font-bold border border-white/10">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">We provide the resources, support, and opportunities needed to advance your career.</p>
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

          <div className="space-y-6">
            {jobs.map((job, idx) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <GlassCard hoverEffect={true} className="border-l-4 border-l-neonCyan group">
                  <div className="p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neonCyan transition-colors">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-white/60">
                        <span className="flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10"><Briefcase size={14} className="mr-2 text-neonPurple" /> {job.department}</span>
                        <span className="flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10"><MapPin size={14} className="mr-2 text-neonCyan" /> {job.location}</span>
                        <Badge variant="secondary" className="bg-neonCyan/10 text-neonCyan border-none hover:bg-neonCyan/20">{job.type}</Badge>
                      </div>
                    </div>
                    <Button className="bg-white/10 hover:bg-white text-white hover:text-black shrink-0 border border-white/20 transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                      Apply Now <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
            
            {jobs.length === 0 && (
              <div className="text-center py-16 text-white/40 glass-panel rounded-2xl">
                No open positions currently available. Please check back later.
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
