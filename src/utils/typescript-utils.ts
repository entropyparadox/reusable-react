export type KeyOfType<T, TProp> = {
  [K in keyof T]: T[K] extends TProp ? K : never;
}[keyof T];

export type KnownKeys<T> = {
  [K in keyof T]: string extends K ? never : number extends K ? never : K;
} extends { [_ in keyof T]: infer U }
  ? U
  : never;

export type NegativeAwareKeyOf<T, Prefix extends string> = keyof {
  [K in keyof T as K extends `-${string}`
    ? `-${Prefix}${K & string}`
    : `${Prefix}-${K & string}`]: string;
};
