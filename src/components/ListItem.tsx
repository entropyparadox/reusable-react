import React, { FC } from 'react';

interface ListItemProps {
  onClick?: () => void;
}

export const ListItem: FC<ListItemProps> = ({ children, onClick }) => {
  return (
    <li>
      <button className="px-5 w-full" onClick={onClick}>
        <div className="py-4 border-b border-gray-100">{children}</div>
      </button>
    </li>
  );
};
