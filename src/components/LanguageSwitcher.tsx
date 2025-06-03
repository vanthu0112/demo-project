import { Dropdown, Button, Space } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import type { MenuProps } from "antd";
import { languages } from "@/constants/constants";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = params.locale as string;

  // Update language when user selects a different one
  const changeLanguage = (lng: string) => {
    if (lng !== currentLocale) {
      i18n.changeLanguage(lng);
      const newPath = pathname.replace(`/${currentLocale}`, `/${lng}`);
      router.push(newPath);
    }
  };

  // Sync i18n with currentLocale on URL
  useEffect(() => {
    if (currentLocale && i18n.language !== currentLocale) {
      i18n.changeLanguage(currentLocale);
    }
  }, [currentLocale, i18n]);

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
          {currentLocale.toUpperCase()}
          {/* <span className="hidden sm:inline">{currentLanguage.flag}</span>
          <span className="hidden md:inline">{currentLanguage.name}</span> */}
        </Space>
      </Button>
    </Dropdown>
  );
}
