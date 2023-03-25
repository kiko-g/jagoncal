import { EnvelopeIcon } from '@heroicons/react/24/outline';

export const links = [
  {
    name: 'GitHub',
    text: 'Follow on GitHub',
    url: 'https://github.com/jagoncal',
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
        ></path>
      </svg>
    ),
  },
  {
    name: 'Linkedin',
    text: 'Follow on LinkedIn',
    url: 'https:/www.linkedin.com/in/jose-alberto-gonçalves-55aba917/',
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
      >
        <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path>
      </svg>
    ),
  },
  {
    name: 'Orcid',
    text: 'Follow on Orcid',
    url: 'https://orcid.org/0000-0001-9212-4649',
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 256 256"
        className="h-6 w-6 fill-zinc-500 p-[1px] transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
      >
        <path d="M256 128c0 70.7-57.3 128-128 128S0 198.7 0 128 57.3 0 128 0s128 57.3 128 128z" />
        <path
          className="fill-white dark:fill-[#18181b]"
          d="M86.3 186.2H70.9V79.1h15.4v107.1zM108.9 79.1h41.6c39.6 0 57 28.3 57 53.6 0 27.5-21.5 53.6-56.8 53.6h-41.8V79.1zm15.4 93.3h24.5c34.9 0 42.9-26.5 42.9-39.7C191.7 111.2 178 93 148 93h-23.7v79.4zM88.7 56.8c0 5.5-4.5 10.1-10.1 10.1s-10.1-4.6-10.1-10.1c0-5.6 4.5-10.1 10.1-10.1s10.1 4.6 10.1 10.1z"
        />
      </svg>
    ),
  },
  {
    name: 'Authenticus',
    text: 'Follow my publications on Authenticus',
    url: 'https://www.authenticus.pt/R-000-7YH',
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 48 48"
        className="h-6 w-6 rounded fill-zinc-500 p-[1px] transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
      >
        <path d="M15.5 2.8C6.5 7 1.6 14.4 1.5 24c0 5.7.4 7.1 3.3 11.5 6.4 9.9 18.4 13.5 28.5 8.6 5.5-2.6 5.7-2.6 5.7.4 0 2.2.4 2.5 4 2.5h4V34.7c0-13.3-.9-18.1-4.6-23.6-5.6-8.5-18.2-12.4-26.9-8.3zm17 8.6c6.8 5.3 8.4 13.7 3.6 20.3-4.9 6.8-12 8.9-18.8 5.7-10.4-5-11.3-20.1-1.7-26.5 4.4-2.9 12.8-2.6 16.9.5z" />
      </svg>
    ),
  },
  {
    name: 'FCUP',
    text: 'Visit my page in University of Porto',
    url: 'https://sigarra.up.pt/fcup/pt/func_geral.formview?p_codigo=236853',
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 160 160"
        className="h-6 w-6 rounded fill-zinc-500 p-[2px] transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
      >
        <path d="M0 80v80h160V0H0v80zm143-69.7c3 1.6 5.1 3.7 6.7 6.7l2.3 4.3v117.4l-2.3 4.3c-1.6 3-3.7 5.1-6.7 6.7-4.3 2.3-5 2.3-26.9 2.1l-22.6-.3-.3-70.5c-.1-38.8 0-71.1.3-71.8.3-.9 5.8-1.2 22.8-1.2 21.4 0 22.6.1 26.7 2.3zM45 60c0 .5-1.1 1-2.5 1-1.5 0-2.9.8-3.6 2.1-1.5 2.9-.8 34.6.9 37.6 1.9 3.4 7.9 4.9 12.4 3 6.4-2.7 7.2-5 7.6-22.1.4-17.1-.3-20.6-4.3-20.6-1.4 0-2.5-.5-2.5-1 0-.6 3.3-1 8-1s8 .4 8 1c0 .5-.8 1-1.9 1-1 0-2.3.6-2.9 1.2-.5.7-1.2 8.7-1.4 17.8-.3 14.3-.6 17-2.3 20-4.3 7.5-16.6 10.3-25.5 5.7-7.2-3.6-8-6.2-8-25.8 0-17.1-.4-18.9-4.2-18.9-1 0-1.8-.5-1.8-1 0-.6 4.7-1 12-1s12 .4 12 1zm38.7 38.2c2.1 2.7 2.1 4.7.2 7.2-2.3 3-5.4 3.3-8.1.9-2-1.8-2.4-6.3-.6-8.1 1.6-1.6 7.3-1.5 8.5 0z" />
        <path d="M103.8 60.5 107 62v42.1l-3.2 1.4c-3.1 1.3-2.4 1.4 9.2 1.4 8.7-.1 11.6-.3 9.6-.9-1.6-.5-3.3-1.5-3.7-2.2-.5-.7-.9-5.2-.9-10.1V85h5.3c6 0 12.7-2.7 15.1-6.1 2-2.9 2.1-9.1.1-12.8-2.6-5.1-7.3-6.4-23.5-6.8-13.5-.3-14.3-.2-11.2 1.2zM126 64c2.5 2.5 3.4 6.1 2.7 10.7-.8 4.5-3.4 7.3-7.3 7.6l-2.9.2-.3-10.3-.3-10.2h3.1c1.7 0 3.9.9 5 2z" />
      </svg>
    ),
  },

  {
    name: 'Email',
    text: 'jagoncal@fc.up.pt',
    url: 'mailto:jagoncal@fc.up.pt',
    icon: (
      <EnvelopeIcon className="h-6 w-6 text-zinc-500 transition group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-300" />
    ),
  },
];
