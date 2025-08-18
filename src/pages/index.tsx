import React from 'react';
import Image from 'next/image';
import Layout from '../components/layout';
import ProductCard from '../components/productCard';
import CompanyCard from '../components/companyCard';
import FeatureCard from '../components/featureCard';
import { products } from '../data/products';
import { features } from '../data/features';
import { companies } from '../data/companies';

export default function Home() {
  return (
    <Layout>
      {/* Main Content */}
      <div className="self-stretch p-20 bg-white flex flex-col justify-start items-end gap-16">
        {/* Featured Product Section */}
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="w-96 inline-flex justify-start items-center gap-1">
            <img src="/icons/ellipse.svg" alt="Ellipse" />
            <div className="w-80 justify-start text-brand-dark text-2xl font-semibold font-pingfang uppercase leading-none tracking-wide">
              featured product
            </div>
          </div>
          
          {/* Featured Product Content */}
          <div className="self-stretch pb-2.5 bg-stone-200/30 rounded-bl-xl rounded-br-xl flex flex-col justify-start items-start gap-4">
            <div className="self-stretch inline-flex justify-start items-center gap-4">
              {/* Main Product Image */}
              <div className="relative rounded-xl flex justify-start items-center overflow-hidden">
                <Image className="w-96 h-full" src="/images/banner-1.png" alt="AI-Powered Radar Detection" width={366} height={737} />
                <div className="w-7 h-full origin-top-left rotate-180 bg-black/50" />
                <Image className="w-72 h-full" src="/images/banner-2.png" alt="Product view 2" width={279} height={736} />
                
                {/* Product Features Overlay */}
                <div className="p-3 left-[183px] top-[615px] absolute flex justify-end items-end gap-2.5">
                  <div className="w-[466px] text-right justify-start">
                    <span className="text-white text-2xl font-bold font-metropolis uppercase leading-normal tracking-wide">
                      3 in 1<br/>
                    </span>
                    <span className="text-white text-xl font-bold font-metropolis uppercase leading-normal tracking-wide">
                      Fall Detection<br/>Anti-wandering<br/>Posture Analysis
                    </span>
                  </div>
                </div>
                
                <img className="w-16 h-16 left-[604px] top-[90px] absolute origin-top-left -rotate-180" src="/images/feature-icon.png" alt="Feature icon" width={70} height={66} />
                
                {/* Product Title */}
                <div className="w-[466px] h-28 left-0 top-[37px] absolute shadow-[0px_4px_4px_0px_rgba(255,255,255,0.50)] inline-flex flex-col justify-start items-start gap-3">
                  <div className="self-stretch h-7 justify-start">
                    <span className="text-brand-primary text-3xl font-semibold font-metropolis uppercase leading-9 tracking-wider">
                      AI-Powered<br/>
                    </span>
                  </div>
                  <div className="self-stretch h-20 justify-start">
                    <span className="text-brand-primary text-5xl font-bold font-metropolis uppercase leading-9 tracking-widest">
                      Radar <br/>Detection<br/>
                    </span>
                  </div>
                </div>
              </div>

              {/* Product Gallery */}
              <div className="flex-1 self-stretch inline-flex flex-col justify-between items-start">
                <div className="self-stretch flex-1 flex flex-col justify-start items-start gap-2">
                  {/* Gallery Grid */}
                  {[...Array(4)].map((_, rowIndex) => (
                    <div key={rowIndex} className="self-stretch flex-1 inline-flex justify-start items-center gap-2">
                      <Image className="flex-1 self-stretch p-2.5 rounded-lg" src="/images/gallery-1.png" alt={`Gallery ${rowIndex * 4 + 1}`} width={142} height={114} />
                      <div className="flex-1 self-stretch p-2.5 rounded-lg flex justify-start items-start gap-2.5">
                        <div className="justify-start">
                          <span className="text-xs font-semibold font-metropolis uppercase leading-none tracking-wide">(</span>
                          <span className="text-xs font-semibold font-metropolis lowercase leading-none tracking-wide">
                            {['i', 'ii', 'iii', 'iv', 'v', 'vi'][rowIndex * 3] || 'i'}
                          </span>
                          <span className="text-xs font-semibold font-metropolis uppercase leading-none tracking-wide">)</span>
                        </div>
                      </div>
                      <div className="flex-1 self-stretch p-2.5 rounded-lg flex justify-start items-start gap-2.5">
                        <div className="justify-start">
                          <span className="text-xs font-semibold font-metropolis uppercase leading-none tracking-wide">(</span>
                          <span className="text-xs font-semibold font-metropolis lowercase leading-none tracking-wide">
                            {['i', 'ii', 'iii', 'iv', 'v', 'vi'][rowIndex * 3 + 1] || 'ii'}
                          </span>
                          <span className="text-xs font-semibold font-metropolis uppercase leading-none tracking-wide">)</span>
                        </div>
                      </div>
                      <div className="flex-1 self-stretch p-2.5 rounded-lg flex justify-start items-start gap-2.5">
                        <div className="justify-start">
                          <span className="text-xs font-semibold font-metropolis uppercase leading-none tracking-wide">(</span>
                          <span className="text-xs font-semibold font-metropolis lowercase leading-none tracking-wide">
                            {['i', 'ii', 'iii', 'iv', 'v', 'vi'][rowIndex * 3 + 2] || 'iii'}
                          </span>
                          <span className="text-xs font-semibold font-metropolis uppercase leading-none tracking-wide">)</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Additional Image */}
                <div className="self-stretch h-64 p-2.5 relative inline-flex justify-start items-start gap-2.5">
                  <Image className="h-full left-0 absolute object-cover" src="/images/additional-view.png" alt="Additional view" width={161} height={125} />
                </div>
              </div>
            </div>

            {/* Features Section */}
            <div className="self-stretch inline-flex justify-start items-center gap-8">
              {features.map((feature) => (
                <FeatureCard
                  key={feature.id}
                  title={feature.title}
                  description={feature.description}
                  iconUrl={feature.iconUrl}
                  iconType={feature.iconType}
                  customIcon={feature.customIcon}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Other Products Section */}
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="w-96 inline-flex justify-start items-center gap-1">
            <img src="/icons/ellipse.svg" alt="Ellipse" />
            <div className="w-80 justify-start text-brand-dark text-2xl font-semibold font-pingfang uppercase leading-none tracking-wide">
              other products
            </div>
          </div>
          
          <div className="self-stretch inline-flex justify-between items-start">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                availability={product.availability}
                isInStock={product.isInStock}
                imageUrl={product.imageUrl}
                showCircleBg={product.showCircleBg}
                buttonText={product.buttonText}
              />
            ))}
          </div>
        </div>

        {/* Associated With Section */}
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="w-96 inline-flex justify-start items-center gap-1">
            <img src="/icons/ellipse.svg" alt="Ellipse" />
            <div className="w-80 justify-start text-brand-dark text-2xl font-semibold font-pingfang uppercase leading-none tracking-wide">
              associated with
            </div>
          </div>
          
          <div className="self-stretch h-28 px-2.5 inline-flex justify-between items-center">

            {/* Dynamic Company Cards */}
            {companies.map((company) => (
              <CompanyCard
                key={company.id}
                imageUrl={company.imageUrl}
                alt={company.name}
                hasShadow={company.hasShadow}
                hasBorder={company.hasBorder}
                width={company.width}
                height={company.height}
              />
            ))}
            
          </div>
        </div>
      </div>
    </Layout>
  );
}
