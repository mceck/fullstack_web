import styled from 'styled-components';

export interface PaddingProps {
  all?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  horizontal?: string;
  vertical?: string;
  themeDefault?: boolean;
}
export const Pad = styled.div<PaddingProps>`
  ${({ all, themeDefault, theme }) =>
    all || themeDefault
      ? `padding: ${(themeDefault && theme.padding) || all};`
      : ''};
  ${({ top }) => (top ? `padding-top: ${top};` : '')};
  ${({ left }) => (left ? `padding-left: ${left};` : '')};
  ${({ right }) => (right ? `padding-right: ${right};` : '')};
  ${({ bottom }) => (bottom ? `padding-bottom: ${bottom};` : '')};
  ${({ horizontal, vertical }) =>
    horizontal || vertical
      ? `padding: ${vertical || '0'} ${horizontal || '0'};`
      : ''};
`;

export const H1 = styled.h1`
  margin: 0;
  display: inline-flex;
  align-items: center;
  font-size: ${({ theme }) => theme.text.h1.fontSize};
  font-weight: ${({ theme }) => theme.text.h1.fontWeight};
  color: ${({ theme, color }) => color || theme.colors.text};
`;

export const H2 = styled.h2`
  margin: 0;
  display: inline-flex;
  align-items: center;
  font-size: ${({ theme }) => theme.text.h2.fontSize};
  font-weight: ${({ theme }) => theme.text.h2.fontWeight};
  color: ${({ theme, color }) => color || theme.colors.text};
`;

export const H3 = styled.h3`
  margin: 0;
  display: inline-flex;
  align-items: center;
  font-size: ${({ theme }) => theme.text.h3.fontSize};
  font-weight: ${({ theme }) => theme.text.h3.fontWeight};
  color: ${({ theme, color }) => color || theme.colors.text};
`;

export const Sub1 = styled.h4`
  margin: 0;
  display: inline-flex;
  align-items: center;
  font-size: ${({ theme }) => theme.text.sub1.fontSize};
  font-weight: ${({ theme }) => theme.text.sub1.fontWeight};
  color: ${({ theme, color }) => color || theme.colors.text};
`;

export const Sub2 = styled.h5`
  margin: 0;
  display: inline-flex;
  align-items: center;
  font-size: ${({ theme }) => theme.text.sub2.fontSize};
  font-weight: ${({ theme }) => theme.text.sub2.fontWeight};
  color: ${({ theme, color }) => color || theme.colors.text};
`;

export const Sub3 = styled.h6`
  margin: 0;
  display: inline-flex;
  align-items: center;
  font-size: ${({ theme }) => theme.text.sub3.fontSize};
  font-weight: ${({ theme }) => theme.text.sub3.fontWeight};
  color: ${({ theme, color }) => color || theme.colors.text};
`;

export const Text = styled.p`
  margin: 0;
  display: inline-flex;
  align-items: center;
  font-size: ${({ theme }) => theme.text.p.fontSize};
  font-weight: ${({ theme }) => theme.text.p.fontWeight};
  color: ${({ theme, color }) => color || theme.colors.text};
`;

export const Small = styled.small`
  margin: 0;
  display: inline-flex;
  align-items: center;
  font-size: ${({ theme }) => theme.text.small.fontSize};
  font-weight: ${({ theme }) => theme.text.small.fontWeight};
  color: ${({ theme, color }) => color || theme.colors.text};
`;

export interface FlexProps {
  align?: 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'stretch';
  justify?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-around'
    | 'space-between'
    | 'space-evenly'
    | 'baseline'
    | 'stretch';
  flex?: number;
}

export const Col = styled.div<FlexProps>`
  display: flex;
  flex-direction: column;
  ${({ align }) => (align ? `align-items: ${align};` : '')}
  ${({ justify }) => (justify ? `justify-content: ${justify};` : '')}
  ${({ flex }) => (flex ? `flex: ${flex};` : '')}
`;

export const Row = styled.div<FlexProps>`
  display: flex;
  ${({ align }) => (align ? `align-items: ${align};` : '')}
  ${({ justify }) => (justify ? `justify-content: ${justify};` : '')}
  ${({ flex }) => (flex ? `flex: ${flex};` : '')}
`;

export interface GridProps {
  min?: string;
  max?: string;
  gap?: string;
}
export const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(${({ min }) => min || '250px'}, ${({ max }) => max || '1fr'})
  );
  grid-gap: ${({ gap }) => gap || '1rem 2rem'};
`;

export interface SizeProps {
  width?: string;
  height?: string;
}
export const Spacer = styled.span<SizeProps>`
  display: block;
  ${({ width }) => (width ? `width: ${width};` : '')}
  ${({ height }) => (height ? `height: ${height};` : '')}
`;
