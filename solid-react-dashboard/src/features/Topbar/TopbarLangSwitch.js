import React from 'react';
import { Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { changeLanguage } from 'store';

const { Option } = Select;

function TopBarLangSwitch(props) {
  const { languageId } = useSelector(state => state.LanguageSwitcher.language);
  const dispatch = useDispatch();

  function handleLangChange(value) {
    dispatch(changeLanguage(value));
  }

  return (
    <Select
      {...props}
      size="large"
      defaultValue={languageId}
      onChange={handleLangChange}
    >
      <Option value="english">EN</Option>
      <Option value="bangla">BN</Option>
    </Select>
  );
}

export default TopBarLangSwitch;
