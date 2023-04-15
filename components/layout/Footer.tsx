import Link from 'next/link'
import React from 'react'

type Props = {}

const navigation = [
  {
    title: 'Home',
    href: '/',
  },
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
]

export default function Footer({}: Props) {
  return (
    <footer className="mt-32">
      <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
        <div className="relative mx-4 sm:mx-8 lg:mx-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                {navigation.map((item) => (
                  <Link
                    href={item.href}
                    key={`footer-nav-${item.title}`}
                    className="transition hover:text-blue-600 dark:hover:text-blue-500"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col items-end">
                <p className="text-sm text-zinc-400 dark:text-zinc-500">
                  © {new Date().getFullYear()} José Gonçalves. All rights
                  reserved.
                </p>
                <Link
                  href="mailto:jagoncal@fc.up.pt"
                  className="text-sm text-blue-500/50 transition hover:text-blue-500 hover:underline dark:text-blue-500/50 dark:hover:text-blue-500"
                >
                  jagoncal@fc.up.pt
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
