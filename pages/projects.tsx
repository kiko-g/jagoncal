import React from 'react'
import type { ProjectLink } from '@/types'
import { Layout } from '../components/layout'
import { ProjectCard } from '@/components/projects'

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
      domain: 'ciimar.up.pt',
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
      domain: 'ciimar.up.pt',
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
