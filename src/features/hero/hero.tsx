import { Button, Tag, Typography, Space, Row, Col, Card } from "antd";
import {
  StarFilled,
  PlayCircleOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/theme/ThemeProvider";
const { Title, Paragraph, Text } = Typography;

export default function Hero() {
  const { t } = useTranslation("hero");
  const { isDark } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      className={`pt-20 pb-16 min-h-screen flex items-center ${
        isDark
          ? "bg-gradient-to-br from-gray-800 via-gray-900 to-purple-900"
          : "bg-gradient-to-br from-blue-50 via-white to-purple-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <Row gutter={[48, 48]} align="middle">
          <Col xs={24} lg={12}>
            <Space direction="vertical" size="large" className="w-full">
              <div>
                <Tag
                  color="blue"
                  icon={<StarFilled />}
                  className="px-4 py-2 text-sm mb-4"
                >
                  {t("topPlatform")}
                </Tag>

                <Title
                  level={1}
                  className={`!text-5xl md:text-5xl lg:text-6xl leading-tight mb-4 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {t("heroTitle")}{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {t("heroTitleHighlight")}
                  </span>
                </Title>

                <Paragraph
                  className={`text-xl leading-relaxed mb-8 ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {t("heroDescription")}
                </Paragraph>
              </div>

              <Space size="middle" wrap>
                <Button
                  type="primary"
                  size="large"
                  icon={<PlayCircleOutlined />}
                  onClick={() => scrollToSection("contact")}
                  className="h-12 px-8 rounded-xl text-base font-semibold"
                >
                  {t("startLearningFree")}
                </Button>
                <Button
                  size="large"
                  icon={<VideoCameraOutlined />}
                  className="h-12 px-8 rounded-xl text-base font-semibold"
                >
                  {t("watchDemo")}
                </Button>
              </Space>

              <Space size="large" wrap className="pt-4">
                <div className="flex items-center gap-3">
                  <div className="flex -ml-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-2 border-white" />
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-blue-500 border-2 border-white -ml-2" />
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border-2 border-white -ml-2" />
                  </div>
                  <Text type="secondary">
                    <Text strong>50,000+</Text> {t("studentsCount")}
                  </Text>
                </div>

                <div className="flex items-center gap-2">
                  <Space>
                    {[...Array(5)].map((_, i) => (
                      <StarFilled key={i} className="text-yellow-500 text-lg" />
                    ))}
                  </Space>
                  <Text type="secondary">{t("rating")}</Text>
                </div>
              </Space>
            </Space>
          </Col>

          <Col xs={24} lg={12}>
            <div className="relative">
              <Card className="rounded-2xl shadow-2xl">
                <Space direction="vertical" size="large" className="w-full">
                  <div className="flex justify-between items-center">
                    <Title level={3} className="m-0">
                      {t("learningDashboard")}
                    </Title>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                      <Text className="text-green-500 font-semibold">
                        99% {t("completion")}
                      </Text>
                    </div>
                  </div>

                  <Space direction="vertical" size="middle" className="w-full">
                    <Card size="small" className="bg-blue-50">
                      <div className="flex justify-between items-center">
                        <div>
                          <Text
                            className={`text-xl leading-relaxed mb-8 ${
                              isDark ? "text-gray-800" : "text-gray-300"
                            }`}
                            strong
                          >
                            {t("webDevelopment")}
                          </Text>
                          <div>
                            <Text
                              className={`text-xl leading-relaxed mb-8 ${
                                isDark ? "!text-gray-800" : "text-gray-300"
                              }`}
                              type="secondary"
                            >
                              12/12 bài học
                            </Text>
                          </div>
                        </div>
                        <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
                          <PlayCircleOutlined className="text-white text-3xl" />
                        </div>
                      </div>
                    </Card>

                    <Card size="small" className="bg-purple-50">
                      <div className="flex justify-between items-center">
                        <div>
                          <Text
                            className={`text-xl leading-relaxed mb-8 ${
                              isDark ? "text-gray-800" : "text-gray-300"
                            }`}
                            strong
                          >
                            {t("dataScience")}
                          </Text>
                          <div>
                            <Text
                              className={`text-xl leading-relaxed mb-8 ${
                                isDark ? "!text-gray-800" : "text-gray-300"
                              }`}
                              type="secondary"
                            >
                              8/15 bài học
                            </Text>
                          </div>
                        </div>
                        <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center">
                          <PlayCircleOutlined className="text-white text-3xl" />
                        </div>
                      </div>
                    </Card>
                  </Space>
                </Space>
              </Card>

              <Card
                size="small"
                className="absolute -top-4 -right-4 rounded-xl shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <Text className="text-xs font-semibold">
                    99% {t("completion")}
                  </Text>
                </div>
              </Card>

              <Card
                size="small"
                className="absolute -bottom-4 -left-4 rounded-xl shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <StarFilled className="text-yellow-500 text-base" />
                  <Text className="text-xs font-semibold">
                    {t("aiCertificate")}
                  </Text>
                </div>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}
