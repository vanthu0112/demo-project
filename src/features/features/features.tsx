import { Row, Col, Card, Typography, Space } from "antd";
import {
  BulbOutlined,
  VideoCameraOutlined,
  TrophyOutlined,
  TeamOutlined,
  ClockCircleOutlined,
  CustomerServiceOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/theme/ThemeProvider";
const { Title, Paragraph } = Typography;

export default function Features() {
  const { t } = useTranslation("features");
  const { isDark } = useTheme();

  const features = [
    {
      icon: BulbOutlined,
      title: t("aiPersonalization"),
      description: t("aiDescription"),
      color: "#2563EB",
      bgColor: isDark ? "#1e3a8a" : "#dbeafe",
    },
    {
      icon: VideoCameraOutlined,
      title: t("video4K"),
      description: t("videoDescription"),
      color: "#7C3AED",
      bgColor: isDark ? "#5b21b6" : "#faf5ff",
    },
    {
      icon: TrophyOutlined,
      title: t("intlCertificates"),
      description: t("certificatesDescription"),
      color: "#F59E0B",
      bgColor: isDark ? "#d97706" : "#fef3c7",
    },
    {
      icon: TeamOutlined,
      title: t("learningCommunity"),
      description: t("communityDescription"),
      color: "#10B981",
      bgColor: isDark ? "#047857" : "#d1fae5",
    },
    {
      icon: ClockCircleOutlined,
      title: t("learnAnywhere"),
      description: t("anywhereDescription"),
      color: "#EF4444",
      bgColor: isDark ? "#dc2626" : "#fecaca",
    },
    {
      icon: CustomerServiceOutlined,
      title: t("support247"),
      description: t("supportDescription"),
      color: "#6366F1",
      bgColor: isDark ? "#4338ca" : "#e0e7ff",
    },
  ];

  return (
    <section
      id="features"
      className={`py-20 ${isDark ? "bg-gray-900" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Title level={2} className="mb-4">
            {t("whyChooseUs")}
          </Title>
          <Paragraph
            className={`text-xl max-w-3xl mx-auto ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {t("featuresDescription")}
          </Paragraph>
        </div>

        <Row gutter={[32, 32]}>
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Col key={index} xs={24} md={12} lg={8}>
                <Card
                  className={`h-full rounded-2xl border-none transition-all duration-300 hover:shadow-lg group`}
                  style={{ background: feature.bgColor }}
                  styles={{ body: { padding: "32px" } }}
                >
                  <Space direction="vertical" size="middle" className="w-full">
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: feature.color }}
                    >
                      <IconComponent className="text-white text-3xl" />
                    </div>

                    <Title
                      level={4}
                      className={`m-0 ${
                        isDark ? "text-gray-50" : "text-gray-900"
                      }`}
                    >
                      {feature.title}
                    </Title>

                    <Paragraph
                      className={`m-0 leading-relaxed ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {feature.description}
                    </Paragraph>
                  </Space>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </section>
  );
}
