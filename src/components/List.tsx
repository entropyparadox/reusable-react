import React, { FC, HTMLAttributes } from 'react';
import { TW, TWProperties } from '../tailwind/tw';

interface ListProps extends HTMLAttributes<HTMLUListElement> {
  tw?: TWProperties;
}

export const List: FC<ListProps> = ({ children, tw = {}, ...props }) => {
  const defaultTW = new TW({
    display: 'flex',
    flexDirection: 'flex-col',
  }).merge(tw);

  return (
    <ul className={defaultTW.toClassName()} {...props}>
      {children}
    </ul>
  );
};
