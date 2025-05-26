"use client";
import { useState, useEffect } from "react";
import { Button, Drawer, Space, Typography } from "antd";
import { MenuOutlined, PlayCircleOutlined } from "@ant-design/icons";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/theme/ThemeProvider";
import { removeAccessToken } from "@/utils/cookiesHelper";
import { ROUTES } from "@/constants/routes";
import { useRouter } from "next/navigation";
const { Text } = Typography;

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation("navigation");
  const { isDark } = useTheme();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: t("home"), href: "hero" },
    { label: t("features"), href: "features" },
    { label: t("pricing"), href: "pricing" },
    { label: t("testimonials"), href: "testimonials" },
    { label: t("contact"), href: "contact" },
  ];

  const handleLogout = () => {
    removeAccessToken();
    router.push(ROUTES.LOGIN);
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 backdrop-blur-md transition-all duration-300 border-b ${
          isDark
            ? "bg-gray-900/95 border-gray-600"
            : "bg-white/95 border-gray-200"
        } ${isScrolled ? "shadow-lg" : ""}`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Text className="text-2xl font-bold text-blue-600 m-0">
                LearnPro
              </Text>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <Space size="large">
                {navItems.map((item) => (
                  <Button
                    key={item.href}
                    type="text"
                    onClick={() => scrollToSection(item.href)}
                    className="font-medium"
                  >
                    {item.label}
                  </Button>
                ))}
              </Space>
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex">
              <Space>
                <LanguageSwitcher />
                <ThemeSwitcher />
                <Button
                  type="primary"
                  icon={<PlayCircleOutlined />}
                  onClick={() => scrollToSection("contact")}
                  className="rounded-lg"
                >
                  {t("getStarted")}
                </Button>
                <Button
                  type="link"
                  onClick={() => handleLogout()}
                  className="rounded-lg"
                >
                  Đăng Xuất
                </Button>
              </Space>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                type="text"
                icon={<MenuOutlined />}
                onClick={() => setIsMobileMenuOpen(true)}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setIsMobileMenuOpen(false)}
        open={isMobileMenuOpen}
        width={300}
      >
        <div className="flex flex-col gap-4">
          {navItems.map((item) => (
            <Button
              key={item.href}
              type="text"
              onClick={() => {
                scrollToSection(item.href);
                setIsMobileMenuOpen(false);
              }}
              className="text-left justify-start h-auto py-3 px-4"
            >
              {item.label}
            </Button>
          ))}
          <div
            className={`flex flex-col gap-4 pt-4 border-t ${
              isDark ? "border-gray-600" : "border-gray-200"
            }`}
          >
            <div className="flex justify-between items-center">
              <Text>Language:</Text>
              <LanguageSwitcher />
            </div>
            <div className="flex justify-between items-center">
              <Text>Theme:</Text>
              <ThemeSwitcher />
            </div>
          </div>
          <Button
            type="primary"
            icon={<PlayCircleOutlined />}
            onClick={() => {
              scrollToSection("contact");
              setIsMobileMenuOpen(false);
            }}
            className="mt-4 rounded-lg"
            block
          >
            {t("getStarted")}
          </Button>
        </div>
      </Drawer>
    </>
  );
}
