import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Avatar } from 'antd';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { UserOutlined } from '@ant-design/icons';
import { logout } from 'features/UserAuth';

const { Item } = Menu;

const MenuItem = styled(Item)`
  padding: 1rem 10rem 1rem 3rem;
`;
export default function TopbarUser() {
  const dispatch = useDispatch();

  const menu = (
    <Menu>
      <MenuItem key="1">
        <Link to="/dashboard/settings">
          <FormattedMessage id="Settings" />
        </Link>
      </MenuItem>
      <MenuItem key="2" onClick={() => dispatch(logout())}>
        <FormattedMessage id="Logout" />
      </MenuItem>
    </Menu>
  );

  return (
    <Dropdown placement="bottomRight" overlay={menu} trigger="click">
      <Avatar
        size={40}
        src="https://muzotakt.pl/wp-content/uploads/2017/05/Thom-Yorke-1200x900.jpg"
        icon={<UserOutlined />}
      />
    </Dropdown>
  );
}
