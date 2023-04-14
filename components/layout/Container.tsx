import React, {
  forwardRef,
  ForwardRefRenderFunction,
  ReactNode,
  HTMLAttributes,
} from 'react'
import clsx from 'clsx'

interface OuterContainerProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children?: ReactNode
}

const OuterContainer: ForwardRefRenderFunction<
  HTMLDivElement,
  OuterContainerProps
> = ({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} className={clsx('sm:px-8', className)} {...props}>
      <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
    </div>
  )
}

interface InnerContainerProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children?: ReactNode
}

const InnerContainer: ForwardRefRenderFunction<
  HTMLDivElement,
  InnerContainerProps
> = ({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={clsx('relative px-4 sm:px-8 lg:px-12', className)}
      {...props}
    >
      <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
    </div>
  )
}

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
}

const Container: ForwardRefRenderFunction<HTMLDivElement, ContainerProps> & {
  Outer: typeof OuterContainer
  Inner: typeof InnerContainer
} = ({ children, ...props }, ref) => {
  return (
    // @ts-ignore
    <OuterContainer ref={ref} {...props}>
      <InnerContainer>{children}</InnerContainer>
    </OuterContainer>
  )
}

Container.Outer = OuterContainer
Container.Inner = InnerContainer

export { Container }
