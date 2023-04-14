import React from 'react';
import Head from 'next/head';

type Props = {
  location: string;
  description?: string;
};

export default function Seo({ location, description }: Props) {
  const siteTitle = `${location} - José Gonçalves`;
  const author = `kikogoncalves`;
  const desc = description || `José Gonçalves' website. Find out more about my projects, articles and work.`;
  const meta = [
    {
      name: `description`,
      content: desc,
    },
    {
      property: `og:title`,
      content: siteTitle,
    },
    {
      property: `og:description`,
      content: desc,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author || ``,
    },
    {
      name: `twitter:title`,
      content: siteTitle,
    },
    {
      name: `twitter:description`,
      content: desc,
    },
  ];

  return (
    <Head>
      <title>{siteTitle}</title>
      {meta.map((m, i) => (
        <meta key={i} {...m} />
      ))}
      <meta name="description" content={desc} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
