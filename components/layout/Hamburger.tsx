import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';

type Props = {
  openStateHook: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
};

export default function Hamburger({ openStateHook }: Props) {
  const [open, setOpen] = openStateHook;

  return (
    <button
      onClick={() => setOpen(!open)}
      className="group flex rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20 md:hidden"
    >
      <Bars3Icon className="h-6 w-6 fill-cyan-500 stroke-cyan-500 transition group-hover:fill-zinc-600 group-hover:stroke-cyan-600" />
    </button>
  );
}
