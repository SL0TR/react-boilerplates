import React from 'react';
import { Layout } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { toggleOpenDrawer } from 'store';
import options from './options';
import SidebarWrapper from './styles';
import SidebarMenu from './SidebarMenu';

const { Sider } = Layout;

export default function Sidebar() {
  const dispatch = useDispatch();
  const { collapsed, openDrawer } = useSelector(state => state.App);

  // const isCollapsed = collapsed && !openDrawer;

  const onMouseEnter = () => {
    if (collapsed && openDrawer === false) {
      dispatch(toggleOpenDrawer());
    }
  };

  const onMouseLeave = () => {
    if (collapsed && openDrawer === true) {
      dispatch(toggleOpenDrawer());
    }
  };

  return (
    <SidebarWrapper>
      <Sider
        trigger={null}
        collapsible
        width={240}
        className="sidebar shadow"
        collapsed={collapsed}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
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
