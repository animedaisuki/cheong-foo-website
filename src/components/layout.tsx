import React, { ReactNode } from 'react';
import Header from './header';
import Footer from './footer';

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className = '' }) => {
  return (
    <div className={`min-h-screen w-full flex flex-col ${className}`}>
      <Header />
      <main className="flex-1 w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
