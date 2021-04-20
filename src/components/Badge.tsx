import React, { FC, HTMLAttributes } from 'react';
import { TW, TWProperties } from '../tailwind/tw';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  text?: string;
  removeButton?: boolean;
  tw?: TWProperties;
}

export const Badge: FC<BadgeProps> = ({
  children,
  text,
  removeButton = false,
  tw = {},
  ...props
}) => {
  const defaultTW = new TW({
    alignItems: 'items-center',
    backgroundColor: 'bg-gray-100',
    borderRadius: 'rounded-full',
    color: 'text-gray-800',
    display: 'inline-flex',
    fontSize: 'text-xs',
    fontWeight: 'font-medium',
    paddingX: 'px-2.5',
    paddingY: 'py-0.5',
  }).merge(tw);

  return (
    <span className={defaultTW.toClassName()} {...props}>
      {text ?? children}
      {removeButton ? (
        <svg
          className="h-2 w-2"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 8 8"
        >
          <path
            stroke-linecap="round"
            stroke-width="1.5"
            d="M1 1l6 6m0-6L1 7"
          />
        </svg>
      ) : (
        ''
      )}
    </span>
  );
};
