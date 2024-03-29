import React from 'react'
import { Header, Footer, Seo } from './'

type Props = {
  children?: React.ReactNode
  location: string
  description?: string
}

export default function Layout({ children, location, description }: Props) {
  return (
    <div className="bg-light font-inter text-gray-800 dark:bg-zinc-950 dark:text-white">
      <Seo location={location} description={description} />
      <main className="container mx-auto w-full max-w-[75rem] border-x border-gray-200 bg-white dark:border-white/10 dark:bg-zinc-900">
        <div className="flex min-h-screen flex-col">
          <Header location={location} />
          <div className="flex-1 px-4 md:px-0">{children}</div>
          <Footer />
        </div>
      </main>
    </div>
  )
}
