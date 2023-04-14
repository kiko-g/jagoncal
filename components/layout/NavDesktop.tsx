import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';

type Props = {
  location: string;
};

export default function NavDesktop({ location }: Props) {
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
    <nav className="rounded-full border border-gray-200 bg-gray-50 px-4 dark:border-white/20 dark:bg-white/10">
      <ul className="flex gap-4">
        {navigation.map((item) => (
          <li key={item.title}>
            <Link href={item.href} className="relative block px-3 py-3 text-sm transition">
              <span
                className={classNames(
                  location === item.title
                    ? 'font-medium text-blue-500 hover:opacity-80 dark:text-blue-500'
                    : 'hover:text-blue-500 dark:hover:text-blue-500'
                )}
              >
                {item.title}
              </span>
              {location === item.title ? (
                <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-blue-500/5 via-blue-500/50 to-blue-500/5 dark:from-blue-500/20 dark:via-blue-500/80 dark:to-blue-500/20"></span>
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
