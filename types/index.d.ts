export type ArticleLink = {
  slug: string
  author: string
  date: string
  title: string
  description: string
  href: string
}

export type ProjectLink = {
  title: string
  description: string
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
