import React from 'react';
import Image from 'next/image';

interface AboutUsProps {
  className?: string;
}

const AboutUs: React.FC<AboutUsProps> = ({ className = '' }) => {
  return (
    <div className={`w-full max-w-[1440px] mx-auto flex flex-col justify-start items-start ${className}`}>
      {/* Header */}
      <div className="self-stretch px-4 md:px-8 lg:px-20 py-3 md:py-5 relative bg-white border-b border-brand-secondary/50 flex justify-between items-center">
        <div className="flex justify-start items-center gap-2 md:gap-3">
          <div className="w-16 h-8 md:w-20 md:h-10 relative overflow-hidden">
            <div className="w-full h-full bg-brand-primary" />
            <div className="w-4 h-4 md:w-6 md:h-6 absolute right-1 md:right-2 top-1/2 transform -translate-y-1/2 bg-brand-secondary" />
          </div>
          <div className="flex flex-col justify-between items-start">
            <div className="flex justify-start items-start gap-0.5">
              {['香', '港', '昌', '富', '商', '貿', '有', '限', '公', '司'].map((char, index) => (
                <div key={index} className="text-brand-primary text-lg md:text-xl font-normal font-mtr-song">
                  {char}
                </div>
              ))}
            </div>
            <div className="flex flex-col justify-center items-center gap-2.5">
              <div className="text-brand-dark text-xs md:text-sm font-medium font-metropolis">
                Hong Kong Cheong Foo Commerce
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white flex justify-start items-center gap-4">
          <div className="w-8 h-8 md:w-9 md:h-9 bg-brand-primary rounded-full flex justify-center items-center">
            <div className="text-white text-xs md:text-sm font-semibold font-metropolis uppercase">
              en
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:flex justify-center items-center gap-6">
          <div className="p-2 flex justify-center items-center gap-2.5">
            <div className="text-brand-primary text-sm font-semibold font-metropolis uppercase">
              Home
            </div>
          </div>
          <div className="p-2 flex justify-center items-center gap-2.5">
            <div className="text-brand-primary text-sm font-semibold font-metropolis uppercase">
              products
            </div>
          </div>
          <div className="p-2 border-b-4 border-brand-primary flex justify-center items-center gap-2.5">
            <div className="text-brand-primary text-sm font-semibold font-metropolis uppercase">
              about us
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="self-stretch p-8 md:p-12 lg:p-20 bg-white flex flex-col justify-start items-start gap-6 md:gap-8">
        {/* Title Section */}
        <div className="self-stretch flex flex-col justify-between items-center gap-4">
          <div className="text-brand-primary text-2xl md:text-3xl lg:text-4xl font-bold font-metropolis uppercase tracking-wide">
            contact us
          </div>
          <div className="w-full max-w-[1240px] h-[5px] bg-gradient-to-r from-transparent via-brand-secondary to-transparent opacity-60" />
        </div>

        {/* Contact Content */}
        <div className="self-stretch flex flex-col lg:flex-row justify-start items-start gap-12 md:gap-16 lg:gap-28">
          {/* Left Side - Contact Information */}
          <div className="w-full lg:w-[504px] flex flex-col justify-start items-start gap-8 md:gap-12">
            <div className="flex flex-col justify-start items-start gap-8 md:gap-12">
              {/* Our Location */}
              <div className="flex flex-col justify-start items-start gap-4 md:gap-5">
                <div className="flex flex-col justify-start items-start gap-4 md:gap-5">
                  <div className="text-brand-dark text-xl md:text-2xl font-medium font-metropolis uppercase">
                    Our Location
                  </div>
                  <div className="w-full max-w-[500px] h-0 border-t border-brand-secondary" />
                </div>
                <div className="flex justify-start items-start gap-4 md:gap-5">
                  <div className="flex justify-center items-center gap-2.5 mt-1">
                    <Image src="/icons/location.svg" alt="Location Icon" width={24} height={28} className="text-brand-dark" />
                  </div>
                  <div className="flex flex-col justify-start items-start gap-2.5">
                    <div className="text-brand-dark text-lg md:text-xl font-medium font-metropolis leading-relaxed">
                      Max Share Centre, <br/>
                      367 - 373 King&apos;s Rd, <br/>
                      North Point, Hong Kong
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col justify-start items-start gap-4 md:gap-5">
                <div className="flex flex-col justify-start items-start gap-4 md:gap-5">
                  <div className="text-brand-dark text-xl md:text-2xl font-medium font-metropolis uppercase">
                    PHONE
                  </div>
                  <div className="w-full max-w-[500px] h-0 border-t border-brand-secondary" />
                </div>
                <div className="flex justify-start items-center gap-4 md:gap-5">
                  <div className="flex flex-col justify-center items-center gap-2.5">
                    <Image src="/icons/phone.svg" alt="Phone Icon" width={32} height={28} className="text-brand-dark" />
                  </div>
                  <div className="text-brand-dark text-lg md:text-xl font-medium font-metropolis">
                    +852 56498846
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col justify-start items-start gap-4 md:gap-5">
                <div className="flex flex-col justify-start items-start gap-4 md:gap-5">
                  <div className="text-brand-dark text-xl md:text-2xl font-medium font-metropolis uppercase">
                    EMAIL
                  </div>
                  <div className="w-full max-w-[500px] h-0 border-t border-brand-secondary" />
                </div>
                <div className="flex justify-start items-center gap-2.5">
                  <div className="flex flex-col justify-center items-center gap-2.5">
                    <Image src="/icons/email.svg" alt="Email Icon" width={44} height={32} className="text-brand-dark" />
                  </div>
                  <div className="text-brand-dark text-lg md:text-xl font-medium font-metropolis">
                    info@hkcheongfoo.com
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Map/Image */}
          <div className="flex-1 w-full lg:w-auto">
            <Image 
              className="w-full h-64 md:h-96 lg:h-[582px] object-cover rounded-lg" 
              src="/images/location-map.png" 
              alt="Location Map" 
              width={660} 
              height={582}
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="self-stretch px-4 md:px-8 lg:px-20 py-6 md:py-10 bg-brand-primary flex flex-col justify-start items-center gap-4 md:gap-6">
        <div className="self-stretch flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0">
          {/* Left Side - Logo and Company */}
          <div className="w-full lg:w-60 flex flex-col justify-center items-center gap-4">
            <div className="w-24 h-12 md:w-32 md:h-16 relative overflow-hidden">
              <div className="w-full h-full bg-white" />
              <div className="w-8 h-8 md:w-11 md:h-11 absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-brand-secondary" />
            </div>
            <div className="flex flex-col justify-start items-center gap-2">
              <div className="flex justify-center items-start gap-0.5">
                {['香', '港', '昌', '富', '商', '貿', '有', '限', '公', '司'].map((char, index) => (
                  <div key={index} className="text-white text-lg md:text-xl font-normal font-mtr-song">
                    {char}
                  </div>
                ))}
              </div>
              <div className="flex flex-col justify-center items-center gap-2.5">
                <div className="text-orange-50 text-sm font-semibold font-metropolis">
                  Hong Kong Cheong Foo Commerce
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Info with Map */}
          <div className="flex flex-col md:flex-row justify-start items-center gap-4">
            <Image 
              className="w-48 h-40 md:w-56 md:h-48 object-cover rounded-lg" 
              src="/images/location-map.png" 
              alt="Location Map" 
              width={218} 
              height={188}
            />
            <div className="flex flex-col justify-center items-center md:items-start gap-4">
              <div className="text-white text-xl md:text-2xl font-medium font-metropolis uppercase">
                Contact
              </div>
              <div className="flex flex-col justify-center items-center md:items-start gap-2.5">
                {/* Address */}
                <div className="flex justify-start items-start gap-2.5">
                  <div className="w-7 h-6 flex justify-center items-center gap-2.5 mt-1">
                    <Image src="/icons/location.svg" alt="Location" width={20} height={24} className="text-white" />
                  </div>
                  <div className="w-56 flex flex-col justify-start items-start gap-2.5">
                    <div className="text-white text-lg md:text-xl font-medium font-metropolis leading-normal text-center md:text-left">
                      Max Share Centre, <br/>
                      367 - 373 King&apos;s Rd, <br/>
                      North Point, Hong Kong
                    </div>
                  </div>
                </div>
                
                {/* Phone */}
                <div className="flex justify-start items-center gap-2.5">
                  <div className="w-7 h-5 flex flex-col justify-center items-center gap-2.5">
                    <Image src="/icons/phone.svg" alt="Phone" width={20} height={20} className="text-white" />
                  </div>
                  <div className="text-white text-lg md:text-xl font-medium font-metropolis">
                    +852 5649 8846
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex justify-start items-center gap-2.5">
                  <div className="w-7 flex flex-col justify-center items-center gap-1">
                    <Image src="/icons/email.svg" alt="Email" width={28} height={20} className="text-white" />
                  </div>
                  <div className="text-white text-lg md:text-xl font-medium font-metropolis">
                    info@hkcheongfoo.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gradient Divider */}
        <div className="w-full max-w-[1240px] h-[5px] bg-gradient-to-r from-transparent via-[#3163B7] to-transparent" />
        
        {/* Copyright */}
        <div className="self-stretch text-center">
          <span className="text-white text-lg md:text-xl font-normal font-arial-rounded">© </span>
          <span className="text-white text-lg md:text-xl font-medium font-metropolis">
            2024 Hong Kong Cheong Foo Trade and Commerce Company LTD. All Rights Reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
