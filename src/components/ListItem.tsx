import React, { ButtonHTMLAttributes, FC } from 'react';

interface ListItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const ListItem: FC<ListItemProps> = ({ children, ...props }) => {
  return (
    <li>
      <button {...props} className="px-5 w-full">
        <div className="py-4 border-b border-gray-100">{children}</div>
      </button>
    </li>
  );
};
