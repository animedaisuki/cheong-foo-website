import React from 'react';
import Image from 'next/image';

interface FeatureCardProps {
  title: string;
  description: string;
  iconUrl?: string;
  iconType?: 'svg' | 'custom';
  customIcon?: React.ReactNode;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  iconUrl,
  iconType = 'svg',
  customIcon,
  className = ''
}) => {
  return (
    <div className={`flex-1 flex justify-start items-center ${className}`}>
      {/* Icon Section */}
      <div className="flex justify-center items-center w-1/3">
        {iconType === 'svg' && iconUrl ? (
          <Image src={iconUrl} alt={`${title} Icon`} width={50} height={50} />
        ) : customIcon ? (
          customIcon
        ) : (
          // Default fallback icon
          <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center">
            <div className="w-6 h-6 bg-white rounded-full"></div>
          </div>
        )}
      </div>
      
      {/* Content Section */}
      <div className="flex-1 inline-flex flex-col justify-start items-start gap-2.5 w-2/3">
        <div className="self-stretch text-center justify-start text-brand-primary text-2xl font-semibold font-metropolis leading-tight">
          {title}
        </div>
        <div className="self-stretch text-center justify-start text-brand-primary text-base font-normal font-metropolis leading-tight">
          {description}
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
