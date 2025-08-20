import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import ProductDetail from '../../components/productDetail';
import { Product, products } from '../../data/products';

interface ProductDetailPageProps {
  product: Product | null;
  otherProducts: Product[];
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product, otherProducts }) => {
  const router = useRouter();

  // Handle loading state
  if (router.isFallback) {
    return (
      <Layout>
        <div className="w-full min-h-[400px] flex justify-center items-center">
          <div className="text-brand-primary text-xl font-metropolis">Loading...</div>
        </div>
      </Layout>
    );
  }

  // Handle product not found
  if (!product) {
    return (
      <Layout>
        <div className="w-full min-h-[400px] flex flex-col justify-center items-center gap-4">
          <div className="text-brand-primary text-2xl font-metropolis font-bold">Product Not Found</div>
          <div className="text-gray-600 text-lg font-metropolis">The product you&apos;re looking for doesn&apos;t exist.</div>
          <button 
            onClick={() => router.push('/products')}
            className="px-6 py-3 bg-brand-primary text-white rounded-lg font-metropolis font-semibold hover:bg-brand-primary/80 transition-colors duration-200"
          >
            Back to Products
          </button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <ProductDetail product={product} otherProducts={otherProducts} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Generate paths for all products
  const paths = products.map((product) => ({
    params: { id: product.id },
  }));

  return {
    paths,
    fallback: false, // Show 404 for paths not returned by getStaticPaths
  };
};

export const getStaticProps: GetStaticProps<ProductDetailPageProps> = async ({ params }) => {
  const productId = params?.id as string;
  
  // Find the specific product
  const product = products.find((p) => p.id === productId) || null;
  
  // Get other products (excluding the current one)
  const otherProducts = products.filter((p) => p.id !== productId);

  return {
    props: {
      product,
      otherProducts,
    },
  };
};

export default ProductDetailPage;
