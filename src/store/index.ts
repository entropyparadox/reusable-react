import { atom, AtomEffect } from 'recoil';

const localStorageEffect = (key: string): AtomEffect<string | null> => ({
  setSelf,
  onSet,
}) => {
  setSelf(localStorage.getItem(key));
  onSet((newValue) => {
    if (typeof newValue === 'string') {
      localStorage.setItem(key, newValue);
    } else {
      localStorage.removeItem(key);
    }
  });
};

export const tokenState = atom<string | null>({
  key: 'tokenState',
  default: null,
  effects_UNSTABLE: [localStorageEffect('token')],
});

export const kakaoIdState = atom<number | null>({
  key: 'kakaoIdState',
  default: null,
});

export const appleIdState = atom<string | null>({
  key: 'appleIdState',
  default: null,
});

interface AlertState {
  open: boolean;
  severity: 'error' | 'warning' | 'info' | 'success';
  text: string;
}

export const alertState = atom<AlertState>({
  key: 'alertState',
  default: { open: false, severity: 'success', text: '' },
});
