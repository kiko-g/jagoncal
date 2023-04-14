import clsx from 'clsx'

type Props = {
  children: React.ReactNode
  className?: string
}

export function Prose({ children, className }: Props) {
  return (
    <div
      className={clsx(className, 'article prose max-w-3xl dark:prose-invert')}
    >
      {children}
    </div>
  )
}
