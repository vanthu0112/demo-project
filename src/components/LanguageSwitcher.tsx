import { Dropdown, Button, Space } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import type { MenuProps } from "antd";
import { languages } from "@/constants/constants";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  const items: MenuProps["items"] = languages.map((language) => ({
    key: language.code,
    label: (
      <Space>
        <span>{language.flag}</span>
        {language.name}
      </Space>
    ),
    onClick: () => changeLanguage(language.code),
  }));

  return (
    <Dropdown menu={{ items }} placement="bottomRight">
      <Button type="text" size="middle">
        <Space>
          <GlobalOutlined />
          <span className="hidden sm:inline">{currentLanguage.flag}</span>
          <span className="hidden md:inline">{currentLanguage.name}</span>
        </Space>
      </Button>
    </Dropdown>
  );
}
