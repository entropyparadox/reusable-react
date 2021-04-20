import React, { FC, HTMLAttributes } from 'react';
import { TW, TWProperties } from '../tailwind/tw';

interface BottomFixedViewProps extends HTMLAttributes<HTMLDivElement> {
  tw?: TWProperties;
}

export const BottomFixedView: FC<BottomFixedViewProps> = ({
  children,
  tw = {},
  ...props
}) => {
  const defaultTW = new TW({
    backgroundColor: 'bg-white',
    bottom: 'bottom-0',
    maxWidth: 'max-w-inherit',
    position: 'fixed',
    width: 'w-full',
  }).merge(tw);

  return (
    <div className={defaultTW.toClassName()} {...props}>
      {children}
    </div>
  );
};
