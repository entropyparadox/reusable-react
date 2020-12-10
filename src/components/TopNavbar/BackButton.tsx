import React from 'react';
import { useHistory } from 'react-router-dom';
import { ReactComponent as BackIcon } from '../../assets/images/icon-top-navbar-back.svg';
import { TopNavbarButton } from './TopNavbarButton';

export const BackButton = () => {
  const history = useHistory();

  return <TopNavbarButton icon={BackIcon} onClick={() => history.goBack()} />;
};
