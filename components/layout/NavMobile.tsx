import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';

type Props = {
  location: string;
  isOpen: boolean;
};

export default function NavMobile({ location, isOpen }: Props) {
  if (!isOpen) return null;

  const navigation = [
    {
      title: 'About',
      href: '/about',
    },
    {
      title: 'Articles',
      href: '/articles',
    },
    {
      title: 'Projects',
      href: '/projects',
    },
    {
      title: 'Teaching',
      href: '/teaching',
    },
  ];

  return (
    <nav className="mb-4 flex border-t border-zinc-100 py-4 dark:border-zinc-700/40 md:hidden">
      <ul className="flex w-full flex-wrap items-center justify-center gap-2">
        {navigation.map((item) => {
          const isActive = location === item.title;

          return (
            <li key={item.title}>
              <Link
                href={item.href}
                className={classNames(
                  `relative block rounded-3xl px-3 py-2 text-sm tracking-tight transition`,
                  isActive ? 'bg-blue-500 text-white' : 'hover:bg-blue-500/50'
                )}
              >
                <span>{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
