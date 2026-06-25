export const colors = {
  dark: {
    background: '#0F1115',
    surface: '#181C23',
    primary: '#8B7CFF',
    primaryHover: '#7A69FF',
    secondaryAccent: '#7EE7C4',
    textPrimary: '#F5F7FA',
    textSecondary: '#A8B0C0',
    textButton: '#F5F7FA',
    border: '#2A3140',
  },
  light: {
    background: '#F8FAFD',
    surface: '#FFFFFF',
    primary: '#7C6BFF',
    primaryHover: '#6958FF',
    secondaryAccent: '#2CCDA6',
    textPrimary: '#1C2430',
    textSecondary: '#667085',
    textButton: '#F5F7FA',
    border: '#E7ECF4',
  },
} as const;

export const brandGradient = {
  angle: '135deg',
  colors: ['#8B7CFF', '#A98CFF', '#7EE7C4'],
  locations: [0, 0.45, 1],
  css: 'linear-gradient(135deg, #8B7CFF 0%, #A98CFF 45%, #7EE7C4 100%)',
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const radius = {
  sm: 8,
  md: 14,
  lg: 24,
};

export const typography = {
  displayLarge: {
    fontFamily: 'Sora',
    fontSize: 40,
    lineHeight: 48,
    fontWeight: '700',
    letterSpacing: -0.8,
  },
  displayMedium: {
    fontFamily: 'Sora',
    fontSize: 32,
    lineHeight: 40,
    fontWeight: '700',
    letterSpacing: -0.6,
  },
  h1: {
    fontFamily: 'Inter',
    fontSize: 28,
    lineHeight: 36,
    fontWeight: '700',
    letterSpacing: -0.4,
  },
  h2: {
    fontFamily: 'Inter',
    fontSize: 22,
    lineHeight: 30,
    fontWeight: '700',
    letterSpacing: -0.2,
  },
  h3: {
    fontFamily: 'Inter',
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    letterSpacing: -0.1,
  },
  bodyLarge: {
    fontFamily: 'Inter',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
    letterSpacing: 0,
  },
  bodyMedium: {
    fontFamily: 'Inter',
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '400',
    letterSpacing: 0,
  },
  buttonLarge: {
    fontFamily: 'Inter',
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '600',
    letterSpacing: 0.1,
  },
  labelSmall: {
    fontFamily: 'Inter',
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '500',
    letterSpacing: 0.3,
  },
} as const;

export const theme = {
  colors,
  brandGradient,
  spacing,
  radius,
  typography,
} as const;

export type ColorMode = keyof typeof colors;
export type ThemeColors = (typeof colors)[ColorMode];
