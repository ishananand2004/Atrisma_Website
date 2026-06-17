import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { submitContact } from '@/services/api';
import { OFFICE_LOCATIONS } from '@/constants';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import PageHeader from '@/components/layout/PageHeader';
import GlassCard from '@/components/ui/GlassCard';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const response = await submitContact(formData);
      if (response && response.success) {
        setSubmitStatus({ type: 'success', message: response.message || 'Message sent successfully. We will get back to you soon.' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus({ type: 'error', message: response?.message || 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      const errorMsg = error.response?.data?.message || 'Failed to send message. Please try again.';
      setSubmitStatus({ type: 'error', message: errorMsg });
    } finally {
      setIsSubmitting(false);
    }
  };

  const headOffice = OFFICE_LOCATIONS[0];

  return (
    <div className="w-full min-h-screen bg-white dark:bg-[#030014] transition-colors duration-300">
      <Helmet>
        <title>Contact Us | Atrisma Pharmaceuticals</title>
        <meta name="description" content="Get in touch with Atrisma Pharmaceuticals. We're here to answer any questions about our products, partnerships, or careers." />
      </Helmet>

      <PageHeader 
        title="Get in Touch"
        subtitle="We're here to answer any questions you may have about our products, partnerships, or careers."
      />

      <div className="container mx-auto px-6 md:px-10 py-10 md:py-24">
        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="glass-panel p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[var(--color-brand-cyan)]/10 text-[var(--color-brand-cyan)] rounded-full flex items-center justify-center mb-6 border border-[var(--color-brand-cyan)]/20">
                  <MapPin size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">Headquarters</h3>
                <p className="text-gray-600 dark:text-white/60 transition-colors">{headOffice.address}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="glass-panel p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[var(--color-brand-cyan)]/10 text-[var(--color-brand-cyan)] rounded-full flex items-center justify-center mb-6 border border-[var(--color-brand-cyan)]/20">
                  <MapPin size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">Regional Office</h3>
                <p className="text-gray-600 dark:text-white/60 transition-colors leading-relaxed">
                  Atrisma Pharmaceuticals Private Limited,<br />
                  Badh Chowk near Hanuman Mandir Bela,<br />
                  Muzaffarpur
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="glass-panel p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[var(--color-brand-cyan)]/10 text-[var(--color-brand-cyan)] rounded-full flex items-center justify-center mb-6 border border-[var(--color-brand-cyan)]/20">
                  <Mail size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">Email</h3>
                <p className="text-gray-600 dark:text-white/60 transition-colors">atrismapharmaceuticals@gmail.com</p>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="glass-panel p-8 md:p-12 h-full rounded-3xl shadow-sm">
              <h2 className="text-3xl font-heading font-bold text-gray-900 dark:text-white mb-8 transition-colors">Send us a <span className="text-[var(--color-brand-cyan)]">Message</span></h2>
              
              {submitStatus && (
                <div className={`p-4 mb-6 rounded-lg ${submitStatus.type === 'success' ? 'bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20'}`}>
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-white/70 transition-colors">Full Name</label>
                    <Input 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      placeholder="Write your name" 
                      required 
                      className="bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/30 focus:border-[var(--color-brand-cyan)] transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-white/70 transition-colors">Email Address</label>
                    <Input 
                      type="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      placeholder="Write your email address" 
                      required 
                      className="bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/30 focus:border-[var(--color-brand-cyan)] transition-colors"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-white/70 transition-colors">Subject</label>
                  <Input 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange} 
                    placeholder="How can we help you?" 
                    required 
                    className="bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/30 focus:border-[var(--color-brand-cyan)] transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-white/70 transition-colors">Message</label>
                  <Textarea 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    placeholder="Your message here..." 
                    rows={6} 
                    required 
                    className="bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/30 focus:border-[var(--color-brand-cyan)] transition-colors resize-none"
                  />
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto bg-[var(--color-brand-cyan)] hover:bg-[#0891b2] text-white font-bold px-8 py-6 text-lg transition-colors shadow-md">
                  {isSubmitting ? 'Sending...' : (
                    <>
                      Send Message <Send size={18} className="ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
