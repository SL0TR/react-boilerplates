// MEDIA QUERY WITH JS ;)
export const breakpoints = {
  xs: 480,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600,
};
export const media = key => style =>
  `@media (${key === 'xs' || key === 'sm' ? 'max-width' : 'min-width'}: ${
    breakpoints[key]
  }px) { ${style} }`;

export const isScreenSize = key => {
  if (key === 'xs' || key === 'sm') {
    return window.innerWidth <= breakpoints[key];
  }

  return window.innerWidth >= breakpoints[key];
};
