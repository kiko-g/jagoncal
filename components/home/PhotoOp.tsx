import Image from 'next/image';
import React from 'react';

type Props = {};

export default function PhotoOp({}: Props) {
  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-6 overflow-hidden py-4 sm:gap-12">
        <div className="relative aspect-[9/10] w-44 flex-none -rotate-2 overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl">
          <Image
            alt=""
            sizes="(min-width: 640px) 18rem, 11rem"
            decoding="async"
            src="https://images.unsplash.com/photo-1471922694854-ff1b63b20054"
            data-nimg="1"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            width={3936}
            height={2624}
          />
        </div>
        <div className="relative aspect-[9/10] w-44 flex-none rotate-2 overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl">
          <Image
            alt=""
            sizes="(min-width: 640px) 18rem, 11rem"
            src="https://images.unsplash.com/photo-1471922694854-ff1b63b20054"
            decoding="async"
            data-nimg="1"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            width={5760}
            height={3840}
          />
        </div>
        <div className="relative aspect-[9/10] w-44 flex-none -rotate-3 overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl">
          <Image
            alt=""
            sizes="(min-width: 640px) 18rem, 11rem"
            src="https://images.unsplash.com/photo-1471922694854-ff1b63b20054"
            decoding="async"
            data-nimg="1"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            width={2400}
            height={3000}
          />
        </div>
      </div>
    </div>
  );
}
