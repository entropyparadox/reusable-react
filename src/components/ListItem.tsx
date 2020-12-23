import React, { ButtonHTMLAttributes, FC } from 'react';
import { useHistory } from 'react-router-dom';

interface ListItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  to?: string;
}

export const ListItem: FC<ListItemProps> = ({
  children,
  to,
  onClick,
  ...props
}) => {
  const history = useHistory();

  return (
    <li>
      <button
        {...props}
        className="px-5 w-full"
        onClick={to ? () => history.push(to) : onClick}
      >
        <div className="py-4 border-b border-gray-100">{children}</div>
      </button>
    </li>
  );
};
