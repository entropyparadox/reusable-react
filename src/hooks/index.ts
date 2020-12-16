import { useMutation } from '@apollo/client';
import queryString from 'query-string';
import { useLocation, useParams } from 'react-router';
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import { LOGIN, SIGN_UP } from '../api';
import { tokenState } from '../store';

export const useIdParam = () => {
  const params = useParams<{ id: string }>();
  const id = Number(params.id);
  return isNaN(id) ? undefined : id;
};

export const useQueryParams = () => {
  const { search } = useLocation();
  return queryString.parse(search, {
    arrayFormat: 'comma',
    parseBooleans: true,
    parseNumbers: true,
  });
};

export const useAuth = () => {
  const token = useRecoilValue(tokenState);
  return { authenticated: token !== null };
};

export const useSignUp = (input: any) => {
  const setToken = useSetRecoilState(tokenState);
  const [signUp] = useMutation(SIGN_UP, {
    variables: { input },
    onCompleted: ({ signup: { token } }) => {
      setToken(token);
    },
    onError: (error) => console.error(error),
  });

  return signUp;
};

export const useLogin = (email: string, password: string) => {
  const setToken = useSetRecoilState(tokenState);
  const [login] = useMutation(LOGIN, {
    variables: { email, password },
    onCompleted: ({ login: { token } }) => {
      setToken(token);
    },
    onError: (error) => console.error(error),
  });

  return login;
};

export const useLogout = () => {
  return useResetRecoilState(tokenState);
};
