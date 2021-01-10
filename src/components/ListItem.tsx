import React, { ButtonHTMLAttributes, FC } from 'react';
import { useHistory } from 'react-router-dom';

interface ListItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  to?: string;
  fullBorder?: boolean;
}

export const ListItem: FC<ListItemProps> = ({
  children,
  to,
  fullBorder = false,
  onClick,
  ...props
}) => {
  const history = useHistory();
  const borderOuter = fullBorder ? 'border-b' : 'border-0';
  const borderInner = fullBorder ? 'border-0' : 'border-b';

  return (
    <li className={`bg-white ${borderOuter}`}>
      <button
        {...props}
        className="px-5 w-full"
        onClick={to ? () => history.push(to) : onClick}
      >
        <div className={`py-4 ${borderInner}`}>{children}</div>
      </button>
    </li>
  );
};
