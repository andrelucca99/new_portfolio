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
    // font-size: xs, extra-small
    xs: '15px',
    // font-size: sm, small
    sm: '18px',
    // font-size: md, medium
    md: '20px',
    // font-size: lg, large
    lg: '25px',
    // font-size: xl, extra-large
    xl: '32px',
  },
  weight: {
    regular: 400,
    medium: 600,
    bold: 700,
  },

  // Breakpoints - responsivo

  breakpoints: {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px',
  },
};

export const devices = {
  mobileS: `(min-width: ${theme.breakpoints.mobileS})`,
  mobileM: `(min-width: ${theme.breakpoints.mobileM})`,
  mobileL: `(min-width: ${theme.breakpoints.mobileL})`,
  tablet: `(min-width: ${theme.breakpoints.tablet})`,
  laptop: `(min-width: ${theme.breakpoints.laptop})`,
  laptopL: `(min-width: ${theme.breakpoints.laptopL})`,
  desktop: `(min-width: ${theme.breakpoints.desktop})`,
};
