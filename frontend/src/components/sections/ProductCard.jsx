import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function ProductCard({ product, index, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="h-full"
    >
      <Card className="h-full overflow-hidden border-gray-100 hover:shadow-xl transition-all duration-300 group cursor-pointer" onClick={onClick}>
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors z-10" />
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <Badge className="absolute top-4 left-4 z-20 bg-white/90 text-primary hover:bg-white border-none shadow-sm font-semibold">
            {product.category}
          </Badge>
        </div>
        
        <CardContent className="p-6">
          <h3 className="text-xl font-heading font-bold text-primary mb-2 group-hover:text-accent transition-colors">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm mb-6 line-clamp-2">
            {product.description}
          </p>
          
          <Button variant="ghost" className="p-0 h-auto text-accent hover:text-primary hover:bg-transparent flex items-center gap-2 group/btn">
            <span>Learn more</span>
            <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
