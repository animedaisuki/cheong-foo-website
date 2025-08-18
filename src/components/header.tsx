import React from 'react';
import Image from 'next/image';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  return (
    <header className={`w-full px-4 md:px-8 lg:px-20 py-3 md:py-5 relative bg-white border-b border-brand-secondary/50 ${className}`}>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        {/* Logo and Company Name */}
        <div className="flex justify-center md:justify-start items-center gap-2 md:gap-3 order-1">
          {/* Logo */}
          <div className="w-16 h-8 md:w-20 md:h-10 relative overflow-hidden flex-shrink-0">
            <Image src="/images/logo.svg" alt="Logo" className="w-full h-full object-contain" width={80} height={40} />
          </div>
          
          {/* Company Name */}
          <div className="hidden sm:flex flex-col justify-between items-start">
            <div className="flex justify-start items-start gap-0.5 flex-wrap">
              {['香', '港', '昌', '富', '商', '貿', '有', '限', '公', '司'].map((char, index) => (
                <div key={index} className="text-brand-primary text-lg md:text-xl font-normal font-mtr-song">
                  {char}
                </div>
              ))}
            </div>
            <div className="flex flex-col justify-center items-start mt-1">
              <div className="text-brand-dark text-xs md:text-sm font-medium font-metropolis">
                Hong Kong Cheong Foo Commerce
              </div>
            </div>
          </div>
        </div>

        {/* Language Selector */}
        <div className="flex justify-center md:justify-end items-center order-3 md:order-2">
          <div className="w-8 h-8 md:w-9 md:h-9 bg-brand-primary rounded-full flex justify-center items-center cursor-pointer hover:bg-brand-primary/80 transition-colors duration-200">
            <div className="text-white text-xs md:text-sm font-semibold font-metropolis uppercase">
              en
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex justify-center items-center gap-4 md:gap-6 order-2 md:order-3 w-full md:w-auto md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:top-[50%] md:-translate-y-1/2">
          <div className="px-2 py-1 md:p-2 border-b-2 md:border-b-4 border-brand-primary flex justify-center items-center cursor-pointer hover:bg-brand-primary/10 transition-colors duration-200">
            <div className="text-brand-primary text-xs md:text-sm font-semibold font-metropolis uppercase">
              Home
            </div>
          </div>
          <div className="px-2 py-1 md:p-2 flex justify-center items-center cursor-pointer hover:bg-brand-primary/10 hover:border-b-2 md:hover:border-b-4 hover:border-brand-primary/50 transition-all duration-200">
            <div className="text-brand-primary text-xs md:text-sm font-semibold font-metropolis uppercase">
              products
            </div>
          </div>
          <div className="px-2 py-1 md:p-2 flex justify-center items-center cursor-pointer hover:bg-brand-primary/10 hover:border-b-2 md:hover:border-b-4 hover:border-brand-primary/50 transition-all duration-200">
            <div className="text-brand-primary text-xs md:text-sm font-semibold font-metropolis uppercase">
              about us
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
