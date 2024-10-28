export const breakpoints = {
  sm: 460, //for smaller mobiles
  md: 768, //for tablets and big mobiles
  lg: 1280, //for laptops and bigger tablets
  xl: 1920, //for laptops and bigger screens
};

export const device = {
  sm: `@media (max-width: ${breakpoints.sm}px)`,
  md: `@media (max-width: ${breakpoints.md}px)`,
  lg: `@media (max-width: ${breakpoints.lg}px)`,
  xl: `@media (max-width: ${breakpoints.xl}px)`,
};
