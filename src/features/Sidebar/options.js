import { PRIVATE_ROUTE } from 'router';
import { ReactComponent as DashboardIcon } from './assets/darhboard-icon.svg';
import { ReactComponent as BlankPage } from './assets/page.svg';

const options = [
  {
    key: PRIVATE_ROUTE.HOME,
    label: 'Dashboard',
    LeftIcon: DashboardIcon,
    exact: true,
  },
  {
    key: PRIVATE_ROUTE.DEMO_PAGE,
    LeftIcon: BlankPage,
    label: 'Demo Page',
  },
];
export default options;
