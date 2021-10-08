import TopbarUser from './TopbarUser';
import TopbarWrapper from './styles';
import TopBarLangSwitch from './TopbarLangSwitch';

export default function Topbar() {
  return (
    <TopbarWrapper>
      <TopbarUser />
      <TopBarLangSwitch style={{ position: 'static' }} />
    </TopbarWrapper>
  );
}
