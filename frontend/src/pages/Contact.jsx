import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { submitContact } from '@/services/api';
import { OFFICE_LOCATIONS } from '@/constants';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

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
      await submitContact(formData);
      setSubmitStatus({ type: 'success', message: 'Message sent successfully. We will get back to you soon.' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const headOffice = OFFICE_LOCATIONS[0];

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Simple Header */}
      <div className="bg-primary pt-32 pb-20 px-4 md:px-8 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Get in Touch</h1>
        <p className="text-xl text-lightAccent max-w-2xl mx-auto">
          We're here to answer any questions you may have about our products, partnerships, or careers.
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-16 -mt-10">
        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="w-12 h-12 bg-blue-50 text-accent rounded-full flex items-center justify-center mb-6">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Headquarters</h3>
              <p className="text-gray-600 mb-4">{headOffice.address}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="w-12 h-12 bg-blue-50 text-accent rounded-full flex items-center justify-center mb-6">
                <Phone size={24} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Phone</h3>
              <p className="text-gray-600 mb-4">{headOffice.phone}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="w-12 h-12 bg-blue-50 text-accent rounded-full flex items-center justify-center mb-6">
                <Mail size={24} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Email</h3>
              <p className="text-gray-600 mb-4">contact@atrisma.com</p>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-2 bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-heading font-bold text-primary mb-6">Send us a Message</h2>
            
            {submitStatus && (
              <div className={`p-4 mb-6 rounded-lg ${submitStatus.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Full Name</label>
                  <Input 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="John Doe" 
                    required 
                    className="bg-gray-50 border-gray-200"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Email Address</label>
                  <Input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="john@example.com" 
                    required 
                    className="bg-gray-50 border-gray-200"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Subject</label>
                <Input 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleChange} 
                  placeholder="How can we help you?" 
                  required 
                  className="bg-gray-50 border-gray-200"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Message</label>
                <Textarea 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  placeholder="Your message here..." 
                  rows={6} 
                  required 
                  className="bg-gray-50 border-gray-200 resize-none"
                />
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
                {isSubmitting ? 'Sending...' : (
                  <>
                    Send Message <Send size={18} className="ml-2" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
