import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '@/components/sections/HeroSection';
import { getCareers } from '@/services/api';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Briefcase, ArrowRight } from 'lucide-react';

export default function Careers() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getCareers().then(setJobs);
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col">
      <HeroSection 
        title="Build Your Career With Us"
        subtitle="Join a team of passionate professionals dedicated to making a difference in global healthcare."
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop"
        ctaText="View Open Positions"
        ctaLink="#jobs"
      />

      {/* Culture & Benefits */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Why Atrisma?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We offer a dynamic, inclusive, and rewarding environment where your talents can thrive.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {['Continuous Learning', 'Global Exposure', 'Health & Wellness'].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 bg-gray-50 rounded-2xl text-center hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-lightAccent/50 rounded-full flex items-center justify-center mx-auto mb-4 text-primary font-bold">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{benefit}</h3>
                <p className="text-gray-600 text-sm">We provide the resources, support, and opportunities needed to advance your career.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="jobs" className="py-24 bg-gray-50 flex-grow">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="mb-12 flex flex-col md:flex-row justify-between items-end">
            <div>
              <h2 className="text-3xl font-heading font-bold text-primary mb-2">Current Openings</h2>
              <p className="text-gray-600">Find your next role at Atrisma Pharmaceuticals.</p>
            </div>
          </div>

          <div className="space-y-4">
            {jobs.map((job, idx) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-accent group">
                  <CardContent className="p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span className="flex items-center"><Briefcase size={16} className="mr-2" /> {job.department}</span>
                        <span className="flex items-center"><MapPin size={16} className="mr-2" /> {job.location}</span>
                        <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">{job.type}</Badge>
                      </div>
                    </div>
                    <Button className="bg-primary hover:bg-primary/90 shrink-0">
                      Apply Now <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
            
            {jobs.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                No open positions currently available. Please check back later.
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
