import React, { ButtonHTMLAttributes, FC } from 'react';
import { TW, TWProperties } from '../tailwind/tw';
import { Color } from '../types/color';

interface BoxTabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  subText?: string;
  active?: boolean;
  tw?: TWProperties;
  twActive?: TWProperties;
  twText?: TWProperties;
  twSubText?: TWProperties;
}

export const BoxTab: FC<BoxTabProps> = ({
  text,
  subText,
  active = false,
  tw = {},
  twActive = {},
  twText = {},
  twSubText = {},
  ...props
}) => {
  const defaultTW = new TW({
    alignItems: 'items-center',
    backgroundColor: 'bg-gray-100',
    color: 'text-gray-600',
    display: 'flex',
    flex: 'flex-1',
    flexDirection: 'flex-col',
    height: 'h-full',
    justifyContent: 'justify-center',
  }).merge(tw);

  const activeTW = new TW(defaultTW)
    .merge({
      backgroundColor: 'bg-brand-1',
      color: 'text-white',
    })
    .merge(twActive);

  const textTW = new TW({
    fontSize: 'text-sm',
    fontWeight: 'font-bold',
  }).merge(twText);

  const subTextTW = new TW({
    fontSize: 'text-xs',
  }).merge(twSubText);

  return (
    <button
      className={active ? activeTW.toClassName() : defaultTW.toClassName()}
      {...props}
    >
      <div className={textTW.toClassName()}>{text}</div>
      {subText && <div className={subTextTW.toClassName()}>{subText}</div>}
    </button>
  );
};
