import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { BlogpostMeta, HomeMeta } from '@/types'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllBlogposts } from '@/lib/getMdxFiles'
import { Layout } from './layout'
import { BlogpostCard, Photos, Resume, Socials } from './home'

type Props = {
  meta: HomeMeta
  children: React.ReactNode
  blogposts: BlogpostMeta[]
}

export function HomeTemplate({ children, meta, blogposts }: Props) {
  return (
    <Layout location="Home">
      <article className="relative mx-auto flex max-w-6xl flex-col px-4 sm:px-12 lg:px-16">
        <Link href="/" className="transition hover:opacity-80">
          <Image
            src={`/${meta.imageFilepath}`}
            alt="Profile"
            width={64}
            height={64}
            className="rounded-full border-white/10 shadow-uniform"
          />
        </Link>

        <div className="max-w-3xl">
          <h1 className="mt-9 text-4xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            {meta.headline}
          </h1>

          <div className="mt-6 text-base leading-8 text-zinc-700 dark:text-zinc-400">
            {children}
          </div>

          <ul className="mt-6 flex gap-6">
            <Socials />
          </ul>
        </div>

        <Photos />

        <div className="mt-24 md:mt-28">
          <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
            <div className="flex flex-col gap-16">
              {blogposts.map((blogpost) => (
                <BlogpostCard key={blogpost.slug} blogpost={blogpost} />
              ))}
            </div>

            <div className="space-y-10 lg:pl-16 xl:pl-24">
              <Resume />
            </div>
          </div>
        </div>
      </article>
    </Layout>
  )
}
