import glob from 'fast-glob'
import * as path from 'path'

interface Article {
  date: string;
}

async function importArticle(articleFilename: string) {
  let { meta, default: component } = await import(
    `../pages/articles/${articleFilename}`
  )
  return {
    slug: articleFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

export async function getAllArticles() {
  let articleFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'pages/articles'),
  })

  let articles = await Promise.all(articleFilenames.map(importArticle))

  return articles.sort((a: Article, z: Article) => {
    return new Date(z.date).getTime() - new Date(a.date).getTime();
  });
}

