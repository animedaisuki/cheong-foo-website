import React from 'react';
import Image from 'next/image';

interface CompanyCardProps {
  imageUrl?: string;
  alt?: string;
  className?: string;
  width?: string;
  height?: string;
  hasShadow?: boolean;
  hasBorder?: boolean;
}

const CompanyCard: React.FC<CompanyCardProps> = ({
  imageUrl = "https://placehold.co/190x108",
  alt = "Company Logo",
  className = '',
  width = "w-48",
  height = "h-28",
  hasShadow = true,
  hasBorder = true
}) => {
  const shadowClasses = hasShadow ? "shadow-[4px_4px_4px_0px_rgba(0,0,0,0.20)] shadow-[-4px_-4px_4px_0px_rgba(0,0,0,0.10)]" : "";
  const borderClasses = hasBorder ? "border-brand-secondary" : "";

  return (
    <div className={`${width} ${height} rounded-[10px] ${shadowClasses} ${borderClasses} ${className} overflow-hidden`}>
      <Image 
        className="w-full h-full object-contain"
        src={imageUrl} 
        alt={alt}
        width={190}
        height={108}
      />
    </div>
  );
};

export default CompanyCard;
