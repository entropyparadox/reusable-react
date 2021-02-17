import { useMutation } from '@apollo/client';
import queryString from 'query-string';
import { useLocation, useParams } from 'react-router';
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import { Login, LoginWithKakao, Signup } from '../api';
import { kakaoIdState, tokenState } from '../store';

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

export const useSignup = (input: any) => {
  const setToken = useSetRecoilState(tokenState);
  const [signup] = useMutation(Signup, {
    variables: { input },
    onCompleted: ({ signup: { token } }) => {
      setToken(token);
    },
    onError: (error) => console.error(error),
  });

  return signup;
};

export const useLogin = (email: string, password: string) => {
  const setToken = useSetRecoilState(tokenState);
  const [login] = useMutation(Login, {
    variables: { email, password },
    onCompleted: ({ login: { token } }) => {
      setToken(token);
    },
    onError: (error) => console.error(error),
  });

  return login;
};

export const useLoginWithKakao = () => {
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
    onError: (error) => console.error(error),
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
