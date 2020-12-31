import { ApolloClient, ApolloLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/link-error';
import { createUploadLink } from 'apollo-upload-client';
import fetch from 'cross-fetch';
import { inMemoryCache } from './cache';

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors?.some((error) => error.message === 'Unauthorized')) {
    localStorage.clear();
    window.location.reload();
  }
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : '',
    },
  };
});
const httpLink = createUploadLink({
  uri: 'http://localhost:8000/graphql',
  fetch,
});

export const client = new ApolloClient({
  link: ApolloLink.from([errorLink, authLink, httpLink]),
  cache: inMemoryCache,
});
