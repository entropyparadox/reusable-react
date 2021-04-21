import React, { ButtonHTMLAttributes, FC } from 'react';
import { TW, TWProperties } from '../tailwind/tw';

interface TabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  active?: boolean;
  full?: boolean;
  twInner?: TWProperties;
  twInnerActive?: TWProperties;
  twOuter?: TWProperties;
  twOuterActive?: TWProperties;
}

export const Tab: FC<TabProps> = ({
  text,
  active = false,
  full = false,
  twInner = {},
  twOuter = {},
  twInnerActive = {},
  twOuterActive = {},
  ...props
}) => {
  const outerTW = new TW({
    alignItems: 'items-end',
    display: 'flex',
    flex: full ? 'flex-1' : undefined,
    justifyContent: 'justify-center',
    minWidth: 'min-w-max',
    paddingX: full ? undefined : 'px-2',
  }).merge(twOuter);

  const activeOuterTW = new TW(outerTW)
    .merge({
      color: 'text-brand-1',
      fontWeight: 'font-bold',
    })
    .merge(twOuterActive);

  const innerTW = new TW({
    alignItems: 'items-center',
    color: 'text-gray-500',
    display: 'flex',
    fontSize: 'text-sm',
    height: 'h-10',
    paddingX: 'px-2',
  }).merge(twInner);

  const activeInnerTW = new TW(innerTW)
    .merge({
      borderColor: 'border-brand-1',
      borderWidth: 'border-b-2',
    })
    .merge(twInnerActive);

  return (
    <button
      className={active ? activeOuterTW.toClassName() : outerTW.toClassName()}
      {...props}
    >
      <span
        className={active ? activeInnerTW.toClassName() : innerTW.toClassName()}
      >
        {text}
      </span>
    </button>
  );
};
