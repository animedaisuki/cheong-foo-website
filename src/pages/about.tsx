import React from 'react';
import Layout from '../components/layout';
import Image from 'next/image';

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <div className="w-full bg-white flex flex-col justify-start items-center">
        {/* Main Content */}
        <div className="w-full max-w-[1440px] p-8 md:p-12 lg:p-20 bg-white flex flex-col justify-start items-start gap-6 md:gap-8">
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
                      <Image src="/icons/location-b.svg" alt="Location Icon" width={24} height={28} className="text-brand-dark" />
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
                      <Image src="/icons/phone-b.svg" alt="Phone Icon" width={32} height={28} className="text-brand-dark" />
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
                      <Image src="/icons/email-b.svg" alt="Email Icon" width={44} height={32} className="text-brand-dark" />
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
      </div>
    </Layout>
  );
};

export default AboutPage;
