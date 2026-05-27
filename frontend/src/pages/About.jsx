import { motion } from 'framer-motion';
import HeroSection from '@/components/sections/HeroSection';
import { TIMELINE } from '@/constants';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Award, Users, Globe } from 'lucide-react';

const VALUES = [
  { icon: Shield, title: 'Quality Assurance', desc: 'Uncompromising commitment to the highest quality standards.' },
  { icon: Award, title: 'Innovation', desc: 'Pioneering new therapeutic solutions through cutting-edge R&D.' },
  { icon: Users, title: 'Patient-Centric', desc: 'Putting patient well-being at the heart of everything we do.' },
  { icon: Globe, title: 'Global Reach', desc: 'Ensuring accessible healthcare across diverse geographies.' },
];

export default function About() {
  return (
    <div className="w-full">
      <HeroSection 
        title="Who We Are"
        subtitle="A legacy of trust, driven by science and compassion."
        image="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000&auto=format&fit=crop"
        ctaText="See Our Leadership"
        ctaLink="#leadership"
      />

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To enhance the quality of human life by providing affordable, high-quality pharmaceutical products globally. We strive to be a trusted healthcare partner, driven by innovation and excellence.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To emerge as a leading global pharmaceutical company, recognized for our diverse portfolio, robust R&D, and unwavering commitment to ethical business practices.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">The principles that guide our decisions and shape our culture.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((val, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow border-none bg-white">
                  <CardContent className="pt-8 pb-6 px-6">
                    <div className="mx-auto w-16 h-16 rounded-full bg-lightAccent/30 flex items-center justify-center mb-6 text-accent">
                      <val.icon size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">{val.title}</h3>
                    <p className="text-gray-600">{val.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-16 text-center">Our Journey</h2>
          
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
            {TIMELINE.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-accent text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-1">
                    <div className="font-bold text-primary text-xl">{item.year}</div>
                  </div>
                  <h4 className="font-heading font-semibold text-lg mb-2">{item.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
