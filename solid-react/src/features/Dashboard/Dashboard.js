import Topbar from 'features/Topbar';
import DashboardRoutes from './DashboardRoutes';
import { DashboardContainer } from './styles';

export default function Dashboard() {
  return (
    <DashboardContainer>
      <Topbar />
      <DashboardRoutes />
    </DashboardContainer>
  );
}
