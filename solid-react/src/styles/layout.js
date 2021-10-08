import styled from 'styled-components';

export const LayoutContentWrapper = styled.div`
  padding: 40px 20px;
  overflow: hidden;

  @media only screen and (max-width: 767px) {
    padding: 50px 20px;
  }

  @media (max-width: 580px) {
    padding: 15px;
  }
`;

export const LayoutContent = styled.div`
  width: 100%;
  padding: 35px;
  border-radius: 1rem;
  height: 100%;
  background-color: #fff;
`;
