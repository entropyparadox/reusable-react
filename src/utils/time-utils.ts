import moment from 'moment';
import 'moment/locale/ko';

// display timestamp: '2021-01-05T07:52:33.981Z'

export const utcToLocalFormat = (utc: string, format?: string) =>
  moment.utc(utc).local().format(format);

export const utcToLocalDatetime = (utc: string) =>
  moment.utc(utc).local().format('YYYY.MM.DD H:mm'); // 2021.01.05 16:52

export const utcToLocalDatetimeMeridiem = (utc: string) =>
  moment.utc(utc).local().format('YYYY.MM.DD h:mm a'); // 2021.01.05 4:52 오후

export const utcToLocalDate = (utc: string) =>
  moment.utc(utc).local().format('YYYY.MM.DD'); // 2021.01.05

export const utcToLocalTime = (utc: string) =>
  moment.utc(utc).local().format('HH:mm'); // 16:52

export const utcToLocalFromNow = (utc: string) =>
  moment.utc(utc).local().fromNow(); // 한 시간 전
