import React, { ButtonHTMLAttributes, FC } from 'react';
import { TW, TWProperties } from '../tailwind/tw';

interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  active?: boolean;
  tw?: TWProperties;
  twActive?: TWProperties;
}

export const Chip: FC<ChipProps> = ({
  text,
  active = false,
  tw = {},
  twActive = {},
  ...props
}) => {
  const defaultTW = new TW({
    backgroundColor: 'bg-gray-100',
    borderRadius: 'rounded-full',
    color: 'text-gray-800',
    fontSize: 'text-sm',
    paddingX: 'px-4',
    paddingY: 'py-2',
    whiteSpace: 'whitespace-normal',
  }).merge(tw);

  const activeTW = new TW(defaultTW)
    .merge({
      backgroundColor: 'bg-brand-1',
      color: 'text-white',
    })
    .merge(twActive);

  return (
    <button
      className={active ? activeTW.toClassName() : defaultTW.toClassName()}
      {...props}
    >
      {text}
    </button>
  );
};
