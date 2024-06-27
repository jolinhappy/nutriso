import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Lang } from 'SRC/constants/common';
import { useTranslation } from 'react-i18next';
import { Dropdown, IDropdownItem } from '@pinkymini/nutriso-components-new';

const TopBar = () => {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(Lang.TW);
  const dropdownList: IDropdownItem[] = [
    {
      value: Lang.TW,
      optionText: '繁體中文',
    },
    {
      value: Lang.EN,
      optionText: 'English',
    },
    {
      value: Lang.KR,
      optionText: '한국어',
    },
  ];

  useEffect(() => {
    i18n.changeLanguage(currentLang);
  }, [currentLang, i18n]);

  return (
    <div className="drop-shadow-lg bg-white px-10 py-3 flex items-center h-[75px] justify-between">
      <Link className="" to={{ pathname: '/' }}>
        <img className="h-[50px]" src="SRC/assets/logo.png" alt="" />
      </Link>
      <Dropdown dropdownList={dropdownList} value={currentLang} onValueChange={setCurrentLang}>
        {dropdownList.find((item) => item.value === currentLang)?.optionText}
      </Dropdown>
    </div>
  );
};

export default TopBar;
