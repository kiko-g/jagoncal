import { useRouter } from 'next/router'
import type { BlogpostMeta } from '../types'
import { formatDate } from '@/lib/formatDate'
import { Layout, Prose } from '@/components/layout'
import { ArrowLongLeftIcon, ArrowLongUpIcon } from '@heroicons/react/24/outline'

type Props = {
  children: React.ReactNode
  meta: BlogpostMeta
  isRssFeed?: boolean
}

export function BlogpostTemplate({ children, meta, isRssFeed = false }: Props) {
  if (isRssFeed) return children

  return (
    <Layout location={meta.title} description={meta.description}>
      <article className="mx-auto mt-12 max-w-3xl lg:mt-24">
        <BlogpostHeader meta={meta} />
        <Prose className="mx-auto mt-8 max-w-3xl">{children}</Prose>
        <BlogpostFooter />
      </article>
    </Layout>
  )
}

function BlogpostHeader({ meta }: { meta: BlogpostMeta }) {
  return (
    <header className="flex w-full flex-col">
      <div className="mt-4 flex w-full items-center justify-between gap-2">
        <GoBackButton />
        <TimeStamp date={meta.date} />
      </div>
      <h1 className="mt-6 text-4xl font-bold tracking-tighter text-zinc-800 dark:text-zinc-100 sm:text-5xl">
        {meta.title}
      </h1>
    </header>
  )
}

function TimeStamp({ date }: { date: string }) {
  return (
    <time
      dateTime={date}
      className="flex items-center text-base text-zinc-400 dark:text-zinc-500"
    >
      <span className="mr-3">{formatDate(date)}</span>
      <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
    </time>
  )
}

function BlogpostFooter() {
  return (
    <div className="mt-24 flex w-full items-center justify-between border-t border-zinc-200 py-2 dark:border-zinc-500">
      <GoBackButton />
      <BackToTopButton />
    </div>
  )
}

function GoBackButton() {
  let router = useRouter()

  return (
    <button
      type="button"
      onClick={() => router.back()}
      aria-label="Go back to blog"
      className="group flex items-center gap-1.5"
    >
      <ArrowLongLeftIcon className="h-5 w-5 stroke-zinc-300 transition group-hover:stroke-zinc-400 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
      <span className="text-zinc-400 transition group-hover:text-zinc-500 dark:text-zinc-500 dark:group-hover:text-zinc-400">
        Go back
      </span>
    </button>
  )
}

function BackToTopButton() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Go back to top"
      className="group flex items-center gap-1.5"
    >
      <span className="text-zinc-400 transition group-hover:text-zinc-500 dark:text-zinc-500 dark:group-hover:text-zinc-400">
        Back to top
      </span>
      <ArrowLongUpIcon className="h-5 w-5 stroke-zinc-300 transition group-hover:stroke-zinc-400 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
    </button>
  )
}
