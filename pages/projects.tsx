import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { ProjectLink } from '@/types'
import { Layout } from '../components/layout'

type Props = {}

export default function Projects({}: Props) {
  const projects: ProjectLink[] = [
    {
      title: '4Map4Health',
      description: (
        <p>
          Mapping of forest health, species and forest risks using Novel ICT
          Data and Approaches.
        </p>
      ),
      url: 'https://www.chistera.eu/projects/4map4health/',
      domain: 'chistera.eu',
    },
    {
      title: 'SWUAV',
      description: (
        <p>
          Mapping the intertidal zone and assessing seaweed biomass using UAV
          images.
        </p>
      ),
      url: 'https://swuav.ciimar.up.pt/',
      domain: 'gis.ciimar.up.pt',
    },
    {
      title: 'COSMO',
      description: (
        <p>
          Collaborative work with the{' '}
          <span className="italic">Agência Portuguesa do Ambiente</span> (APA)
          in the quality control of data from the Coastal Monitoring Program of
          the Portuguese Continental Shelf
        </p>
      ),
      url: 'https://cosmo.apambiente.pt/',
      domain: 'apambiente.pt',
    },
    {
      title: 'WEBSIG: Evolution of Cabedelo do Douro',
      description: (
        <p>
          WebSIG with orthoimages and digital surface models of works developed
          at CIIMAR and FCUP. Includes images from other national sources.
        </p>
      ),
      url: 'https://gis.ciimar.up.pt/cabedelo/',
      domain: 'gis.ciimar.up.pt',
    },
    {
      title: 'WEBSIG: MarRisk Project',
      description: (
        <p>
          Adaptation to climate change: know the risks and increase resilience{' '}
          <span className="italic">(website in development)</span>.
        </p>
      ),
      url: 'https://gis.ciimar.up.pt/MarRisk/',
      domain: 'gis.ciimar.up.pt',
    },
    {
      title: 'Remote Data Access in QGIS',
      description: (
        <p>
          Access to geographic information through project files (QGS) or layer
          files (QLR). Includes mainly coastal data and some general data.
        </p>
      ),
      url: 'https://gis.ciimar.up.pt/data/',
      domain: 'gis.ciimar.up.pt',
    },
    {
      title: 'Digital Elevation Model (DEM) Global Download',
      description: <p>Data for SRTM, ASTER, ALOS and TerraSAR.</p>,
      url: 'https://www.fc.up.pt/pessoas/jagoncal/dems/',
      domain: 'gis.ciimar.up.pt',
    },
    {
      title: 'Digital Elevation Model (DEM) Global Download 2',
      description: <p>Data for SRTM, ASTER, ALOS and TerraSAR.</p>,
      url: 'https://www.fc.up.pt/pessoas/jagoncal/dems/',
      domain: 'gis.ciimar.up.pt',
    },
  ]

  const headline = 'Projects and Research'
  const description = `Main areas of interest in the application of Photogrammetry and high resolution mapping to environmental monitoring. Interest also in the integration of GNSS, inertial navigation and video for mobile mapping.`

  return (
    <Layout location="Projects">
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

          <div className="mt-16 sm:mt-20">
            <ul
              className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
              role="list"
            >
              {projects.map((project, projectIdx) => (
                <ProjectCard project={project} key={`project-${projectIdx}`} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

function ProjectCard({ project }: { project: ProjectLink }) {
  const logo = (
    <Image
      alt="Project"
      src="/favicon.ico"
      decoding="async"
      data-nimg="1"
      className="h-8 w-8"
      loading="lazy"
      width={32}
      height={32}
    />
  )

  const badge = (
    <span className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-700"></span>
  )

  return (
    <li className="group relative flex flex-col items-start">
      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        {badge}
      </div>
      <h2 className="mt-6 text-base font-semibold tracking-tighter text-zinc-800 dark:text-zinc-100">
        <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
        <Link href={project.url} target="_blank">
          <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
          <span className="relative z-10">{project.title}</span>
        </Link>
      </h2>
      <div className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {project.description}
      </div>
      <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-blue-500 dark:text-zinc-200">
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-6 w-6 flex-none"
        >
          <path
            d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
            fill="currentColor"
          ></path>
        </svg>
        <span className="ml-2">{project.domain}</span>
      </p>
    </li>
  )
}
