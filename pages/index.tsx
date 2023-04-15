import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Layout } from '../components/layout'
import { getAllArticles } from '@/lib/getMdxFiles'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { ArticleLink } from '@/types'

import { Photos } from '@/components/Photos'
import { Resume } from '@/components/Resume'
import { ArticleCard } from '@/components/ArticleCard'
import Socials from '@/components/Socials'

type Props = {
  articles: ArticleLink[]
}

export default function Home({ articles }: Props) {
  return (
    <Layout location="Home">
      <article className="relative mx-auto flex max-w-6xl flex-col px-4 sm:px-12 lg:px-16">
        <Link href="/" className="transition hover:opacity-80">
          <Image
            src="/avatar.jpg"
            alt="Profile"
            width={64}
            height={64}
            className="rounded-full border-white/10 shadow-uniform"
          ></Image>
        </Link>

        <div className="max-w-3xl">
          <h1 className="mt-9 text-4xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Assistant Professor in Geomatics Engineering and researcher.
          </h1>

          <p className="mt-6 text-base leading-8 text-zinc-700 dark:text-zinc-400">
            I&apos;m José Gonçalves, a lecturer in the Faculty of Science of the
            University of Porto (FCUP), Department of Geosciences, Enviroment
            and Land Planning (DGAOT), and a researcher at CIIMAR
            (Interdisciplinary Centre of Marine and Environmental Research), in
            the Coastal Monitoring and Management Group. I hold a Ph.D. in
            Photogrammetry (2001) and a MSc in GIS (1993) from University
            College London, Department of Geomatic Engineering and a degree in
            Surveying Engineering from FCUP.
          </p>

          <ul className="mt-6 flex gap-6">
            <Socials />
          </ul>
        </div>

        <Photos />
        <div className="mt-24 md:mt-28">
          <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
            <div className="flex flex-col gap-16">
              {articles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
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

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
