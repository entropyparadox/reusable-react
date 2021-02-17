import { gql } from '@apollo/client';

export const Signup = gql`
  mutation Signup($input: SignupInput!) {
    signup(input: $input) {
      token
    }
  }
`;

export const Login = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export const LoginWithKakao = gql`
  mutation LoginWithKakao($accessToken: String!) {
    loginWithKakao(accessToken: $accessToken) {
      token
      kakaoId
    }
  }
`;
