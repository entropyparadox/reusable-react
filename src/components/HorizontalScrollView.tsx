import React, { FC, HTMLAttributes } from 'react';
import { TW, TWProperties } from '../tailwind/tw';

interface HorizontalScrollViewProps extends HTMLAttributes<HTMLDivElement> {
  tw?: TWProperties;
}

export const HorizontalScrollView: FC<HorizontalScrollViewProps> = ({
  children,
  tw = {},
  ...props
}) => {
  const defaultTW = new TW({
    overflowX: 'overflow-x-auto',
  }).merge(tw);

  return (
    <div
      className={defaultTW.toClassName()}
      style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
      {...props}
    >
      <div className="inline-block">
        <ul className="flex items-center space-x-2 mx-5">{children}</ul>
      </div>
    </div>
  );
};
