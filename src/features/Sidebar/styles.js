import styled from 'styled-components';
import { tint } from 'polished';

const SidebarWrapper = styled.div`
  .sidebar {
    z-index: 1000;
    width: 280px;
    flex: 0 0 280px;
    height: 100%;
    transition: all 0.3s;

    @media only screen and (max-width: 767px) {
      display: none;
    }

    &.ant-layout-sider-collapsed {
      @media only screen and (max-width: 767px) {
        display: block;
      }
    }

    .sidebarLogo {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
      padding: 2.3rem 0 8rem 0;
    }

    a {
      display: flex;
      justify-content: start;
      align-items: center;
      height: 100%;

      h5 {
        color: ${props => props.theme.grey};
        font-weight: 400;
        transition: all 0.3s ease;
      }

      svg {
        margin-right: 2rem;
        width: 2.5rem;
        height: 2.5rem;
      }
    }

    .sidebar-menu {
      a {
        margin: 1rem 0;
        padding: 1rem 0;
        padding-left: 20%;
        position: relative;
        width: 100%;
        transition: all 0.3s ease-in-out;
      }

      &--active {
        background-color: ${props => tint(0.9, props.theme.primary)};

        h5 {
          color: ${props => props.theme.primary};
          font-weight: 700;
        }

        svg {
          fill: ${props => props.theme.primary};
        }
      }
    }

    &.ant-layout-sider-collapsed {
      .sidebar-menu {
        a {
          h5 {
            display: none;
          }
        }
      }
    }
  }
`;

export default SidebarWrapper;
