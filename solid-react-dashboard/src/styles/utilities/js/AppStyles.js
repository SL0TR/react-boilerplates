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


  html {
    font-size: 62.5%;

    body {
      font-family: 'Roboto', sans-serif;
      line-height: 155%;
      font-size: 1.6rem;

      input, button, select, optgroup, textarea, span, li, a, button {
        font-family: 'Roboto', sans-serif;
      }

      h1, h2, h3, h4, h5, h6 {
        font-family: 'Roboto', sans-serif;
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

  /* Ant Design Overrides */

  .ant-form-item-explain {
    text-transform: capitalize;
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
  
`;

export default AppStyles;
