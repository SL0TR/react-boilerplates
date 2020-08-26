import React from 'react';
import { Layout } from 'antd';
// import Sidebar from 'features/Sidebar/Sidebar';
// import Topbar from 'features/Topbar/Topbar';
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
        {/* <Topbar /> */}
        <Layout style={styles.layout}>
          {/* <Sidebar /> */}
          <Layout
            className="isoContentMainLayout"
            style={{
              height: '100vh',
            }}
          >
            <Content className="isomorphicContent" style={styles.content}>
              <DashboardRoutes />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </DashboardContainer>
  );
}
