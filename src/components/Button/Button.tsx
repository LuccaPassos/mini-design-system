import * as React from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
}

const classesByVariant: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-400',
  secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-300',
  ghost: 'bg-transparent text-gray-900 hover:bg-gray-100 focus:ring-gray-200',
}

const classesBySize: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-5 py-2.5 text-lg',
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled,
  children,
  className = '',
  ...rest
}) => {
  const isDisabled = disabled || loading

  const spinner = (
    <svg
      aria-hidden="true"
      className="animate-spin h-4 w-4 mr-2 inline-block"
      viewBox="0 0 24 24"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
        fill="none"
        opacity="0.25"
      />
      <path d="M4 12a8 8 0 018-8" fill="currentColor" />
    </svg>
  )

  return (
    <button
      type="button"
      className={[
        'inline-flex items-center rounded-lg focus:outline-none focus:ring-2 transition',
        classesByVariant[variant],
        classesBySize[size],
        isDisabled ? 'opacity-60 cursor-not-allowed' : '',
        className,
      ].join(' ')}
      aria-busy={loading || undefined}
      disabled={isDisabled}
      {...rest}
    >
      {loading ? spinner : null}
      {children}
    </button>
  )
}
