import React from 'react'
import Link from 'next/link'
import type { Course, TeachingMeta, TeachingGroup } from '@/types'
import { Layout } from './layout'

type Props = {
  meta: TeachingMeta
  children: React.ReactNode
}

export function TeachingTemplate({ children, meta }: Props) {
  return (
    <Layout location="Teaching">
      <div className="relative mt-16 px-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl lg:max-w-5xl">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              {meta.headline}
            </h1>
            <div className="mt-6">{children}</div>
          </div>

          <div className="mt-16 space-y-20 sm:mt-20">
            {meta.teaching.map((group, groupIdx) => (
              <section
                key={`teaching-group-${groupIdx}`}
                className="md:border-l md:border-zinc-200 md:pl-6 md:dark:border-zinc-700/40"
              >
                <div className="grid max-w-4xl grid-cols-1 items-baseline gap-x-6 gap-y-8 md:grid-cols-4">
                  <h2 className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                    {group.title}
                  </h2>
                  <div className="md:col-span-3">
                    <div className="space-y-16">
                      {group.courses.map((course, courseIdx) => (
                        <Course
                          key={`teaching-group-${groupIdx}-course-${courseIdx}`}
                          course={course}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

function Course({ course }: { course: Course }) {
  return (
    <article className="group relative flex flex-col items-start">
      <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
        <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
        <Link href={course.url} target="_blank">
          <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
          <span className="relative z-10">{course.name}</span>
        </Link>
      </h3>
      <p className="relative z-10 order-first mb-3 flex items-center pl-3.5 text-sm text-zinc-400 dark:text-zinc-500">
        <span
          className="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
        </span>
        {course.timeSpan}
      </p>
      <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {course.description}
      </p>
      <div
        aria-hidden="true"
        className="relative z-10 mt-4 flex items-center text-sm font-medium text-blue-500"
      >
        See more
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
    </article>
  )
}
