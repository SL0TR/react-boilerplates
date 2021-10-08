import styled from 'styled-components';

const TopbarWrapper = styled.div`
  background-color: #ffffff;
  z-index: 1000;
  position: fixed;
  width: 100%;
  height: 9rem;
  padding: 0 3rem 0 26.5rem;
  top: 0;
  box-shadow: ${p => p.theme.lightShadow};
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export default TopbarWrapper;
