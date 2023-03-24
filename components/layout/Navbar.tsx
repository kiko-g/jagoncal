import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';

type Props = {
  location: string;
};

export default function Navbar({ location }: Props) {
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
  ];

  return (
    <nav className="rounded-full border border-gray-200 bg-white/90 px-4 dark:border-white/20 dark:bg-white/10">
      <ul className="flex gap-4">
        {navigation.map((item) => (
          <li key={item.title}>
            <Link
              href={item.href}
              className="relative block px-3 py-3 text-sm transition hover:text-indigo-500 dark:hover:text-indigo-400"
            >
              <span className={classNames(location === item.title ? 'text-indigo-500 dark:text-indigo-400' : '')}>
                {item.title}
              </span>
              {location === item.title ? (
                <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-indigo-500/5 via-indigo-500/50 to-indigo-500/5 dark:from-indigo-500/10 dark:via-indigo-500/50 dark:to-indigo-500/10"></span>
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}