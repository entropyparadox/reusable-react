import React, { ButtonHTMLAttributes, FC } from 'react';
import { ListItem } from './ListItem';

interface SimpleListItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  subText?: string;
  to?: string;
}

export const SimpleListItem: FC<SimpleListItemProps> = ({
  text,
  subText,
  to,
  ...props
}) => {
  return (
    <ListItem to={to} {...props}>
      <div className="flex justify-between items-center space-x-3">
        <span className="truncate font-semibold text-lsm text-gray-800">
          {text}
        </span>
        {subText && <span className="text-xs text-gray-500">{subText}</span>}
      </div>
    </ListItem>
  );
};
