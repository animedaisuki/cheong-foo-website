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
              <ProductCard
                key={product.id}
                title={product.title}
                availability={product.availability}
                isInStock={product.isInStock}
                imageUrl={product.imageUrl}
                buttonText={product.buttonText}
                productId={product.id}
              />
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
