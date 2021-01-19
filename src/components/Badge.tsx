import React, { FC } from 'react';

interface BadgeProps {
  size?: 'basic' | 'large';
  text?: string;
  removeButton?: boolean;
  backgroundColor?:
    | 'bg-gray-100'
    | 'bg-red-100'
    | 'bg-yellow-100'
    | 'bg-green-100'
    | 'bg-blue-100'
    | 'bg-indigo-100'
    | 'bg-purple-100'
    | 'bg-pink-100'
    | string;
  textColor?:
    | 'text-white'
    | 'text-gray-800'
    | 'text-red-800'
    | 'text-yellow-800'
    | 'text-green-800'
    | 'text-blue-800'
    | 'text-indigo-800'
    | 'text-purple-800'
    | 'text-pink-800'
    | string;
}

export const Badge: FC<BadgeProps> = ({
  children,
  size = 'basic',
  text,
  removeButton = false,
  backgroundColor = 'bg-gray-100',
  textColor = 'text-gray-800',
}) => {
  let badgeSize = 'px-2.5 py-0.5 text-xs';
  if (size === 'large') {
    badgeSize = 'px-3 py-0.5 text-sm';
  }
  return (
    <span
      className={`inline-flex items-center ${badgeSize} rounded-full font-medium ${backgroundColor} ${textColor} ${backgroundColor}`}
    >
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
