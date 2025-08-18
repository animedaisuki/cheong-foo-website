import React from 'react';
import Image from 'next/image';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  return (
    <div className={`self-stretch px-20 py-10 bg-brand-primary flex flex-col justify-start items-center gap-6 ${className}`}>
      <div className="self-stretch inline-flex justify-between items-center">
        {/* Left Section - Logo and Company Name */}
        <div className="w-60 inline-flex flex-col justify-center items-center gap-4">
          {/* Footer Logo */}
          <div className="w-32 h-16 relative overflow-hidden">
            <img src="/images/logo.svg" alt="Logo" />
          </div>
          
          {/* Company Name */}
          <div className="self-stretch flex flex-col justify-start items-start gap-0.5">
            <div className="self-stretch inline-flex justify-start items-start gap-0.5">
              {['香', '港', '昌', '富', '商', '貿', '有', '限', '公', '司'].map((char, index) => (
                <div key={index} className="justify-start text-white text-xl font-normal font-mtr-song capitalize">
                  {char}
                </div>
              ))}
            </div>
            <div className="flex flex-col justify-center items-center gap-2.5">
              <div className="justify-start text-orange-50 text-sm font-semibold font-metropolis capitalize">
                Hong Kong Cheong Foo Commerce
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Information */}
        <div className="flex justify-start items-center gap-4">
          {/* QR Code / Image Placeholder */}
          <img className="object-cover h-[234px]" src="/images/location-map.png" alt="QR Code"/>
          
          {/* Contact Details */}
          <div className="inline-flex flex-col justify-center items-start gap-4">
            <div className="justify-start text-white text-2xl font-medium font-metropolis uppercase leading-loose">
              Contact
            </div>
            
            <div className="flex flex-col justify-center items-start gap-2.5">
              {/* Address */}
              <div className="inline-flex justify-start items-start gap-2.5">
                <div className="w-7 h-6 flex justify-center items-center gap-2.5">
                  <Image src="/icons/location.svg" alt="Location Icon" width={28} height={24} />
                </div>
                <div className="w-56 inline-flex flex-col justify-start items-start gap-2.5">
                  <div className="w-96 justify-start text-white text-xl font-medium font-metropolis leading-normal">
                    Max Share Centre, <br/>
                    367 - 373 King&apos;s Rd, <br/>
                    North Point, Hong Kong
                  </div>
                </div>
              </div>
              
              {/* Phone */}
              <div className="inline-flex justify-start items-center gap-2.5">
                <div className="w-7 h-5 inline-flex flex-col justify-center items-center gap-2.5">
                  <Image src="/icons/phone.svg" alt="Location Icon" width={28} height={24} />
                </div>
                <div className="justify-start text-white text-xl font-medium font-metropolis leading-normal">
                  +852 5649 8846
                </div>
              </div>
              
              {/* Email */}
              <div className="inline-flex justify-start items-center gap-2.5">
                <div className="w-7 inline-flex flex-col justify-center items-center gap-2.5">
                  <Image src="/icons/email.svg" alt="Location Icon" width={28} height={24} />
                </div>
                <div className="justify-start text-white text-xl font-medium font-metropolis leading-normal">
                  info@hkcheongfoo.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Divider */}
      <div className="w-[1240px] h-[5px] bg-gradient-radial from-[#3163B7] to-transparent" />

      {/* Copyright */}
      <div className="self-stretch text-center justify-start">
        <span className="text-white text-xl font-normal font-arial-rounded leading-normal">© </span>
        <span className="text-white text-xl font-medium font-metropolis leading-normal">
          2024 Hong Kong Cheong Foo Trade and Commerce Company LTD. All Rights Reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
