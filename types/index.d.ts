export type ProjectLink = {
  title: string
  description: React.ReactNode
  url: string
  domain: string
}

export type TeachingGroup = {
  title: React.ReactNode
  courses: Course[]
}

export type Course = {
  name: string
  timeSpan: string
  description: string
  url: string
}

/* Meta */
export type HomeMeta = {
  headline: string
  imageFilepath: string
}


export type AboutMeta = {
  name: string
  institution: string
  street: string
}

export type BlogpostMeta = {
  slug: string
  author: string
  date: string
  title: string
  description: string
  href: string
}

export type ProjectMeta = {
  slug: string
  title: string
  description: string
  href: string
  imageFilepath: string
}

export type TeachingMeta = {
  headline: string
  teaching: TeachingGroup[]
}

export type ProjectsMeta = {
  headline: string
  projects: ProjectLink[]
}
