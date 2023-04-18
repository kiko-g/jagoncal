import React from 'react'
import Link from 'next/link'
import type { BlogpostLink } from '@/types'
import { Layout } from '@/components/layout'
import { getAllBlogposts } from '@/lib/getMdxFiles'

type Props = {
  blogposts: BlogpostLink[]
}

type BlogpostProps = {
  blogpost: BlogpostLink
}

export default function Blog({ blogposts }: Props) {
  const description = `All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order`

  return (
    <Layout location="Blog" description={description}>
      <div className="relative mt-16 px-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl lg:max-w-5xl">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Here are some things I write about varied topics, mostly about
              geomatics.
            </h1>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              {description}
            </p>
          </div>

          <div className="mt-16 sm:mt-20">
            <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
              <div className="flex max-w-3xl flex-col space-y-16">
                {blogposts.map((blogpost, blogpostIdx) => (
                  <Blogpost
                    key={`blogpost-${blogpostIdx}`}
                    blogpost={blogpost}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

function Blogpost({ blogpost }: BlogpostProps) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <div className="group relative flex flex-col items-start md:col-span-3">
        <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
          <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
          <Link href={`blog/${blogpost.slug}`}>
            <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
            <span className="relative z-10">{blogpost.title}</span>
          </Link>
        </h2>
        <time
          className="relative z-10 order-first mb-3 flex items-center pl-3.5 text-sm text-zinc-400 dark:text-zinc-500 md:hidden"
          dateTime="2022-09-05"
        >
          <span
            className="absolute inset-y-0 left-0 flex items-center"
            aria-hidden="true"
          >
            <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
          </span>
          {blogpost.date}
        </time>
        <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {blogpost.description}
        </p>
        <div
          aria-hidden="true"
          className="relative z-10 mt-4 flex items-center text-sm font-medium text-blue-500"
        >
          Read blogpost
          <svg
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
            className="ml-1 h-4 w-4 stroke-current"
          >
            <path
              d="M6.75 5.75 9.25 8l-2.5 2.25"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
      </div>
      <time
        className="relative z-10 order-first mb-3 mt-1 hidden items-center text-sm text-zinc-400 dark:text-zinc-500 md:block"
        dateTime="2022-09-05"
      >
        {blogpost.date}
      </time>
    </article>
  )
}

export async function getStaticProps() {
  return {
    props: {
      blogposts: (await getAllBlogposts()).map(
        ({ component, ...meta }) => meta
      ),
    },
  }
}
