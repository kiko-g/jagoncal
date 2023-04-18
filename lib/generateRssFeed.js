import ReactDOMServer from 'react-dom/server'
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider'
import { Feed } from 'feed'
import { mkdir, writeFile } from 'fs/promises'
import { getAllBlogposts } from './getMdxFiles'

export async function generateRssFeed() {
  let blogposts = await getAllBlogposts()
  let siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  let author = {
    name: 'Spencer Sharp',
    email: 'spencer@planetaria.tech',
  }

  let feed = new Feed({
    title: author.name,
    description: 'Your blog description',
    author,
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/favicon.ico`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    feedLinks: {
      rss2: `${siteUrl}/rss/feed.xml`,
      json: `${siteUrl}/rss/feed.json`,
    },
  })

  for (let blogpost of blogposts) {
    let url = `${siteUrl}/blog/${blogpost.slug}`
    let element = (
      <MemoryRouterProvider>
        <blogpost.component isRssFeed />
      </MemoryRouterProvider>
    )
    let html = ReactDOMServer.renderToStaticMarkup(element)

    feed.addItem({
      title: blogpost.title,
      id: url,
      link: url,
      description: blogpost.description,
      content: html,
      author: [author],
      contributor: [author],
      date: new Date(blogpost.date),
    })
  }

  await mkdir('./public/rss', { recursive: true })
  await Promise.all([
    writeFile('./public/rss/feed.xml', feed.rss2(), 'utf8'),
    writeFile('./public/rss/feed.json', feed.json1(), 'utf8'),
  ])
}
