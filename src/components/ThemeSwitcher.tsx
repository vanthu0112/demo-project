import { Dropdown, Button } from "antd";
import { SunOutlined, MoonOutlined, DesktopOutlined } from "@ant-design/icons";

import { useTranslation } from "react-i18next";
import type { MenuProps } from "antd";
import { useTheme } from "@/theme/ThemeProvider";
import { ThemeMode } from "@/constants/enums";

export function ThemeSwitcher() {
  const { setTheme, isDark } = useTheme();
  const { t } = useTranslation("theme");

  const items: MenuProps["items"] = [
    {
      key: ThemeMode.LIGHT,
      label: t(ThemeMode.LIGHT),
      icon: <SunOutlined />,
      onClick: () => setTheme(ThemeMode.LIGHT),
    },
    {
      key: ThemeMode.DARK,
      label: t(ThemeMode.DARK),
      icon: <MoonOutlined />,
      onClick: () => setTheme(ThemeMode.DARK),
    },
    {
      key: ThemeMode.SYSTEM,
      label: t(ThemeMode.SYSTEM),
      icon: <DesktopOutlined />,
      onClick: () => setTheme(ThemeMode.SYSTEM),
    },
  ];

  return (
    <Dropdown menu={{ items }} placement="bottomRight">
      <Button
        type="text"
        icon={isDark ? <MoonOutlined /> : <SunOutlined />}
        size="middle"
      />
    </Dropdown>
  );
}
