import React from 'react'
import { formatDate } from '@/lib/formatDate'
import { Card } from '@/components/Card'

export function BlogpostCard({ blogpost }: any) {
  return (
    <Card as="article">
      <Card.Title href={`/blog/${blogpost.slug}`}>{blogpost.title}</Card.Title>
      <Card.Eyebrow as="time" decorate>
        {formatDate(blogpost.date)}
      </Card.Eyebrow>
      <Card.Description>{blogpost.description}</Card.Description>
      <Card.Cta>Read blogpost</Card.Cta>
    </Card>
  )
}
