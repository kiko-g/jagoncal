import React from 'react'
import Image from 'next/image'
import { Layout } from '../components/layout'
import { AboutText, Socials } from '@/components/about'

type Props = {}

export default function About({}: Props) {
  return (
    <Layout location="About">
      <div className="relative mt-16 px-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl lg:max-w-5xl">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
            <div className="lg:pl-20">
              <div className="max-w-xs px-2.5 lg:max-w-none">
                <Image
                  alt="profile"
                  sizes="(min-width: 1024px) 32rem, 20rem"
                  src="/avatar.jpg"
                  decoding="async"
                  data-nimg="1"
                  className="aspect-square rotate-0 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 md:rotate-3"
                  loading="lazy"
                  width={800}
                  height={800}
                />
              </div>
            </div>
            <div className="lg:order-first lg:row-span-2">
              <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                I&apos;m José Gonçalves. I live in Porto, where I do most of my
                work.
              </h1>
              <div className="prose mt-6 dark:prose-invert">
                <AboutText />
              </div>
            </div>

            {/* Links */}
            <div className="lg:pl-20">
              <ul role="list" className="flex flex-col gap-y-4">
                <Socials />
              </ul>

              {/* Details */}
              <ul className="mt-8 flex flex-col gap-y-1 border-t border-zinc-100 pt-8 text-sm font-normal tracking-tight text-zinc-400 dark:border-zinc-700/40 dark:text-zinc-500">
                <li>Faculty of Science of the University of Porto (FCUP)</li>
                <li>Rua do Campo Alegre, 687, 4169-007 Porto, Portugal</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
