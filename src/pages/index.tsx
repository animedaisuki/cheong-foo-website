import React from 'react';
import Layout from '../components/layout';
import ProductCard from '../components/productCard';
import CompanyCard from '../components/companyCard';
import FeatureCard from '../components/featureCard';
import SectionLayout from '../components/sectionLayout';
import { products } from '../data/products';
import { features } from '../data/features';
import { companies } from '../data/companies';

export default function Home() {
  return (
    <Layout>
      {/* Main Content */}
      <div className="w-full px-4 md:px-8 lg:px-20 py-8 md:py-12 lg:py-20 bg-white flex flex-col gap-8 md:gap-12 lg:gap-16">
        {/* Featured Product Section */}
        <SectionLayout title="featured product">
          {/* Featured Product Content */}
          <div className="self-stretch pb-2.5 bg-stone-200/30 rounded-bl-xl rounded-br-xl flex flex-col justify-start items-start gap-4">
            <div className='flex flex-col md:flex-row justify-between items-stretch h-full gap-6'>
              <img className='w-full md:w-1/2 h-full object-cover' src="/images/banner-left.png" alt="Banner Left" />
              <img className='w-full md:w-1/2 h-full object-cover' src="/images/banner-right.png" alt="Banner Right" />
            </div>
            {/* Features Section */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
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
        </SectionLayout>

        {/* Other Products Section */}
        <SectionLayout title="other products">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
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
        </SectionLayout>

        {/* Associated With Section */}
        <SectionLayout title="associated with">
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
        </SectionLayout>
      </div>
    </Layout>
  );
}
