export type ArticleLink = {
  date: string
  title: string
  description: string
  url: string
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
