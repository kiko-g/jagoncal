import React from 'react'
import Link from 'next/link'
import { TeachingGroup, Course } from '@/types'
import { Layout } from '../components/layout'

type Props = {}

export default function Teaching({}: Props) {
  const teaching: TeachingGroup[] = [
    {
      title: (
        <span>
          Faculty of Sciences of the University of Porto (
          <Link
            target="_blank"
            href="https://sigarra.up.pt/fcup/en/func_geral.formview?p_codigo=236853"
            className="text-blue-500 hover:underline"
          >
            FCUP
          </Link>
          )
        </span>
      ),
      courses: [
        {
          name: 'Photogrammetry',
          timeSpan: '2009 - Now',
          description:
            'General knowledge of photogrammetryc concepts, with emphasis on digital photogrammetry, and focused on cartography and geographical information (Master in Surveying Engineering).',
          url: 'https://sigarra.up.pt/fcup/en/UCURR_GERAL.FICHA_UC_VIEW?pv_ocorrencia_id=499623',
        },
        {
          name: 'Cartography',
          timeSpan: '2009 - Now',
          description:
            'Main concepts of reference systems involved in map production and the cartographic representation methods, both traditional and digital (Master in Remote Sensing).',
          url: 'https://sigarra.up.pt/fcup/en/UCURR_GERAL.FICHA_UC_VIEW?pv_ocorrencia_id=499605',
        },
      ],
    },
    {
      title: 'School of Medicine and Biomedical Sciences (ICBAS)',
      courses: [
        {
          name: 'Marine Geology',
          timeSpan: '2021 - 2022',
          description:
            'Main geological phenomena through a global approach that involves the genesis, composition and evolution of our Planet assuming Earth as a dynamic system where processes occur as an interactive cycle involving both the Earth interior and their external effects in the atmosphere, biosphere and oceans.',
          url: 'https://sigarra.up.pt/icbas/en/UCURR_GERAL.FICHA_UC_VIEW?pv_ocorrencia_id=494824',
        },
      ],
    },
  ]

  const headline = 'Teaching Experience'
  const description = `Here are some courses I've either taught or still teach across different faculties of the University of Porto, but mainly in the Faculty of Sciences. I teach in the areas of Photogrammetry, Topographic Cartography and Geographic Information Systems (Bachelor in Geospatial Engineering, Master in Surveying Engineering and Master in Remote Sensing).`

  return (
    <Layout location="Teaching">
      <div className="relative mt-16 px-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl lg:max-w-5xl">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              {headline}
            </h1>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              {description}
            </p>
          </div>

          <div className="mt-16 space-y-20 sm:mt-20">
            {teaching.map((group, groupIdx) => (
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

type CourseProps = {
  course: Course
}

function Course({ course }: CourseProps) {
  return (
    <article className="group relative flex flex-col items-start">
      <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
        <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
        <a href="/speaking#">
          <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
          <span className="relative z-10">{course.name}</span>
        </a>
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
