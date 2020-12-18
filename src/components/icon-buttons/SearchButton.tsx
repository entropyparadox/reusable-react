import React, { ButtonHTMLAttributes, FC } from 'react';
import { SearchIcon } from '../icons';
import { IconButton } from '../IconButton';

interface SearchButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const SearchButton: FC<SearchButtonProps> = ({ onClick, ...props }) => {
  return (
    <IconButton
      {...props}
      icon={SearchIcon}
      to={onClick ? undefined : '/search'}
      onClick={onClick}
    />
  );
};
