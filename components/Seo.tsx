import React from 'react';
import Head from 'next/head';

type Props = {
  title: string;
};

export default function Seo({ title }: Props) {
  const siteTitle = `José Gonçalves`;
  const author = `kikogoncalves`;
  const description = `José Gonçalves' website. Find out more about my projects, articles and work.`;
  const meta = [
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: siteTitle,
    },
    {
      property: `og:description`,
      content: description,
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
      content: description,
    },
  ];

  return (
    <Head>
      <title>{`${title} | ${siteTitle}`}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
