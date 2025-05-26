import { Shield, Award } from "lucide-react";
import { Layout, Typography, Divider, Space } from "antd";
import { SiFacebook, SiInstagram, SiYoutube, SiLinkedin } from "react-icons/si";

const { Footer: AntFooter } = Layout;
const { Title, Text, Link } = Typography;

export default function Footer() {
  const courseLinks = [
    "Lập trình Web",
    "Data Science",
    "Digital Marketing",
    "UI/UX Design",
    "Business Analytics",
  ];

  const companyLinks = [
    "Về chúng tôi",
    "Đội ngũ",
    "Tuyển dụng",
    "Tin tức",
    "Đối tác",
  ];

  const supportLinks = [
    "Trung tâm trợ giúp",
    "Liên hệ",
    "Chính sách bảo mật",
    "Điều khoản sử dụng",
    "Sitemap",
  ];

  const socialLinks = [
    { icon: SiFacebook, href: "#" },
    { icon: SiInstagram, href: "#" },
    { icon: SiYoutube, href: "#" },
    { icon: SiLinkedin, href: "#" },
  ];

  return (
    <AntFooter className="!bg-gray-900 !text-white !py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Title level={3} className="!text-white !mb-0">
              LearnPro
            </Title>
            <Text className="text-gray-400 leading-relaxed block">
              Nền tảng học tập trực tuyến hàng đầu Việt Nam, mang đến trải
              nghiệm học tập tuyệt vời với công nghệ AI tiên tiến.
            </Text>
            <Space size="middle">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </Space>
          </div>

          <div>
            <Title level={5} className="!text-white mb-4">
              Khóa học
            </Title>
            <ul className="space-y-2">
              {courseLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Title level={5} className="!text-white mb-4">
              Công ty
            </Title>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Title level={5} className="!text-white mb-4">
              Hỗ trợ
            </Title>
            <ul className="space-y-2">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Divider className="!border-gray-800 !mt-12 !mb-0" />

        <div className="flex flex-col md:flex-row justify-between items-center pt-8">
          <Text className="text-gray-400 text-sm">
            © 2024 LearnPro. Tất cả quyền được bảo lưu.
          </Text>
          <Space size="large" className="mt-4 md:mt-0">
            <span className="flex items-center text-gray-400 text-sm">
              <Shield className="w-4 h-4 mr-2" />
              Bảo mật SSL
            </span>
            <span className="flex items-center text-gray-400 text-sm">
              <Award className="w-4 h-4 mr-2" />
              Chất lượng ISO 9001
            </span>
          </Space>
        </div>
      </div>
    </AntFooter>
  );
}
