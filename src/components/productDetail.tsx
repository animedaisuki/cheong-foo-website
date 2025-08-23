import React from 'react';
import Image from 'next/image';
import { Product } from '../data/products';
import ProductCard from './productCard';
import Link from 'next/link';

interface ProductDetailProps {
  product: Product;
  otherProducts: Product[];
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, otherProducts }) => {
  const handleInquiryClick = () => {
    // Handle inquiry action
    console.log('Inquiry clicked for product:', product.id);
  };

  const renderFeatureContent = (content: string[]) => {
    // Check if the content needs to be rendered in columns (for Connectivity Options)
    if (content.length > 3 && content.every(item => item.split(' ').length <= 2)) {
      // Split into columns for short items like connectivity options
      const mid = Math.ceil(content.length / 3);
      const col1 = content.slice(0, mid);
      const col2 = content.slice(mid, mid * 2);
      const col3 = content.slice(mid * 2);
      
      return (
        <div className="self-stretch inline-flex justify-start items-start gap-5">
          <div className="justify-start text-black text-xl font-medium font-metropolis leading-loose tracking-wide">
            {col1.map((item, index) => (
              <React.Fragment key={index}>
                {item}
                {index < col1.length - 1 && <br />}
              </React.Fragment>
            ))}
          </div>
          {col2.length > 0 && (
            <div className="justify-start text-black text-xl font-medium font-metropolis leading-loose tracking-wide">
              {col2.map((item, index) => (
                <React.Fragment key={index}>
                  {item}
                  {index < col2.length - 1 && <br />}
                </React.Fragment>
              ))}
            </div>
          )}
          {col3.length > 0 && (
            <div className="justify-start text-black text-xl font-medium font-metropolis leading-loose tracking-wide">
              {col3.map((item, index) => (
                <React.Fragment key={index}>
                  {item}
                  {index < col3.length - 1 && <br />}
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
      );
    }

    // Check if it's specifications that need two columns
    if (content.length > 4 && content.some(item => item.includes(':'))) {
      const mid = Math.ceil(content.length / 2);
      const col1 = content.slice(0, mid);
      const col2 = content.slice(mid);
      
      return (
        <div className="self-stretch inline-flex justify-start items-start gap-5">
          <div className="flex-1 justify-start text-black text-xl font-medium font-metropolis leading-loose tracking-wide">
            {col1.map((item, index) => (
              <React.Fragment key={index}>
                {item}
                {index < col1.length - 1 && <br />}
              </React.Fragment>
            ))}
          </div>
          <div className="flex-1 justify-start text-black text-xl font-medium font-metropolis leading-loose tracking-wide">
            {col2.map((item, index) => (
              <React.Fragment key={index}>
                {item}
                {index < col2.length - 1 && <br />}
              </React.Fragment>
            ))}
          </div>
        </div>
      );
    }

    // Default single column layout
    return (
      <div className="self-stretch inline-flex justify-start items-start gap-5">
        <div className="flex-1 justify-start text-black text-xl font-medium font-metropolis leading-loose tracking-wide">
          {content.map((item, index) => (
            <React.Fragment key={index}>
              {item}
              {index < content.length - 1 && <br />}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full px-4 md:px-8 lg:px-20 py-8 md:py-12 lg:py-20 bg-white flex justify-start items-center">
      <div className="w-full max-w-[1280px] flex flex-col justify-start items-start gap-8 md:gap-12 lg:gap-16 mx-auto">
        {/* Product Header Section */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16">
          {/* Main Product Image */}
          <div className="w-full lg:w-[500px] h-[300px] md:h-[400px] lg:h-[500px] p-2.5 flex justify-center items-center">
            <div className="w-120 h-44 flex justify-center items-center">
              <img
                className="w-30 h-30 rounded-3xl object-cover"
                src={
                  product.mainImage ||
                  product.imageUrl ||
                  "https://placehold.co/126x149"
                }
                alt={product.title}
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full lg:w-[683px] flex flex-col justify-between items-start gap-8">
            {/* Product Details and QR */}
            <div className="w-full flex flex-col md:flex-row justify-between items-start gap-4">
              <div className="flex flex-col justify-start items-start gap-3 flex-1">
                <div className="w-full text-black text-xl md:text-2xl font-medium font-metropolis leading-tight">
                  {product.title}
                </div>

                {product.specs && (
                  <div className="flex flex-col justify-start items-start gap-3">
                    <div className="text-neutral-600 text-lg md:text-xl font-normal font-metropolis uppercase leading-normal">
                      Brand : {product.specs.brand}
                    </div>
                    <div className="w-full text-neutral-600 text-lg md:text-xl font-normal font-metropolis uppercase">
                      Type : {product.specs.type}
                    </div>
                    <div className="text-neutral-600 text-sm md:text-base font-normal font-metropolis uppercase leading-normal">
                      ID : {product.specs.productId}
                    </div>
                    <div className="flex justify-start items-center gap-[5px]">
                      <div className="text-brand-green text-lg md:text-xl font-bold font-metropolis leading-normal tracking-tight">
                        Availability :
                      </div>
                      <div className="text-brand-green text-lg md:text-xl font-bold font-metropolis leading-normal tracking-tight">
                        {product.isInStock
                          ? "In Stock"
                          : "Lead Time: " + (product.leadTime || "2–3 Months")}
                      </div>
                    </div>
                  </div>
                )}

                {/* Inquiry Button */}
                <button
                  onClick={handleInquiryClick}
                  className="w-64 p-2.5 bg-white rounded-lg border border-brand-green flex justify-center items-center gap-2.5 hover:bg-brand-green/10 transition-colors duration-200"
                >
                  <img src="/icons/inquiry.svg" alt="Inquiry" />
                  <Link href="https://wa.me/85256498846">
                    <div className="text-brand-green text-base font-normal font-metropolis uppercase leading-tight">
                      Inquiry Now
                    </div>
                  </Link>
                </button>
              </div>

              {/* QR Code Placeholder */}
              <img src="/images/badge.png" alt="QR Code" />
            </div>

            {/* Additional Images Gallery */}
            {product.additionalImages &&
              product.additionalImages.length > 0 && (
                <div className="w-full flex justify-between items-start gap-2 md:gap-4">
                  {product.additionalImages.slice(0, 3).map((image, index) => (
                    <Image
                      key={index}
                      className="w-32 md:w-40 h-28 md:h-36 rounded-lg object-cover"
                      src={image}
                      alt={`${product.title} ${index + 1}`}
                      width={160}
                      height={144}
                    />
                  ))}
                  {product.additionalImages.length > 3 && (
                    <div className="w-32 md:w-40 h-28 md:h-36 relative rounded-lg shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] border border-brand-secondary overflow-hidden">
                      <div className="w-full h-full bg-black/70 blur-[0.50px]"></div>
                      <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
                        <div className="text-white text-lg md:text-xl font-normal uppercase text-shadow">
                          More
                          <br />
                          {product.additionalImages.length - 3} Images
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
          </div>
        </div>

        {/* Product Features Section */}
        {product.features && product.features.length > 0 && (
          <div className="w-full max-w-[795px] flex flex-col justify-start items-start gap-7">
            {/* Section Title */}
            <div className="w-full max-w-96 flex justify-start items-center gap-1">
              <img src="/icons/ellipse.svg" alt="Ellipse" />
              <div className="flex-1 text-brand-dark text-xl md:text-2xl font-semibold font-pingfang uppercase leading-none tracking-wide">
                product feature
              </div>
            </div>

            {/* Features List */}
            {product.features.map((feature, index) => (
              <div
                key={index}
                className="w-full flex flex-col justify-start items-start gap-2"
              >
                <div className="text-brand-primary text-xl md:text-2xl font-medium font-metropolis uppercase leading-normal">
                  {feature.title}
                </div>
                {renderFeatureContent(feature.content)}
              </div>
            ))}
          </div>
        )}

        {/* Other Products Section */}
        {otherProducts.length > 0 && (
          <div className="w-full flex flex-col justify-start items-start gap-4">
            {/* Section Title */}
            <div className="w-full max-w-96 flex justify-start items-center gap-1">
              <img src="/icons/ellipse.svg" alt="Ellipse" />
              <div className="flex-1 text-brand-dark text-xl md:text-2xl font-semibold font-pingfang uppercase leading-none tracking-wide">
                other products
              </div>
            </div>

            {/* Products Grid */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {otherProducts.slice(0, 4).map((otherProduct) => (
                <ProductCard
                  key={otherProduct.id}
                  title={otherProduct.title}
                  availability={otherProduct.availability}
                  isInStock={otherProduct.isInStock}
                  imageUrl={otherProduct.imageUrl}
                  buttonText={otherProduct.buttonText}
                  productId={otherProduct.id}
                  className="cursor-pointer hover:shadow-lg transition-shadow duration-200"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
