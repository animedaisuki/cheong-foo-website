import React from 'react';
import Image from 'next/image';

interface SectionTitleProps {
  title: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, className = "" }) => {
  return (
    <div className={`w-96 inline-flex justify-start items-center gap-1 ${className}`}>
      <Image src="/icons/ellipse.svg" alt="Ellipse" width={12} height={24} />
      <div className="w-80 justify-start text-brand-dark text-2xl font-semibold font-pingfang uppercase leading-none tracking-wide">
        {title}
      </div>
    </div>
  );
};

export default SectionTitle;
