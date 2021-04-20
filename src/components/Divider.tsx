import React, { FC, HTMLAttributes } from 'react';
import { TW, TWProperties } from '../tailwind/tw';

interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  tw?: TWProperties;
}

export const Divider: FC<DividerProps> = ({ tw = {}, ...props }) => {
  const defaultTW = new TW({
    backgroundColor: 'bg-gray-100',
    borderWidth: 'border-0',
    height: 'h-px',
  }).merge(tw);

  return <hr className={defaultTW.toClassName()} {...props} />;
};
