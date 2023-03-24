import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Navbar from './Navbar';
import DarkModeSwitch from './DarkModeSwitch';

type Props = {
  location: string;
};

export default function Header({ location }: Props) {
  return (
    <header className="flex items-center justify-between px-16 py-8">
      <div>
        <Link href="/" className="transition hover:opacity-80">
          <Image
            src="/favicon.ico"
            alt="Profile"
            width={48}
            height={48}
            className="rounded-full border-white/10 shadow-uniform shadow-indigo-600 dark:shadow-indigo-500"
          />
        </Link>
      </div>

      <div>
        <Navbar location={location} />
      </div>

      <div>
        <DarkModeSwitch />
      </div>
    </header>
  );
}
