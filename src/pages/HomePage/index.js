import React from 'react';
// import { LayoutContentWrapper, LayoutContent } from 'components/uielements';
import { FormattedMessage } from 'react-intl';

function DashboardHomePage() {
  return (
    // <LayoutContentWrapper>
    //   <LayoutContent className="shadow">
    <>
      <h1 style={{ fontSize: 30 }}>
        <FormattedMessage id="Home Page" />
        Test
      </h1>
    </>
    //   </LayoutContent>
    // </LayoutContentWrapper>
  );
}

export default DashboardHomePage;
