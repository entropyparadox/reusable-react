import { ApolloError, useMutation } from '@apollo/client';
import queryString from 'query-string';
import { useLocation, useParams } from 'react-router';
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import { Login, LoginWithKakao, Signup } from '../api';
import { alertState, kakaoIdState, tokenState } from '../store';

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

export const useSignup = (
  input: any,
  onError?: (error: ApolloError) => void,
) => {
  const setToken = useSetRecoilState(tokenState);
  const [signup] = useMutation(Signup, {
    variables: { input },
    onCompleted: ({ signup: { token } }) => {
      setToken(token);
    },
    onError,
  });

  return signup;
};

export const useLogin = (
  email: string,
  password: string,
  onError?: (error: ApolloError) => void,
) => {
  const setToken = useSetRecoilState(tokenState);
  const [login] = useMutation(Login, {
    variables: { email, password },
    onCompleted: ({ login: { token } }) => {
      setToken(token);
    },
    onError,
  });

  return login;
};

export const useLoginWithKakao = (onError?: (error: ApolloError) => void) => {
  const setToken = useSetRecoilState(tokenState);
  const setKakaoId = useSetRecoilState(kakaoIdState);
  const [loginWithKakao] = useMutation(LoginWithKakao, {
    onCompleted: ({ loginWithKakao: { token, kakaoId } }) => {
      if (token) {
        setToken(token);
      } else {
        setKakaoId(kakaoId);
      }
    },
    onError,
  });

  return () =>
    // @ts-ignore
    Kakao.Auth.login({
      success: (response: any) => {
        loginWithKakao({
          variables: { accessToken: response.access_token },
        });
      },
    });
};

export const useLogout = () => {
  const resetToken = useResetRecoilState(tokenState);
  const resetKakaoId = useResetRecoilState(kakaoIdState);
  return () => {
    resetToken();
    resetKakaoId();
  };
};

export const useShowAlert = () => {
  const setAlert = useSetRecoilState(alertState);
  return (severity: 'error' | 'warning' | 'info' | 'success', text: string) => {
    setAlert({ open: true, severity, text });
  };
};
