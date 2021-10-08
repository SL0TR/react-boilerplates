import React from 'react';
import { Layout, Row, Col } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCollapsed } from 'store';
import TopbarUser from './TopbarUser';
import TopbarWrapper from './styles';
import TopBarLangSwitch from './TopbarLangSwitch';

const { Header } = Layout;

export default function Topbar() {
  const { collapsed, openDrawer } = useSelector(state => state.App);
  const dispatch = useDispatch();

  const handleToggle = React.useCallback(() => dispatch(toggleCollapsed()), [
    dispatch,
  ]);
  const isCollapsed = collapsed && !openDrawer;

  return (
    <TopbarWrapper>
      <Header
        className={
          isCollapsed ? 'header shadow-long collapsed' : 'header shadow-long'
        }
      >
        <Row
          style={{ height: '100%' }}
          type="flex"
          justify="space-between"
          align="middle"
        >
          <Col>
            {isCollapsed ? (
              <MenuUnfoldOutlined
                style={{ fontSize: '2rem' }}
                onClick={handleToggle}
              />
            ) : (
              <MenuFoldOutlined
                style={{ fontSize: '2rem' }}
                onClick={handleToggle}
              />
            )}
          </Col>
          <Col>
            <Row
              className="header-right"
              type="flex"
              justify="end"
              align="middle"
              gutter={[25, 0]}
            >
              <Col>
                <TopBarLangSwitch />
              </Col>
              <Col>
                <TopbarUser />
              </Col>
            </Row>
          </Col>
        </Row>
      </Header>
    </TopbarWrapper>
  );
}
