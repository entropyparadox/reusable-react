import React, { ButtonHTMLAttributes, FC } from 'react';
import { useHistory } from 'react-router-dom';
import { ReactComponent as SearchIcon } from '../../assets/images/icon-top-navbar-search.svg';
import { TopNavbarButton } from './TopNavbarButton';

interface SearchButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const SearchButton: FC<SearchButtonProps> = ({ onClick, ...props }) => {
  const history = useHistory();

  return (
    <TopNavbarButton
      {...props}
      icon={SearchIcon}
      onClick={onClick ?? (() => history.push('/search'))}
    />
  );
};
