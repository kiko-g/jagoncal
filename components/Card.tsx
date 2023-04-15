import Link from 'next/link'
import clsx from 'clsx'

function ChevronRightIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.75 5.75 9.25 8l-2.5 2.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

type CardProps = {
  as?: React.ElementType
  className?: string
} & React.ComponentPropsWithoutRef<'div'>

export function Card({
  as: Component = 'div',
  className,
  children,
}: CardProps) {
  return (
    <Component
      className={clsx(className, 'group relative flex flex-col items-start')}
    >
      {children}
    </Component>
  )
}

type LinkProps = {
  href: string
  children?: React.ReactNode
} & React.ComponentPropsWithoutRef<'a'>

Card.Link = function CardLink({ children, href, ...props }: LinkProps) {
  return (
    <>
      <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
      <Link href={href} {...props}>
        <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
        <span className="relative z-10">{children}</span>
      </Link>
    </>
  )
}

type TitleProps = {
  as?: React.ElementType
  href?: string
  children?: React.ReactNode
} & React.ComponentPropsWithoutRef<'h2'>

Card.Title = function CardTitle({
  as: Component = 'h2',
  href,
  children,
}: TitleProps) {
  return (
    <Component className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
      {href ? <Card.Link href={href}>{children}</Card.Link> : children}
    </Component>
  )
}

type DescriptionProps = {
  children?: React.ReactNode
} & React.ComponentPropsWithoutRef<'p'>

Card.Description = function CardDescription({ children }: DescriptionProps) {
  return (
    <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
      {children}
    </p>
  )
}

type CTAProps = {
  children?: React.ReactNode
} & React.ComponentPropsWithoutRef<'div'>

Card.Cta = function CardCta({ children }: CTAProps) {
  return (
    <div
      aria-hidden="true"
      className="relative z-10 mt-4 flex items-center text-sm font-medium text-blue-500"
    >
      {children}
      <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
    </div>
  )
}

type EyebrowProps = {
  as?: React.ElementType
  decorate?: boolean
  children?: React.ReactNode
} & React.ComponentPropsWithoutRef<'p'>

Card.Eyebrow = function CardEyebrow({
  as: Component = 'p',
  decorate = false,
  className = '',
  children,
  ...props
}: EyebrowProps) {
  return (
    <Component
      className={clsx(
        className,
        'relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500',
        decorate && 'pl-3.5'
      )}
      {...props}
    >
      {decorate && (
        <span
          className="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
        </span>
      )}
      {children}
    </Component>
  )
}
