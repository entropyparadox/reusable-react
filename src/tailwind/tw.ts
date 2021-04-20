import {
  backgroundColor,
  borderRadius,
  fontSize,
  padding,
  textColor,
} from 'tailwindcss/defaultTheme';
import { TailwindColorGroup } from 'tailwindcss/tailwind-config';
import { KeysOfType, KnownKeys, OmitMethods } from '../utils/typescript-utils';
import { reusableTailwindPreset } from './reusable-tailwind-preset';

const reusableTheme = reusableTailwindPreset.theme.extend;

export type BackgroundColor =
  | `bg-${KeysOfType<typeof backgroundColor, string>}`
  | `bg-${KeysOfType<
      typeof backgroundColor,
      TailwindColorGroup
    >}-${KnownKeys<TailwindColorGroup>}`
  | `bg-${keyof typeof reusableTheme.colors}`;
export type BorderRadius = `rounded-${KnownKeys<typeof borderRadius>}`;
export type Color =
  | `text-${KeysOfType<typeof textColor, string>}`
  | `text-${KeysOfType<
      typeof textColor,
      TailwindColorGroup
    >}-${KnownKeys<TailwindColorGroup>}`
  | `text-${keyof typeof reusableTheme.colors}`;
export type FontSize = `text-${KnownKeys<typeof fontSize>}`;
export type PaddingBottom = `pb-${keyof typeof padding}`;
export type PaddingLeft = `pl-${keyof typeof padding}`;
export type PaddingRight = `pr-${keyof typeof padding}`;
export type PaddingTop = `pt-${keyof typeof padding}`;
export type PaddingX = `px-${keyof typeof padding}`;
export type PaddingY = `py-${keyof typeof padding}`;
export type WhiteSpace =
  | 'whitespace-normal'
  | 'whitespace-nowrap'
  | 'whitespace-pre'
  | 'whitespace-pre-line'
  | 'whitespace-pre-wrap';

export class TW {
  backgroundColor?: BackgroundColor;
  borderRadius?: BorderRadius;
  color?: Color;
  fontSize?: FontSize;
  paddingBottom?: PaddingBottom;
  paddingLeft?: PaddingLeft;
  paddingRight?: PaddingRight;
  paddingTop?: PaddingTop;
  paddingX?: PaddingX;
  paddingY?: PaddingY;
  whiteSpace?: WhiteSpace;

  constructor(...tw: Partial<TW>[]) {
    Object.assign(this, ...tw);
  }

  merge(...tw: Partial<TW>[]) {
    Object.assign(this, ...tw);
  }

  toClassName() {
    return Object.keys(this)
      .map((key) => this[key as keyof TW])
      .join(' ');
  }
}

export type TWProperties = OmitMethods<TW>;
