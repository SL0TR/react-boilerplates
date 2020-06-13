import React from 'react';
import { Row, Divider } from 'antd';
import styled from 'styled-components';
import UserAuthForm from './UserAuthForm';

const RowWrapper = styled(Row)`
  background-image: ${props => props.theme.bgGradient};
  height: 100vh;

  .login-content {
    width: 60rem;
    padding: 5rem;
    box-shadow: ${props => props.theme.lightShadow};
    background-color: #fff;
    border-radius: 0.6rem;
  }
`;

function UserAuth() {
  return (
    <RowWrapper type="flex" justify="center" align="middle">
      <div className="login-content">
        <h1 className="text-center">Login</h1>
        <Divider />
        <UserAuthForm />
      </div>
    </RowWrapper>
  );
}

export default UserAuth;
