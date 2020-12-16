import { ApolloClient, ApolloLink, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import fetch from 'cross-fetch';
import { inMemoryCache } from './cache';

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const httpLink = createHttpLink({
  uri: 'http://localhost:8000/graphql',
  fetch,
});

export const client = new ApolloClient({
  link: ApolloLink.from([authLink, httpLink]),
  cache: inMemoryCache,
});
