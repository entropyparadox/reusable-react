import React, { FC, HTMLAttributes } from 'react';
import { TW, TWProperties } from '../tailwind/tw';

interface HorizontalScrollViewProps extends HTMLAttributes<HTMLDivElement> {
  twInner?: TWProperties;
  twOuter?: TWProperties;
}

export const HorizontalScrollView: FC<HorizontalScrollViewProps> = ({
  children,
  twInner = {},
  twOuter = {},
  ...props
}) => {
  const innerTW = new TW({
    alignItems: 'items-center',
    display: 'flex',
    marginX: 'mx-5',
    spaceX: 'space-x-2',
  }).merge(twInner);

  const outerTW = new TW({
    overflowX: 'overflow-x-auto',
  }).merge(twOuter);

  return (
    <div
      className={outerTW.toClassName()}
      style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
      {...props}
    >
      <div className="inline-block">
        <ul className={innerTW.toClassName()}>{children}</ul>
      </div>
    </div>
  );
};
