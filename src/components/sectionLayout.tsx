import React from 'react';
import SectionTitle from './sectionTitle';

interface SectionLayoutProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
}

const SectionLayout: React.FC<SectionLayoutProps> = ({ 
  title, 
  children, 
  className = "",
  titleClassName = ""
}) => {
  return (
    <div className={`self-stretch flex flex-col justify-start items-start gap-4 ${className}`}>
      <SectionTitle title={title} className={titleClassName} />
      {children}
    </div>
  );
};

export default SectionLayout;
