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
