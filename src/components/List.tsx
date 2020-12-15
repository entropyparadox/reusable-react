import React, { FC, HTMLAttributes } from 'react';

interface ListProps extends HTMLAttributes<HTMLUListElement> {}

export const List: FC<ListProps> = ({ children, ...props }) => {
  return (
    <ul className="flex flex-col" {...props}>
      {children}
    </ul>
  );
};
