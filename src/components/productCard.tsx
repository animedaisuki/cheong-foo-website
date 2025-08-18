import React from 'react';
import Image from 'next/image';

interface ProductCardProps {
  title: string;
  availability: string;
  isInStock: boolean;
  buttonText?: string;
  imageUrl?: string;
  className?: string;
  showCircleBg?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  availability,
  isInStock,
  buttonText = "Learn More",
  imageUrl = "https://placehold.co/70x83",
  className = '',
  showCircleBg = false
}) => {
  return (
    <div className={`h-80 md:h-96 p-3 bg-white rounded-[10px] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.20)] shadow-[-4px_-4px_4px_0px_rgba(0,0,0,0.05)] flex flex-col justify-start items-center gap-2 w-full max-w-sm mx-auto ${className}`}>
      {/* Image Section */}
      <div className="w-full h-40 md:h-48 p-2.5 flex justify-center items-center">
        <Image className="w-full h-full object-contain" src={imageUrl} alt={title} width={256} height={192} />
      </div>

      {/* Content Section */}
      <div className="w-full flex-1 flex flex-col justify-between items-start px-2">
        {/* Title */}
        <div className="w-full text-black text-sm md:text-base font-normal font-metropolis capitalize leading-tight line-clamp-2">
          {title}
        </div>

        {/* Availability */}
        <div className="flex justify-start items-center">
          <div className="text-brand-green text-xs font-bold font-metropolis">
            {availability}
          </div>
        </div>

        {/* Learn More Button */}
        <div className="w-full px-2.5 py-2 bg-brand-primary rounded-lg flex justify-center items-center cursor-pointer hover:bg-brand-primary/80 hover:shadow-lg transition-all duration-200 transform hover:scale-105">
          <div className="text-white text-sm font-semibold font-metropolis">
            {buttonText}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
