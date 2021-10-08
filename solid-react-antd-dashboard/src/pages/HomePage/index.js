import React from 'react';
import { Typography } from 'antd';
import { FormattedMessage } from 'react-intl';
import { LayoutContentWrapper, LayoutContent } from 'styles';

function DashboardHomePage() {
  return (
    <LayoutContentWrapper>
      <LayoutContent className="shadow">
        <Typography.Title>
          <FormattedMessage id="Home Page" />
        </Typography.Title>
      </LayoutContent>
    </LayoutContentWrapper>
  );
}

export default DashboardHomePage;
