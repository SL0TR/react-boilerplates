import React from 'react';
import { Layout } from 'antd';
import Sidebar from 'features/Sidebar';
import Topbar from 'features/Topbar';
import DashboardRoutes from './DashboardRoutes';

import { DashboardContainer, DashboardGlobalStyles } from './styles';

const { Content } = Layout;
const styles = {
  layout: { flexDirection: 'row', overflowX: 'hidden' },
  content: {
    padding: '90px 0 0',
    flexShrink: '0',
    position: 'relative',
  },
};

export default function Dashboard() {
  return (
    <DashboardContainer>
      <DashboardGlobalStyles />
      <Layout style={{ height: '100vh' }}>
        <Topbar />
        <Layout style={styles.layout}>
          <Sidebar />
          <Layout
            className="main-content"
            style={{
              height: '100vh',
            }}
          >
            <Content style={styles.content}>
              <DashboardRoutes />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </DashboardContainer>
  );
}
