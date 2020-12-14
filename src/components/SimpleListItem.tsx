import React, { ButtonHTMLAttributes, FC } from 'react';
import { ListItem } from './ListItem';

interface SimpleListItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  subText?: string;
}

export const SimpleListItem: FC<SimpleListItemProps> = ({
  text,
  subText,
  ...props
}) => {
  return (
    <ListItem {...props}>
      <div className="flex justify-between items-center">
        <span className="font-semibold text-lsm text-gray-800">{text}</span>
        {subText && <span className="text-xs text-gray-500">{subText}</span>}
      </div>
    </ListItem>
  );
};
