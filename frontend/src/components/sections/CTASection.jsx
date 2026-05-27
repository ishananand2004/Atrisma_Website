import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function CTASection({ title, description, buttonText, buttonLink }) {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
            {title}
          </h2>
          <p className="text-xl text-lightAccent mb-10">
            {description}
          </p>
          <Button size="lg" asChild className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg">
            <Link to={buttonLink}>{buttonText}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
