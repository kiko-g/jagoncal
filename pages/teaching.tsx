import React from 'react';
import { Layout } from '../components/layout';
import { TeachingGroupLink, CourseLink } from '@/@types';

type Props = {};

export default function Teaching({}: Props) {
  const teaching = [
    {
      title: 'Faculdade de Ciências da Universidade do Porto (FCUP)',
      courses: [
        {
          name: 'In space, no one can watch you stream — until now',
          title: 'SysConf 2021',
          description:
            'A technical deep-dive into HelioStream, the real-time streaming library I wrote for transmitting live video back to Earth.',
          url: 'https://www.youtube.com/watch?v=QZ1QZ1QZ1QZ',
        },
        {
          name: 'Lessons learned from our first product recall',
          title: 'Business of Startups 2020',
          description:
            "They say that if you're not embarassed by your first version, you're doing it wrong. Well when you're selling DIY space shuttle kits it turns out it's a bit more complicated.",
          url: 'https://www.youtube.com/watch?v=QZ1QZ1QZ1QZ',
        },
      ],
    },
    {
      title: 'Workshops',
      courses: [
        {
          name: 'How to build a startup',
          title: 'Startup Weekend 2019',
          description:
            "A workshop on how to build a startup from scratch, from idea to launch. I've run this workshop multiple times, and it's been a great way to meet new people and help them get started on their own projects.",
          url: 'https://www.youtube.com/watch?v=QZ1QZ1QZ1QZ',
        },
        {
          name: 'How to build a startup',
          title: 'Startup Weekend 2018',
          description:
            "A workshop on how to build a startup from scratch, from idea to launch. I've run this workshop multiple times, and it's been a great way to meet new people and help them get started on their own projects.",
          url: 'https://www.youtube.com/watch?v=QZ1QZ1QZ1QZ',
        },
      ],
    },
  ];

  return (
    <Layout location="Teaching">
      <div className="relative mt-16 px-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl lg:max-w-5xl">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Cras vestibulum in orci vel volutpat.
            </h1>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              Ut quis urna commodo, dictum nisl at, ultrices felis. Nulla auctor neque augue, id finibus enim
              pellentesque eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos.
            </p>
          </div>

          <div className="mt-16 space-y-20 sm:mt-20">
            {teaching.map((group, groupIdx) => (
              <section
                key={`teaching-group-${groupIdx}`}
                aria-labelledby=":rk:"
                className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40"
              >
                <div className="grid max-w-4xl grid-cols-1 items-baseline gap-x-6 gap-y-8 md:grid-cols-4">
                  <h2 id=":rk:" className="text-sm font-medium text-zinc-800 dark:text-zinc-100">
                    {group.title}
                  </h2>
                  <div className="md:col-span-3">
                    <div className="space-y-16">
                      {group.courses.map((course, courseIdx) => (
                        <Course key={`teaching-group-${groupIdx}-course-${courseIdx}`} course={course} />
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
  );
}

type CourseProps = {
  course: CourseLink;
};

function Course({ course }: CourseProps) {
  return (
    <article className="group relative flex flex-col items-start">
      <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
        <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
        <a href="/speaking#">
          <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
          <span className="relative z-10">{course.name}</span>
        </a>
      </h3>
      <p className="relative z-10 order-first mb-3 flex items-center pl-3.5 text-sm text-zinc-400 dark:text-zinc-500">
        <span className="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
          <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
        </span>
        {course.title}
      </p>
      <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">{course.description}</p>
      <div aria-hidden="true" className="relative z-10 mt-4 flex items-center text-sm font-medium text-cyan-500">
        See more
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="ml-1 h-4 w-4 stroke-current">
          <path d="M6.75 5.75 9.25 8l-2.5 2.25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      </div>
    </article>
  );
}
