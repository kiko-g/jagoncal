import { useRouter } from 'next/router'
import { Prose } from '@/components/article/Prose'
import { formatDate } from '@/lib/formatDate'
import Layout from '../layout/Layout'

export function ArticleTemplate({ children, meta, isRssFeed = false }) {
  let router = useRouter()

  if (isRssFeed) {
    return children
  }

  return (
    <Layout location={meta.title} description={meta.description}>
      <article className="mx-auto mt-12 max-w-3xl lg:mt-24">
        <header className="flex flex-col">
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            {meta.title}
          </h1>

          <div className="mt-4 flex w-full items-center justify-between gap-2">
            <button
              type="button"
              onClick={() => router.back()}
              aria-label="Go back to articles"
              className="flex items-center gap-1.5"
            >
              <ArrowLeftIcon className="h-5 w-5 stroke-zinc-400 transition group-hover:stroke-zinc-700 dark:stroke-zinc-400 dark:group-hover:stroke-zinc-300" />
              <span className="text-zinc-400 dark:text-zinc-300">Go back</span>
            </button>

            <time
              dateTime={meta.date}
              className="flex items-center text-base text-zinc-400 dark:text-zinc-500"
            >
              <span className="mr-3">{formatDate(meta.date)}</span>
              <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
            </time>
          </div>
        </header>
        <Prose className="mt-8">{children}</Prose>

        <div className="mt-24 flex w-full items-center justify-between border-t py-2">
          <button
            type="button"
            onClick={() => router.back()}
            aria-label="Go back to articles"
            className="group flex items-center gap-1.5"
          >
            <span className="text-zinc-400 group-hover:text-zinc-700 dark:text-zinc-300 dark:group-hover:text-zinc-300">
              Back to articles
            </span>
          </button>

          <button
            type="button"
            onClick={() => router.back()}
            aria-label="Go back to articles"
            className="group flex items-center gap-1.5"
          >
            <span className="text-zinc-400 group-hover:text-zinc-700 dark:text-zinc-300 dark:group-hover:text-zinc-300">
              Back to top
            </span>
          </button>
        </div>
      </article>
    </Layout>
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
