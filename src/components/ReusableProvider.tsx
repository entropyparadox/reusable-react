import { ApolloProvider } from '@apollo/client';
import React, { FC } from 'react';
import { RecoilRoot } from 'recoil';
import { client } from '../api';

export const ReusableProvider: FC = ({ children }) => {
  return (
    <RecoilRoot>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </RecoilRoot>
  );
};
