import React from 'react';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  return (
    <div className={`w-full px-20 py-5 relative bg-white border-b border-brand-secondary/50 inline-flex justify-between items-center ${className}`}>
      {/* Logo and Company Name */}
      <div className="flex justify-start items-center gap-3">
        {/* Logo */}
        <div className="w-20 h-10 relative overflow-hidden">
          <img src="/images/logo.svg" alt="Logo" />
        </div>
        
        {/* Company Name */}
        <div className="self-stretch inline-flex flex-col justify-between items-start">
          <div className="self-stretch inline-flex justify-start items-start gap-0.5">
            {['香', '港', '昌', '富', '商', '貿', '有', '限', '公', '司'].map((char, index) => (
              <div key={index} className="justify-start text-brand-primary text-xl font-normal font-mtr-song capitalize">
                {char}
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-center items-center gap-2.5">
            <div className="justify-start text-brand-dark text-sm font-medium font-metropolis capitalize">
              Hong Kong Cheong Foo Commerce
            </div>
          </div>
        </div>
      </div>

      {/* Language Selector */}
      <div className="bg-white flex justify-start items-center gap-4">
        <div className="w-9 h-9 px-px bg-brand-primary rounded-[32px] flex justify-center items-center gap-2.5 overflow-hidden">
          <div className="justify-start text-white text-sm font-semibold font-metropolis uppercase leading-none">
            en
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="w-full left-0 top-[25px] absolute flex justify-center items-center gap-6">
        <div className="p-2 border-b-4 border-brand-primary flex justify-center items-center gap-2.5">
          <div className="justify-start text-brand-primary text-sm font-semibold font-metropolis uppercase leading-none">
            Home
          </div>
        </div>
        <div className="p-2 flex justify-center items-center gap-2.5">
          <div className="justify-start text-brand-primary text-sm font-semibold font-metropolis uppercase leading-none">
            products
          </div>
        </div>
        <div className="p-2 flex justify-center items-center gap-2.5">
          <div className="justify-start text-brand-primary text-sm font-semibold font-metropolis uppercase leading-none">
            about us
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
