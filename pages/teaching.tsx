import React from 'react';
import { Layout } from '../components/layout';

type Props = {};

export default function Teaching({}: Props) {
  return (
    <Layout location="Teaching">
      <div className="relative mt-16 px-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl lg:max-w-5xl">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Cras vestibulum in orci vel volutpat.
            </h1>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              Ut quis urna commodo, dictum nisl at, ultrices felis. Nulla auctor neque augue, id finibus enim
              pellentesque eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos.
            </p>
          </div>

          <div className="mt-16 sm:mt-20"></div>
        </div>
      </div>
    </Layout>
  );
}
