export const theme = {
  bgColor: '#040736',
  bgFooter: '#04244F',
  bgCardTech: '#EBEBEB',
  textColor: {
    primary: '#fff',
    segundary: '#7B78E5',
  },
  fonts: {
    primary: 'Inter',
    segundary: 'Inria Sans',
  },
  size: {
    // xs: extra-small
    xs: '15px',
    // sm: small
    sm: '18px',
    // md: medium
    md: '20px',
    // lg: large
    lg: '25px',
    // xl: extra-large
    xl: '32px',
  },
  weight: {
    regular: 400,
    medium: 600,
    bold: 700,
  },
  breakpoints: {
    mobile: '375px',
    tablet: '800px',
    laptop: '1024px',
    desktop: '2048px',
  },
};

export const devices = {
  mobileS: `(min-width: ${theme.breakpoints.mobile})`,
  tablet: `(min-width: ${theme.breakpoints.tablet})`,
  laptop: `(min-width: ${theme.breakpoints.laptop})`,
  desktop: `(min-width: ${theme.breakpoints.desktop})`,
};
