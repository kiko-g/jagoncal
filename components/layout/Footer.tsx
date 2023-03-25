import Link from 'next/link';
import React from 'react';

type Props = {};

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

export default function Footer({}: Props) {
  return (
    <div className="mx-auto mt-32 max-w-7xl lg:px-8">
      <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                {navigation.map((item) => (
                  <Link
                    href={item.href}
                    key={`footer-nav-${item.title}`}
                    className="transition hover:text-cyan-600 dark:hover:text-cyan-500"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                ©{new Date().getFullYear()} José Gonçalves. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
