import React from "react"
import Seo from "../Seo"

type Props = {
  children?: React.ReactNode
  location: string
}

export default function Layout({ children, location }: Props) {
  return (
    <>
      <Seo title={location} />
      <main className="container mx-auto max-w-7xl min-h-screen bg-light dark:bg-[#18181b] w-full h-full">
        {children}
      </main>
    </>
  )
}
