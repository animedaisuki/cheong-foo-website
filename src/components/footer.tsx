import React from 'react';
import Image from 'next/image';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  return (
    <footer className={`w-full px-4 md:px-8 lg:px-20 py-6 md:py-10 bg-brand-primary ${className}`}>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-center">
        {/* Left Section - Logo and Company Name */}
        <div className="flex flex-col justify-center items-center lg:items-start gap-4 order-2 lg:order-1">
          {/* Footer Logo */}
          <div className="w-24 h-12 md:w-32 md:h-16 relative overflow-hidden">
            <Image src="/images/logo.svg" alt="Logo" className="w-full h-full object-contain" width={128} height={64} />
          </div>
          
          {/* Company Name */}
          <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start gap-2">
            <div className="flex justify-center lg:justify-start items-start gap-0.5 flex-wrap">
              {['香', '港', '昌', '富', '商', '貿', '有', '限', '公', '司'].map((char, index) => (
                <div key={index} className="text-white text-lg md:text-xl font-normal font-mtr-song">
                  {char}
                </div>
              ))}
            </div>
            <div className="text-center lg:text-left">
              <div className="text-orange-50 text-sm md:text-base font-semibold font-metropolis">
                Hong Kong Cheong Foo Commerce
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Information */}
        <div className="flex flex-col md:flex-row justify-center lg:justify-end items-center gap-4 md:gap-6 order-1 lg:order-2">
          {/* QR Code / Image Placeholder */}
          <div className="hidden md:block">
            <Image className="w-40 h-32 lg:w-56 lg:h-48 object-cover rounded-lg" src="/images/location-map.png" alt="Location Map" width={224} height={192} />
          </div>
          
          {/* Contact Details */}
          <div className="flex flex-col justify-center items-center md:items-start gap-3 md:gap-4">
            <div className="text-white text-xl md:text-2xl font-medium font-metropolis uppercase">
              Contact
            </div>
            
            <div className="flex flex-col justify-center items-center md:items-start gap-2 md:gap-3">
              {/* Address */}
              <div className="flex justify-center md:justify-start items-start gap-2 md:gap-3 text-center md:text-left">
                <div className="w-5 h-5 md:w-7 md:h-6 flex justify-center items-center mt-1">
                  <Image src="/icons/location.svg" alt="Location Icon" width={20} height={20} className="md:w-6 md:h-6" />
                </div>
                <div className="flex flex-col justify-start items-center md:items-start">
                  <div className="text-white text-sm md:text-lg lg:text-xl font-medium font-metropolis leading-relaxed">
                    Max Share Centre, <br/>
                    367 - 373 King&apos;s Rd, <br/>
                    North Point, Hong Kong
                  </div>
                </div>
              </div>
              
              {/* Phone */}
              <div className="flex justify-center md:justify-start items-center gap-2 md:gap-3">
                <div className="w-5 h-4 md:w-7 md:h-5 flex justify-center items-center">
                  <Image src="/icons/phone.svg" alt="Phone Icon" width={20} height={16} className="md:w-6 md:h-5" />
                </div>
                <div className="text-white text-sm md:text-lg lg:text-xl font-medium font-metropolis">
                  +852 5649 8846
                </div>
              </div>
              
              {/* Email */}
              <div className="flex justify-center md:justify-start items-center gap-2 md:gap-3">
                <div className="w-5 h-4 md:w-7 md:h-5 flex justify-center items-center">
                  <Image src="/icons/email.svg" alt="Email Icon" width={20} height={16} className="md:w-6 md:h-5" />
                </div>
                <div className="text-white text-sm md:text-lg lg:text-xl font-medium font-metropolis break-all">
                  info@hkcheongfoo.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Divider */}
      <div className="w-full h-1 my-4 md:my-6 bg-gradient-to-r from-transparent via-[#3163B7] to-transparent" />

      {/* Copyright */}
      <div className="w-full text-center">
        <span className="text-white text-sm md:text-lg lg:text-xl font-normal font-arial-rounded">© </span>
        <span className="text-white text-sm md:text-lg lg:text-xl font-medium font-metropolis leading-relaxed">
          2024 Hong Kong Cheong Foo Trade and Commerce Company LTD. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;