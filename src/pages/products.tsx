import React from 'react';
import Image from 'next/image';
import Layout from '../components/layout';
import ProductCard from '../components/productCard';
import CompanyCard from '../components/companyCard';
import SectionTitle from '../components/sectionTitle';
import { products } from '../data/products';
import { companies } from '../data/companies';

export default function Products() {
  return (
    <Layout>
      {/* Products Page Content */}
      <div className="w-full px-4 md:px-8 lg:px-20 py-8 md:py-12 lg:py-20 bg-white flex flex-col justify-start items-end gap-8 md:gap-12 lg:gap-16">
        {/* Page Title Section */}
        <div className="self-stretch flex flex-col justify-center items-center gap-4">
          <div className="text-brand-primary text-2xl md:text-3xl lg:text-4xl font-bold font-metropolis uppercase tracking-wide text-center">
            products
          </div>
          <div className="w-full max-w-[1240px] h-[5px] bg-gradient-to-r from-transparent via-brand-secondary to-transparent opacity-60" />
        </div>

        {/* Products Grid Section */}
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {products.map((product) => (
              <div key={product.id} className="h-auto min-h-96 p-3 bg-white rounded-[10px] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.20)] shadow-[-4px_-4px_4px_0px_rgba(0,0,0,0.05)] flex flex-col justify-start items-center gap-2">
                <div className="w-full aspect-square p-2.5 flex justify-center items-center">
                  {product.showCircleBg ? (
                    <div className="w-20 h-20 md:w-24 md:h-24 p-2.5 bg-brand-secondary rounded-full flex justify-center items-center">
                      <Image 
                        className="w-12 h-16 md:w-16 md:h-20 rounded-3xl object-cover" 
                        src={product.imageUrl || '/images/placeholder.png'} 
                        alt={product.title}
                        width={64}
                        height={80}
                      />
                    </div>
                  ) : (
                    <Image 
                      className="w-full h-full object-cover rounded-[10px]" 
                      src={product.imageUrl || '/images/placeholder.png'} 
                      alt={product.title}
                      width={270}
                      height={270}
                    />
                  )}
                </div>
                <div className="w-full flex-1 flex flex-col justify-between items-start gap-3 p-2">
                  <div className="w-full text-black text-sm md:text-base font-normal font-metropolis capitalize leading-tight">
                    {product.title}
                  </div>
                  <div className="flex justify-start items-center">
                    <div className={`text-xs font-bold font-metropolis ${
                      product.isInStock ? 'text-green-700' : 'text-green-700'
                    }`}>
                      {product.availability}
                    </div>
                  </div>
                  <div className="w-full px-2.5 py-2 bg-brand-primary rounded-lg flex justify-center items-center cursor-pointer hover:bg-brand-primary/80 transition-colors duration-200">
                    <div className="text-white text-sm font-semibold font-metropolis leading-none">
                      {product.buttonText}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Associated With Section */}
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <SectionTitle title="associated with" />
          <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-4 items-center justify-items-center py-4">
            {companies.map((company) => (
              <CompanyCard
                key={company.id}
                imageUrl={company.imageUrl}
                alt={company.name}
                hasShadow={company.hasShadow}
                hasBorder={company.hasBorder}
                width="w-full"
                height="h-16 md:h-20 lg:h-24"
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
