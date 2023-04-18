import { useRouter } from 'next/router'
import { Prose } from '@/components/article/Prose'
import { formatDate } from '@/lib/formatDate'
import Layout from '../layout/Layout'
import { ArrowLongLeftIcon, ArrowLongUpIcon } from '@heroicons/react/24/outline'

export function ArticleTemplate({ children, meta, isRssFeed = false }) {
  if (isRssFeed) {
    return children
  }

  return (
    <Layout location={meta.title} description={meta.description}>
      <article className="mx-auto mt-12 max-w-3xl lg:mt-24">
        <ArticleHeader meta={meta} />
        <Prose className="mx-auto mt-8 max-w-3xl">{children}</Prose>
        <ArticleFooter meta={meta} />
      </article>
    </Layout>
  )
}

function GoBackButton() {
  let router = useRouter()

  return (
    <button
      type="button"
      onClick={() => router.back()}
      aria-label="Go back to articles"
      className="group order-1 flex items-center gap-1.5 md:order-2"
    >
      <ArrowLongLeftIcon className="h-5 w-5 stroke-zinc-200 transition group-hover:stroke-zinc-300 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
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
      className="group order-1 flex items-center gap-1.5 md:order-2"
    >
      <ArrowLongUpIcon className="h-5 w-5 stroke-zinc-200 transition group-hover:stroke-zinc-300 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
      <span className="text-zinc-400 transition group-hover:text-zinc-500 dark:text-zinc-500 dark:group-hover:text-zinc-400">
        Back to top
      </span>
    </button>
  )
}

function ArticleHeader({ meta }) {
  return (
    <header className="flex w-full flex-col">
      <div className="mt-4 flex w-full items-center justify-between gap-2">
        <time
          dateTime={meta.date}
          className="order-2 flex items-center text-base text-zinc-400 dark:text-zinc-500 md:order-1"
        >
          <span className="mr-3 block md:hidden">{formatDate(meta.date)}</span>
          <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
          <span className="ml-3 hidden md:block">{formatDate(meta.date)}</span>
        </time>

        <GoBackButton />
      </div>
      <h1 className="mt-6 text-4xl font-bold tracking-tighter text-zinc-800 dark:text-zinc-100 sm:text-5xl">
        {meta.title}
      </h1>
    </header>
  )
}

function ArticleFooter() {
  let router = useRouter()

  return (
    <div className="mt-24 flex w-full items-center justify-between border-t border-zinc-200 py-2 dark:border-zinc-500">
      <BackToTopButton />
      <GoBackButton />
    </div>
  )
}
