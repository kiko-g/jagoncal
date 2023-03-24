import React from 'react';
import Seo from '../Seo';
import { Header, Footer } from './';

type Props = {
  children?: React.ReactNode;
  location: string;
};

export default function Layout({ children, location }: Props) {
  return (
    <div className="min-h-screen bg-white font-inter text-gray-800 dark:bg-black dark:text-white">
      <Seo location={location} />
      <main className="container mx-auto h-full min-h-screen w-full max-w-7xl border-x border-gray-200 bg-light dark:border-white/10 dark:bg-[#18181b]">
        <Header location={location} />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}
