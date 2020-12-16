import { gql } from '@apollo/client';

export const SIGN_UP = gql`
  mutation SignUp($input: CreateUserInput!) {
    signup(input: $input) {
      token
    }
  }
`;

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;
