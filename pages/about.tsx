import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import { links } from '../utils/data';
import { Layout } from '../components/layout';

type Props = {};

export default function About({}: Props) {
  return (
    <Layout location="About">
      <div className="relative mt-16 px-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl lg:max-w-5xl">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
            <div className="lg:pl-20">
              <div className="max-w-xs px-2.5 lg:max-w-none">
                <Image
                  alt="profile"
                  sizes="(min-width: 1024px) 32rem, 20rem"
                  src="/avatar.jpg"
                  decoding="async"
                  data-nimg="1"
                  className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                  loading="lazy"
                  width={800}
                  height={800}
                />
              </div>
            </div>
            <div className="lg:order-first lg:row-span-2">
              <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                I&apos;m José Gonçalves. I live in Porto, where I do most of my work.
              </h1>
              <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam finibus malesuada nibh, eget molestie
                  elit feugiat sit amet. Vestibulum porta gravida mauris id pellentesque. Sed vitae est lacinia,
                  tincidunt metus sit amet, molestie est. Nulla porttitor, augue id dignissim commodo, nunc lectus
                  tempus arcu, ac egestas nisi justo id lectus. Cras iaculis enim quis orci iaculis, eu pharetra ante
                  cursus.
                </p>
                <p>
                  Quisque vulputate est id magna feugiat congue. Proin eget orci eu leo tincidunt viverra id in leo. Sed
                  sed lectus at dolor sagittis convallis. Maecenas nisi mauris, tempus non pulvinar ut, cursus non
                  justo. Nunc tincidunt, eros quis placerat pretium, purus neque egestas libero, eu ultrices felis diam
                  eu turpis. Fusce vestibulum quis enim quis dictum. Sed gravida pharetra rhoncus. Sed dignissim eget
                  nisl eu ultricies. Donec ornare elit a pulvinar malesuada. Ut id egestas magna. Praesent tincidunt
                  nibh vitae hendrerit luctus.
                </p>
                <p>
                  Praesent egestas magna vitae arcu efficitur auctor. Quisque non pharetra tellus. Cras egestas varius
                  magna, et porttitor felis dictum eu. Proin vehicula tristique elit, non sagittis tortor aliquet sit
                  amet. Donec pharetra pellentesque dui in facilisis. Aenean porttitor eros nibh, at commodo neque
                  mollis imperdiet. In tempus ultricies odio, eget interdum felis euismod sollicitudin.
                </p>
                <p>
                  Sed aliquet aliquet nibh et iaculis. Cras nulla augue, commodo a auctor in, fermentum ut lectus.
                  Praesent nec ligula quis urna feugiat consequat eu ac enim. Quisque tristique arcu ac interdum
                  feugiat. Suspendisse pellentesque risus id sapien condimentum rhoncus. Etiam tristique lorem quis
                  justo semper, eget vulputate purus semper.
                </p>
              </div>
            </div>

            {/* Links */}
            <div className="lg:pl-20">
              <ul role="list" className="flex flex-col gap-y-4">
                {links.map((link, linkIdx) => (
                  <li
                    key={link.name}
                    className={classNames(
                      'flex',
                      linkIdx === links.length - 1 ? 'mt-4 border-t border-zinc-100 pt-8 dark:border-zinc-700/40' : ''
                    )}
                  >
                    <Link
                      className="group flex text-sm font-medium text-zinc-800 transition hover:text-cyan-500 dark:text-zinc-200 dark:hover:text-cyan-500"
                      href={link.url}
                    >
                      {link.icon}
                      <span className="ml-4">{link.text}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Details */}
              <ul className="mt-8 flex flex-col gap-y-1 border-t border-zinc-100 pt-8 text-sm font-normal tracking-tight text-zinc-400 dark:border-zinc-700/40 dark:text-zinc-500">
                <li>Faculty of Science of the University of Porto (FCUP)</li>
                <li>Rua do Campo Alegre, 687, 4169-007 Porto, Portugal</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
