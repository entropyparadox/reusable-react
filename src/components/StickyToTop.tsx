import React, { FC, HTMLAttributes } from 'react';
import { TW, TWProperties } from '../tailwind/tw';

interface StickyToTopProps extends HTMLAttributes<HTMLDivElement> {
  tw?: TWProperties;
}

export const StickyToTop: FC<StickyToTopProps> = ({
  children,
  tw = {},
  ...props
}) => {
  const defaultTW = new TW({
    backgroundColor: 'bg-white',
    position: 'sticky',
    top: 'top-fixed-top',
    zIndex: 'z-50',
  }).merge(tw);

  return (
    <div className={defaultTW.toClassName()} {...props}>
      {children}
    </div>
  );
};
