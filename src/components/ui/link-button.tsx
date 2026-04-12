import { Link, type LinkProps } from 'react-router-dom'
import { type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

type LinkButtonProps = LinkProps & VariantProps<typeof buttonVariants> & {
  className?: string
  children?: React.ReactNode
}

export function LinkButton({ to, className, variant, size, children, ...props }: LinkButtonProps) {
  return (
    <Link
      to={to}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </Link>
  )
}

type AnchorButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof buttonVariants> & {
    className?: string
    children?: React.ReactNode
  }

export function AnchorButton({ href, className, variant, size, children, ...props }: AnchorButtonProps) {
  return (
    <a
      href={href}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </a>
  )
}
