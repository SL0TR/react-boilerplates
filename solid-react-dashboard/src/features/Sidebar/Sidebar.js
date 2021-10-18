import React from 'react';
import { Layout } from 'antd';
import { useSelector } from 'react-redux';
import options from './options';
import SidebarWrapper from './styles';
import SidebarMenu from './SidebarMenu';

const { Sider } = Layout;

export default function Sidebar() {
  const { collapsed } = useSelector(state => state.App);

  return (
    <SidebarWrapper>
      <Sider
        trigger={null}
        collapsible
        width={240}
        className="sidebar shadow"
        collapsed={collapsed}
        style={{ backgroundColor: '#fff' }}
      >
        <img
          style={{ width: '100%' }}
          src="http://www.thedemocompany.com/wp-content/uploads/2017/03/asset-22.png"
          alt="demo logo"
        />
        <ul className="sidebar-menu">
          {options.map(singleOption => (
            <SidebarMenu key={singleOption.key} singleOption={singleOption} />
          ))}
        </ul>
      </Sider>
    </SidebarWrapper>
  );
}
