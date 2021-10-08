import styled from 'styled-components';

const TopbarWrapper = styled.div`
  .header {
    background-color: #ffffff;
    z-index: 1000;
    position: fixed;
    width: 100%;
    height: 9rem;
    padding: 0 3rem 0 26.5rem;

    @media only screen and (max-width: 767px) {
      padding-left: 3rem;
    }

    &.collapsed {
      padding-left: 9rem;

      @media only screen and (max-width: 767px) {
        padding: 0 3rem 0 9rem;
      }
    }

    .ant-col {
      /* display: inherit; */
    }
    &-right {
      .ant-col {
        display: inherit;
      }
    }
  }
`;

export default TopbarWrapper;
