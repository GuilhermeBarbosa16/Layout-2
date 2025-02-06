import React from 'react';
import { ChevronRight } from 'lucide-react';

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, description, image, price }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 p-6 transition-all duration-300 hover:scale-[1.02] hover:bg-white/10">
      <div className="aspect-w-16 aspect-h-9 mb-6 overflow-hidden rounded-lg">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        {name}
      </h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold">{price}</span>
        <button className="group inline-flex items-center text-blue-500 hover:text-blue-400 transition-colors">
          Learn More
          <ChevronRight className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-600/20 opacity-0 transition-opacity group-hover:opacity-100" />
    </div>
  );
};

export default ProductCard;