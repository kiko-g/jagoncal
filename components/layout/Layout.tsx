import React from 'react';
import Seo from '../Seo';
import { Header, Footer } from './';

type Props = {
  children?: React.ReactNode;
  location: string;
};

export default function Layout({ children, location }: Props) {
  return (
    <div className="bg-light font-inter text-gray-800 dark:bg-black dark:text-white">
      <Seo location={location} />
      <main className="container mx-auto w-full max-w-[75rem] border-x border-gray-200 bg-white dark:border-white/10 dark:bg-[#18181b]">
        <div className="flex min-h-screen flex-col">
          <Header location={location} />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </main>
    </div>
  );
}
