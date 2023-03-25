import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Navbar from './Navbar';
import DarkModeSwitch from './DarkModeSwitch';
import classNames from 'classnames';

type Props = {
  location: string;
};

export default function Header({ location }: Props) {
  return (
    <header className="flex items-center justify-between px-16 py-8">
      <div>
        <Link href="/" className={classNames(location === 'Home' ? 'invisible' : '', 'transition hover:opacity-80')}>
          <Image
            src="/avatar.jpg"
            alt="Profile"
            width={48}
            height={48}
            className="rounded-full border-white/10 shadow-uniform shadow-gray-500 dark:shadow-gray-300"
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
