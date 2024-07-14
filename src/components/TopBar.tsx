import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Lang } from 'SRC/constants/common';
import { useTranslation } from 'react-i18next';
import { Dropdown, IDropdownItem } from '@pinkymini/nutriso-components-new';
import { GlobeIcon } from '@radix-ui/react-icons';
import logo from 'SRC/assets/logo.png';

interface TopBarProps {
  isPublicPage?: React.ReactNode;
}

const TopBar = ({ isPublicPage = false }: TopBarProps) => {
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
    <>
      {isPublicPage ? (
        <div className="bg-white px-10 pt-14 flex items-center justify-center">
          <div className="flex flex-col items-center w-[650px]">
            <div className="self-end">
              <Dropdown dropdownList={dropdownList} value={currentLang} onValueChange={setCurrentLang}>
                <div className="flex items-center">
                  <GlobeIcon className="mr-1" />
                  {dropdownList.find((item) => item.value === currentLang)?.optionText}
                </div>
              </Dropdown>
            </div>
            <Link className="" to={{ pathname: '/' }}>
              <img className="h-[80px]" src={logo} alt="" />
            </Link>
          </div>
        </div>
      ) : (
        <div className="drop-shadow-lg bg-white px-10 py-3 flex items-center h-[75px] justify-between">
          <Link className="" to={{ pathname: '/' }}>
            <img className="h-[50px]" src={logo} alt="" />
          </Link>
          <Dropdown dropdownList={dropdownList} value={currentLang} onValueChange={setCurrentLang}>
            {dropdownList.find((item) => item.value === currentLang)?.optionText}
          </Dropdown>
        </div>
      )}
    </>
  );
};

export default TopBar;
