import {
  backgroundColor,
  backgroundPosition,
  backgroundSize,
  borderRadius,
  borderWidth,
  fill,
  flex,
  fontSize,
  fontWeight,
  height,
  inset,
  margin,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  outline,
  padding,
  space,
  textColor,
  width,
  zIndex,
} from 'tailwindcss/defaultTheme';
import { TailwindColorGroup } from 'tailwindcss/tailwind-config';
import {
  KeyOfType,
  KnownKeys,
  NegativeAwareKeyOf,
} from '../utils/typescript-utils';
import { reusableTailwindPreset } from './reusable-tailwind-preset';

const reusableTheme = reusableTailwindPreset.theme.extend;
type blrt = 'b' | 'l' | 'r' | 't';
type overflow = 'auto' | 'hidden' | 'visible' | 'scroll';

export type AlignItems =
  | 'items-start'
  | 'items-end'
  | 'items-center'
  | 'items-baseline'
  | 'items-stretch';
export type Appearance = 'appearance-none';
export type BackgroundColor =
  | `bg-${KeyOfType<typeof backgroundColor, string>}`
  | `bg-${KeyOfType<
      typeof backgroundColor,
      TailwindColorGroup
    >}-${KnownKeys<TailwindColorGroup>}`
  | `bg-${keyof typeof reusableTheme.colors}`;
export type BackgroundPosition = `bg-${keyof typeof backgroundPosition}`;
export type BackgroundRepeat =
  | 'bg-repeat'
  | 'bg-no-repeat'
  | 'bg-repeat-x'
  | 'bg-repeat-y'
  | 'bg-repeat-round'
  | 'bg-repeat-space';
export type BackgroundSize = `bg-${keyof typeof backgroundSize}`;
export type BorderColor =
  | `border-${KeyOfType<typeof backgroundColor, string>}`
  | `border-${KeyOfType<
      typeof backgroundColor,
      TailwindColorGroup
    >}-${KnownKeys<TailwindColorGroup>}`
  | `border-${keyof typeof reusableTheme.colors}`;
export type BorderRadius =
  | `rounded-${KnownKeys<typeof borderRadius>}`
  | 'rounded';
export type BorderWidth =
  | `border-${KnownKeys<typeof borderWidth>}`
  | `border-${blrt}-${KnownKeys<typeof borderWidth>}`
  | 'border'
  | `border-${blrt}`;
export type Bottom = NegativeAwareKeyOf<typeof inset, 'bottom'>;
export type Color =
  | `text-${KeyOfType<typeof textColor, string>}`
  | `text-${KeyOfType<
      typeof textColor,
      TailwindColorGroup
    >}-${KnownKeys<TailwindColorGroup>}`
  | `text-${keyof typeof reusableTheme.colors}`;
export type Display =
  | 'block'
  | 'inline-block'
  | 'inline'
  | 'flex'
  | 'inline-flex'
  | 'table'
  | 'inline-table'
  | 'table-caption'
  | 'table-cell'
  | 'table-column'
  | 'table-column-group'
  | 'table-footer-group'
  | 'table-header-group'
  | 'table-row-group'
  | 'table-row'
  | 'flow-root'
  | 'grid'
  | 'inline-grid'
  | 'contents'
  | 'list-item'
  | 'hidden';
export type Fill = `fill-${keyof typeof fill}`;
export type Flex = `flex-${KnownKeys<typeof flex>}`;
export type FlexDirection =
  | 'flex-row'
  | 'flex-row-reverse'
  | 'flex-col'
  | 'flex-col-reverse';
export type FlexWrap = 'flex-wrap' | 'flex-wrap-reverse' | 'flex-nowrap';
export type FontSize = `text-${KnownKeys<typeof fontSize>}`;
export type FontWeight = `font-${keyof typeof fontWeight}`;
export type Height =
  | `h-${keyof typeof height}`
  | 'h-13'
  | 'h-18'
  | 'h-fixed-top'
  | 'h-fixed-bottom';
export type Inset = NegativeAwareKeyOf<typeof inset, 'inset'>;
export type JustifyContent =
  | 'justify-start'
  | 'justify-end'
  | 'justify-center'
  | 'justify-betweens'
  | 'justify-around'
  | 'justify-evenly';
export type Left = NegativeAwareKeyOf<typeof inset, 'left'>;
export type Margin = NegativeAwareKeyOf<typeof margin, 'm'>;
export type MarginBottom = NegativeAwareKeyOf<typeof margin, 'mb'>;
export type MarginLeft = NegativeAwareKeyOf<typeof margin, 'ml'>;
export type MarginRight = NegativeAwareKeyOf<typeof margin, 'mr'>;
export type MarginTop = NegativeAwareKeyOf<typeof margin, 'mt'>;
export type MarginX = NegativeAwareKeyOf<typeof margin, 'mx'>;
export type MarginY = NegativeAwareKeyOf<typeof margin, 'my'>;
export type MaxHeight =
  | `max-h-${keyof typeof maxHeight}`
  | `max-h-${keyof typeof reusableTheme.maxHeight}`;
export type MaxWidth =
  | `max-w-${keyof typeof maxWidth}`
  | `max-w-${keyof typeof reusableTheme.maxWidth}`;
export type MinHeighet = `min-h-${keyof typeof minHeight}`;
export type MinWidth = `min-w-${keyof typeof minWidth}`;
export type Outline = `outline-${keyof typeof outline}`;
export type Overflow = `overflow-${overflow}`;
export type OverflowX = `overflow-x-${overflow}`;
export type OverflowY = `overflow-y-${overflow}`;
export type Padding = `p-${keyof typeof padding}`;
export type PaddingBottom = `pb-${keyof typeof padding}`;
export type PaddingLeft = `pl-${keyof typeof padding}`;
export type PaddingRight = `pr-${keyof typeof padding}`;
export type PaddingTop = `pt-${keyof typeof padding}`;
export type PaddingX = `px-${keyof typeof padding}`;
export type PaddingY = `py-${keyof typeof padding}`;
export type PlaceholderColor =
  | `placeholder-${KeyOfType<typeof backgroundColor, string>}`
  | `placeholder-${KeyOfType<
      typeof backgroundColor,
      TailwindColorGroup
    >}-${KnownKeys<TailwindColorGroup>}`
  | `placeholder-${keyof typeof reusableTheme.colors}`;
export type Position = 'static' | 'fixed' | 'absolute' | 'relative' | 'sticky';
export type Right = NegativeAwareKeyOf<typeof inset, 'right'>;
export type Ring =
  | 'ring'
  | 'ring-0'
  | 'ring-1'
  | 'ring-2'
  | 'ring-4'
  | 'ring-8';
export type SpaceX = NegativeAwareKeyOf<typeof space, 'space-x'>;
export type SpaceY = NegativeAwareKeyOf<typeof space, 'space-y'>;
export type TextDecoration = 'underline' | 'line-through' | 'no-underline';
export type Top = NegativeAwareKeyOf<typeof inset, 'top'> | 'top-fixed-top';
export type WhiteSpace =
  | 'whitespace-normal'
  | 'whitespace-nowrap'
  | 'whitespace-pre'
  | 'whitespace-pre-line'
  | 'whitespace-pre-wrap';
export type Width = `w-${keyof typeof width}` | 'w-13' | 'w-18';
export type ZIndex =
  | `z-${keyof typeof zIndex}`
  | NegativeAwareKeyOf<typeof reusableTheme.zIndex, 'z'>;

export class TWProperties {
  alignItems?: AlignItems;
  appearance?: Appearance;
  backgroundColor?: BackgroundColor;
  backgroundPosition?: BackgroundPosition;
  backgroundRepeat?: BackgroundRepeat;
  backgroundSize?: BackgroundSize;
  borderColor?: BorderColor;
  borderRadius?: BorderRadius;
  borderWidth?: BorderWidth;
  bottom?: Bottom;
  color?: Color;
  display?: Display;
  fill?: Fill;
  flex?: Flex;
  flexDirection?: FlexDirection;
  flexWrap?: FlexWrap;
  fontSize?: FontSize;
  fontWeight?: FontWeight;
  height?: Height;
  inset?: Inset;
  justifyContent?: JustifyContent;
  left?: Left;
  margin?: Margin;
  marginBottom?: MarginBottom;
  marginLeft?: MarginLeft;
  marginRight?: MarginRight;
  marginTop?: MarginTop;
  marginX?: MarginX;
  marginY?: MarginY;
  maxHeight?: MaxHeight;
  maxWidth?: MaxWidth;
  minHeight?: MinHeighet;
  minWidth?: MinWidth;
  outline?: Outline;
  overflow?: Overflow;
  overflowX?: OverflowX;
  overflowY?: OverflowY;
  padding?: Padding;
  paddingBottom?: PaddingBottom;
  paddingLeft?: PaddingLeft;
  paddingRight?: PaddingRight;
  paddingTop?: PaddingTop;
  paddingX?: PaddingX;
  paddingY?: PaddingY;
  placeholderColor?: PlaceholderColor;
  position?: Position;
  right?: Right;
  ring?: Ring;
  spaceX?: SpaceX;
  spaceY?: SpaceY;
  textDecoration?: TextDecoration;
  top?: Top;
  whiteSpace?: WhiteSpace;
  width?: Width;
  zIndex?: ZIndex;

  constructor(properties: TWProperties) {
    Object.assign(this, properties);
  }
}

export class TW extends TWProperties {
  disabled?: TWProperties = {};
  focus?: TWProperties = {};

  constructor({ disabled, focus, ...properties }: Partial<TW>) {
    super(properties);
    Object.assign(this.disabled, disabled);
    Object.assign(this.focus, focus);
  }

  merge({ disabled, focus, ...properties }: Partial<TW>) {
    Object.assign(this, properties);
    Object.assign(this.disabled, disabled);
    Object.assign(this.focus, focus);
    return this;
  }

  toClassName() {
    return Object.keys(this)
      .map((key) =>
        ['disabled', 'focus'].includes(key)
          ? Object.keys(this[key as keyof TW] as TWProperties)
              .map(
                (key2) =>
                  `${key}:${
                    (this[key as keyof TW] as TWProperties)[
                      key2 as keyof TWProperties
                    ]
                  }`,
              )
              .join(' ')
          : (this[key as keyof TWProperties] as string),
      )
      .join(' ');
  }
}
