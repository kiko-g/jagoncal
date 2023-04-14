import { useRouter } from 'next/router'
import { Prose } from '@/components/article/Prose'
import { formatDate } from '@/lib/formatDate'
import Layout from '../layout/Layout'

export function ArticleTemplate({ children, meta, isRssFeed = false }) {
  if (isRssFeed) {
    return children
  }

  return (
    <Layout location={meta.title} description={meta.description}>
      <article className="mx-auto mt-12 max-w-3xl lg:mt-24">
        <ArticleHeader meta={meta} />
        <Prose className="mx-auto mt-8">{children}</Prose>
        <ArticleFooter meta={meta} />
      </article>
    </Layout>
  )
}

function ArticleHeader({ meta }) {
  let router = useRouter()

  return (
    <header className="flex w-full flex-col">
      <div className="mt-4 flex w-full items-center justify-between gap-2">
        <time
          dateTime={meta.date}
          className="flex items-center text-base text-zinc-400 dark:text-zinc-500"
        >
          <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
          <span className="ml-3">{formatDate(meta.date)}</span>
        </time>
        <button
          type="button"
          onClick={() => router.back()}
          aria-label="Go back to articles"
          className="group flex items-center gap-1.5"
        >
          <ArrowLeftIcon className="h-5 w-5 stroke-zinc-200 transition group-hover:stroke-zinc-300 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
          <span className="text-zinc-400 transition group-hover:text-zinc-500 dark:text-zinc-500 dark:group-hover:text-zinc-400">
            Go back
          </span>
        </button>
      </div>
      <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
        {meta.title}
      </h1>
    </header>
  )
}

function ArticleFooter() {
  let router = useRouter()

  return (
    <div className="mt-24 flex w-full items-center justify-between border-t border-zinc-200 py-2 dark:border-zinc-500">
      <button
        type="button"
        onClick={() => router.back()}
        aria-label="Go back to articles"
        className="group flex items-center gap-1.5"
      >
        <span className="text-zinc-500 group-hover:text-zinc-600 dark:text-zinc-500 dark:group-hover:text-zinc-400">
          Back to articles
        </span>
      </button>

      <button
        type="button"
        onClick={() => router.back()}
        aria-label="Go back to articles"
        className="group flex items-center gap-1.5"
      >
        <span className="text-zinc-500 group-hover:text-zinc-600 dark:text-zinc-500 dark:group-hover:text-zinc-400">
          Back to top
        </span>
      </button>
    </div>
  )
}

function ArrowLeftIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
