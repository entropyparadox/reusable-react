import React, { ButtonHTMLAttributes, FC } from 'react';

interface ListItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const ListItem: FC<ListItemProps> = ({ children, ...props }) => {
  return (
    <li>
      <button className="px-5 w-full" {...props}>
        <div className="py-4 border-b border-gray-100">{children}</div>
      </button>
    </li>
  );
};
