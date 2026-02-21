'use client'

import { motion } from 'framer-motion'
import { cn } from '@/components/utils/cn'
import { ComponentProps, ReactNode } from 'react'

interface ButtonProps extends ComponentProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  className?: string
  href?: string
}

/**
 * Button component with variants for different CTAs.
 * Primary: cyan background, white text
 * Secondary: soft gold background
 * Outline: transparent with cyan/gold border
 */
export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  href,
  type = 'button',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300'

  const variants = {
    primary:
      'bg-accent text-primary hover:bg-accent/90 hover:shadow-[0_0_24px_rgba(34,211,238,0.25)]',
    secondary:
      'bg-accent text-primary hover:bg-accent/90 hover:shadow-[0_0_24px_rgba(34,211,238,0.25)]',
    outline:
      'bg-transparent border border-accent/50 text-accent hover:bg-accent/10 hover:border-accent',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const buttonContent = (
    <motion.button
      type={type}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...(props as any)}
    >
      {children}
    </motion.button>
  )

  if (href) {
    return (
      <a href={href} className="inline-block">
        {buttonContent}
      </a>
    )
  }

  return buttonContent
}
