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
            <div className='flex justify-between items-stretch h-full gap-6'>
              <img className='w-1/2 h-full object-cover' src="/images/banner-left.png" alt="Ellipse" />
              <img className='w-1/2 h-full object-cover' src="/images/banner-right.png" alt="Ellipse" />
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
