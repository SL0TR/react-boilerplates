import { createGlobalStyle } from 'styled-components';

const AppStyles = createGlobalStyle`

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-rendering: optimizeLegibility;
  }

  /* FONTS */
  html {
    font-size: 62.5%;

    body {
      font-family: 'Cera Pro', sans-serif;
      line-height: 155%;

      input, button, select, optgroup, textarea, span, li, a, button {
        font-family: 'Cera Pro', sans-serif;
      }

      h1, h2, h3, h4, h5, h6 {
        font-family: 'Cera Pro', sans-serif;
        font-weight: bold;
      }

      p {
        font-size: 1.6rem;
      }

      h1 {
        font-size: 3.4rem;
      }

      h2 {
        font-size: 2.8rem;
      }

      h3 {
        font-size: 2.4rem;
      }

      h4 {
        font-size: 1.8rem;
      }

      h5 {
        font-size: 1.6rem;
      }

      h6 {
        font-size: 1.4rem;
      }

    }

  }

  /* Utilities  */

  /* SHADOW */

  .shadow {
    box-shadow: ${props => props.theme.shadow};

    &-light {
      box-shadow: ${props => props.theme.lightShadow};
    }
  }

  /* NProgerss */

    #nprogress .bar {
      background: ${props => props.theme.primary};
    }

    #nprogress .peg {
        box-shadow: 0 0 10px ${props => props.theme.primary}, 0 0 5px ${props =>
  props.theme.primary};
    }

    #nprogress .spinner-icon {
      display: none;
    }

   /* Typography Utils */

   .text {
    &-center {
      text-align: center;
    }

    &-left {
      text-align: left;
    }

    &-right {
      text-align: right;
    }
  }

  .font {

    &-light {
      font-weight: 300;
    }
    
    &-normal {
      font-weight: 400;
    }

    &-bold {
      font-weight: 700;
    }

    &-medium {
      font-weight: 500;
    }

  }

   /* Margin Padding */

  .m {
    &-1{
      margin: 2rem;
    }

    &-2{
      margin: 4rem;
    }

    &-3{
      margin: 6rem;
    }

    &-4{
      margin: 8rem;
    }

  &t {
    &-1{
      margin-top: 2rem;
    }
    &-2{
      margin-top: 4rem;
    }
    &-3{
      margin-top: 6rem;
    }
    &-4{
      margin-top: 8rem;
    }
  }

  &b {
    
    &-1 {
      margin-bottom: 2rem;
    }

    &-2 {
      margin-bottom: 4rem;
    }
    &-3 {
      margin-bottom: 6rem;
    }
    &-4 {
      margin-bottom: 8rem;
    }
  }

  &l {
    &-1 {
      margin-left: 2rem;
    }
    &-2 {
      margin-left: 4rem;
    }
    &-3 {
      margin-left: 6rem;
    }
    &-4 {
      margin-left: 8rem;
    }
  }
  &r {
    &-1 {
      margin-right: 2rem;
    }
    &-2 {
      margin-right: 4rem;
    }
    &-3 {
      margin-right: 6rem;
    }
    &-4 {
      margin-right: 8rem;
    }
  }
  &x {
    &-1 {
      margin-left: 1rem;
      margin-right: 1rem;
    }
    &-2 {
      margin-left: 2rem;
      margin-right: 2rem;
    }
    &-3 {
      margin-left: 3rem;
      margin-right: 3rem;
    }
    &-4 {
      margin-left: 4rem;
      margin-right: 4rem;
    }
  }

  &y {
    &-1 {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
    &-2 {
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
    &-3 {
      margin-top: 3rem;
      margin-bottom: 3rem;
    }
    &-4 {
      margin-top: 4rem;
      margin-bottom: 4rem;
    }
  }
}

.p {

  &-1 {
    padding: 2rem;
  }
  &-2 {
    padding: 4rem;
  }
  &-3 {
    padding: 6rem;
  }
  &-4 {
    padding: 8rem;
  }

  &t {
    &-1 {
      padding-top: 2rem;
    }
    &-2 {
      padding-top: 4rem;
    }
    &-3 {
      padding-top: 6rem;
    }
    &-4 {
      padding-top: 8rem;
    }
  }

  &b {
    &-1 {
      padding-bottom: 2rem;
    }
    &-2 {
      padding-bottom: 4rem;
    }
    &-3 {
      padding-bottom: 6rem;
    }
    &-4 {
      padding-bottom: 8rem;
    }
  }

  &l {
    &-1 {
      padding-left: 2rem;
    }
    &-2 {
      padding-left: 4rem;
    }
    &-3 {
      padding-left: 6rem;
    }
    &-4 {
      padding-left: 8rem;
    }
  }

  &r {
    &-1 {
      padding-right: 2rem;
    }
    &-2 {
      padding-right: 4rem;
    }
    &-3 {
      padding-right: 6rem;
    }
    &-4 {
      padding-right: 8rem;
    }
  }

  &x{
    &-1 {
      padding-left: 1rem;
      padding-right: 1rem;
    }
    &-2 {
      padding-left: 2rem;
      padding-right: 2rem;
    }
    &-3 {
      padding-left: 3rem;
      padding-right: 3rem;
    }
    &-4 {
      padding-left: 4rem;
      padding-right: 4rem;
    }
  }

  &y{
    &-1 {
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
    &-2 {
      padding-top: 2rem;
      padding-bottom: 2rem;
    }
    &-3 {
      padding-top: 3rem;
      padding-bottom: 3rem;
    }
    &-4 {
      padding-top: 4rem;
      padding-bottom: 4rem;
    }
  }
}
  
`;

export default AppStyles;
