import { useDispatch, useSelector } from 'react-redux';
import { changeLanguage } from 'store';
import styled from 'styled-components';

const LangSwithContainer = styled.div`
  position: absolute;
  top: 3rem;
  right: 3rem;
`;

function TopBarLangSwitch(props) {
  const { languageId } = useSelector(state => state.LanguageSwitcher.language);
  const dispatch = useDispatch();

  function handleLangChange(e) {
    console.log(e.target.value);
    dispatch(changeLanguage(e?.target?.value));
  }

  return (
    <LangSwithContainer {...props}>
      <select
        className="p-2 mx-2"
        size="large"
        defaultValue={languageId}
        onChange={handleLangChange}
      >
        <option value="english">EN</option>
        <option value="bangla">BN</option>
      </select>
    </LangSwithContainer>
  );
}

export default TopBarLangSwitch;
