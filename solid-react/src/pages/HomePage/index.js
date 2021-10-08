import { FormattedMessage } from 'react-intl';
import { LayoutContentWrapper, LayoutContent } from 'styles';

function DashboardHomePage() {
  return (
    <LayoutContentWrapper>
      <LayoutContent className="shadow">
        <h1>
          <FormattedMessage id="Home Page" />
        </h1>
      </LayoutContent>
    </LayoutContentWrapper>
  );
}

export default DashboardHomePage;
