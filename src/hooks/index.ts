import queryString from 'query-string';
import { useLocation, useParams } from 'react-router';
import { useRecoilValue } from 'recoil';
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
