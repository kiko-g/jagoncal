import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import { NavDesktop, DarkModeSwitch, Hamburger, NavMobile } from './';

type Props = {
  location: string;
};

export default function Header({ location }: Props) {
  const [hamburgerOpen, setHamburgerOpen] = React.useState(false);

  return (
    <header className={classNames('sticky top-0 z-20 flex flex-col backdrop-blur')}>
      <div className="flex items-center justify-between py-6 px-6 md:px-16 md:py-8">
        <div>
          <Link href="/" className={classNames(location === 'Home' ? 'invisible' : '', 'transition hover:opacity-80')}>
            <Image
              src="/avatar.jpg"
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full border-white/10 shadow-uniform shadow-gray-500 dark:shadow-gray-300"
            />
          </Link>
        </div>

        <div className="hidden md:flex">
          <NavDesktop location={location} />
        </div>

        <div className="flex flex-row items-center gap-4">
          <Hamburger openStateHook={[hamburgerOpen, setHamburgerOpen]} />
          <DarkModeSwitch />
        </div>
      </div>

      <NavMobile location={location} isOpen={hamburgerOpen} />
    </header>
  );
}
