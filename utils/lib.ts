import glob from 'fast-glob'
import * as path from 'path'

interface Blogpost {
  date: string
}

async function importBlogpost(blogpostFilename: string) {
  let { meta, default: component } = await import(
    `../pages/blog/${blogpostFilename}`
  )
  return {
    slug: blogpostFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

export async function getAllBlogposts() {
  let blogpostFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'pages/blog'),
  })

  let blogposts = await Promise.all(blogpostFilenames.map(importBlogpost))

  return blogposts.sort((a: Blogpost, z: Blogpost) => {
    return new Date(z.date).getTime() - new Date(a.date).getTime()
  })
}

export function formatDate(dateString: string) {
  return new Date(`${dateString}T00:00:00Z`).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}
