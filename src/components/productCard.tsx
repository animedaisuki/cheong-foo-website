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
    <div className={`h-96 p-3 bg-white rounded-[10px] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.20)] shadow-[-4px_-4px_4px_0px_rgba(0,0,0,0.05)] inline-flex flex-col justify-start items-center gap-2 ${className}`}>
      {/* Image Section */}
      <div className="w-64 h-64 p-2.5">
        
        <Image className="w-64 h-62" src={imageUrl} alt={title} width={96} height={96} />
   
      </div>

      {/* Content Section */}
      <div className="w-64 flex-1 flex flex-col justify-between items-start">
        {/* Title */}
        <div className="self-stretch justify-start text-black text-base font-normal font-metropolis capitalize leading-tight">
          {title}
        </div>

        {/* Availability */}
        <div className="inline-flex justify-start items-center gap-[5px]">
          <div className="justify-start text-brand-green text-xs font-bold font-metropolis">
            {availability}
          </div>
        </div>

        {/* Learn More Button */}
        <div className="px-2.5 py-2 bg-brand-primary rounded-lg inline-flex justify-center items-center gap-[5px]">
          <div className="justify-start text-white text-sm font-semibold font-metropolis leading-none">
            {buttonText}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
