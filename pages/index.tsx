import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { links } from '../utils/data';
import { Layout, Photos } from '../components/layout';

export default function Home() {
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

          <p className="mt-6 text-base leading-8 text-zinc-600 dark:text-zinc-400">
            I&apos;m José Gonçalves, a lecturer in the Faculty of Science of the University of Porto (FCUP), Department
            of Geosciences, Enviroment and Land Planning (DGAOT), and a researcher at CIIMAR (Interdisciplinary Centre
            of Marine and Environmental Research), in the Coastal Monitoring and Management Group. I hold a Ph.D. in
            Photogrammetry (2001) and a MSc in GIS (1993) from University College London, Department of Geomatic
            Engineering and a degree in Surveying Engineering from FCUP.
          </p>

          <ul className="mt-6 flex gap-6">
            {links.map((social) => (
              <li key={social.name} className="group -m-1 p-1">
                <Link href={social.url}>{social.icon}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 sm:mt-20">
          <Photos />
        </div>
      </article>
    </Layout>
  );
}
