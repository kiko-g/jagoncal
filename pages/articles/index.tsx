import React from 'react';
import Link from 'next/link';
import type { ArticleLink } from '@/@types';
import { Layout } from '@/components/layout';
import { getAllArticles } from '@/lib/getMdxFiles';

type Props = {
  articles2: any;
};

export default function Articles({ articles2 }: Props) {
  console.log(articles2);
  const description = `All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order`;
  const articles: ArticleLink[] = [
    {
      title: 'Quasi architecto beatae vitae dicta',
      date: 'September 21, 2022',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dignissim justo blandit, bibendum risus a, hendrerit dolor. Nam diam diam, efficitur et nulla eget, varius faucibus enim. Donec sem eros.',
      url: '/articles/lorem-ipsum-dolor-sit-amet',
    },
    {
      title: 'Itaque earum rerum hic tenetur a sapiente delectus',
      date: 'October 28, 2022',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
      url: '/articles/lorem-ipsum-dolor-sit-amet',
    },
    {
      title: 'Finibus Bonorum et Malorum',
      date: 'November 15, 2022',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      url: '/articles/lorem-ipsum-dolor-sit-amet',
    },
  ];

  return (
    <Layout location="Articles" description="">
      <div className="relative mt-16 px-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl lg:max-w-5xl">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h1>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              Dumus autem, inquit, non habet in voluptate voluptatem, sed voluptatem in dolore. Duo Reges: constructio
              interrete.
            </p>
          </div>

          <div className="mt-16 sm:mt-20">
            <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
              <div className="flex max-w-3xl flex-col space-y-16">
                {articles.map((article, articleIdx) => (
                  <Article key={`article-${articleIdx}`} article={article} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

type ArticleProps = {
  article: ArticleLink;
};

function Article({ article }: ArticleProps) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <div className="group relative flex flex-col items-start md:col-span-3">
        <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
          <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
          <Link href={article.url}>
            <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
            <span className="relative z-10">{article.title}</span>
          </Link>
        </h2>
        <time
          className="relative z-10 order-first mb-3 flex items-center pl-3.5 text-sm text-zinc-400 dark:text-zinc-500 md:hidden"
          dateTime="2022-09-05"
        >
          <span className="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
            <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
          </span>
          {article.date}
        </time>
        <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">{article.description}</p>
        <div aria-hidden="true" className="relative z-10 mt-4 flex items-center text-sm font-medium text-blue-500">
          Read article
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="ml-1 h-4 w-4 stroke-current">
            <path d="M6.75 5.75 9.25 8l-2.5 2.25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </div>
      </div>
      <time
        className="relative z-10 order-first mt-1 mb-3 hidden items-center text-sm text-zinc-400 dark:text-zinc-500 md:block"
        dateTime="2022-09-05"
      >
        {article.date}
      </time>
    </article>
  );
}

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllArticles()).map(({ component, ...meta }) => meta),
    },
  };
}
