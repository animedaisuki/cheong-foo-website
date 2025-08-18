import React, { ReactNode } from 'react';
import Header from './header';
import Footer from './footer';

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className = '' }) => {
  return (
    <div className={`w-full mx-auto inline-flex flex-col justify-start items-start ${className}`}>
      <Header />
      <main className="self-stretch">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
