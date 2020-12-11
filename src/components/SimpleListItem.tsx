import React, { FC } from 'react';
import { ListItem } from './ListItem';

interface SimpleListItemProps {
  text: string;
  subText?: string;
  onClick?: () => void;
}

export const SimpleListItem: FC<SimpleListItemProps> = ({
  text,
  onClick,
  subText,
}) => {
  return (
    <ListItem onClick={onClick}>
      <div className="flex justify-between items-center">
        <span className="font-semibold text-lsm text-gray-800">{text}</span>
        {subText && <span className="text-xs text-gray-500">{subText}</span>}
      </div>
    </ListItem>
  );
};
