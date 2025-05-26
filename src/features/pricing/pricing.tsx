import { Button, Card, Tag, Typography, Row, Col, Space, List } from "antd";
import { CheckOutlined, CrownOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/theme/ThemeProvider";

const { Title, Paragraph, Text } = Typography;

export default function Pricing() {
  const { t } = useTranslation("pricing");
  const { isDark } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const plans = [
    {
      name: t("basicPlan"),
      description: t("basicDescription"),
      price: "299,000₫",
      period: "/tháng",
      features: [
        "Truy cập 100+ khóa học",
        "Video HD chất lượng cao",
        "Hỗ trợ email",
        "Chứng chỉ hoàn thành",
      ],
      buttonText: t("getStarted"),
      buttonType: "default" as const,
      popular: false,
    },
    {
      name: t("proPlan"),
      description: t("proDescription"),
      price: "599,000₫",
      period: "/tháng",
      features: [
        "Truy cập TOÀN BỘ khóa học",
        "Video 4K + âm thanh premium",
        "AI cá nhân hóa học tập",
        "Hỗ trợ ưu tiên 24/7",
        "Chứng chỉ quốc tế",
        "Cộng đồng học tập",
      ],
      buttonText: t("getStarted"),
      buttonType: "primary" as const,
      popular: true,
    },
    {
      name: t("enterprisePlan"),
      description: t("enterpriseDescription"),
      price: "1,299,000₫",
      period: "/tháng",
      features: [
        "Tất cả tính năng Pro",
        "Quản lý team không giới hạn",
        "Analytics và báo cáo",
        "Khóa học tùy chỉnh",
        "Dedicated account manager",
      ],
      buttonText: t("contactConsult"),
      buttonType: "default" as const,
      popular: false,
    },
  ];

  return (
    <section
      id="pricing"
      className={`py-20 ${isDark ? "bg-gray-800" : "bg-gray-50"}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Title level={2} className="mb-4">
            {t("choosePlan")}
          </Title>
          <Paragraph
            className={`text-xl max-w-3xl mx-auto ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {t("pricingDescription")}
          </Paragraph>
        </div>

        <Row gutter={[32, 32]} justify="center">
          {plans.map((plan, index) => (
            <Col key={index} xs={24} md={8}>
              <Card
                className={`h-full rounded-2xl transition-all duration-300 hover:shadow-xl relative ${
                  plan.popular
                    ? "border-2 border-blue-600 shadow-2xl transform scale-105"
                    : "border border-gray-200"
                }`}
                styles={{ body: { padding: "32px" } }}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Tag
                      color="blue"
                      icon={<CrownOutlined />}
                      className="px-6 py-2 text-sm font-bold"
                    >
                      {t("mostPopular")}
                    </Tag>
                  </div>
                )}

                <Space
                  direction="vertical"
                  size="large"
                  className="w-full text-center"
                >
                  <div>
                    <Title level={3} className="m-0 mb-2">
                      {plan.name}
                    </Title>
                    <Paragraph
                      className={`m-0 mb-6 ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {plan.description}
                    </Paragraph>
                    <div className="mb-6">
                      <Text
                        className={`text-4xl font-bold ${
                          plan.popular
                            ? "text-blue-600"
                            : isDark
                            ? "text-gray-50"
                            : "text-gray-900"
                        }`}
                      >
                        {plan.price}
                      </Text>
                      <Text
                        className={isDark ? "text-gray-300" : "text-gray-600"}
                      >
                        {plan.period}
                      </Text>
                    </div>
                  </div>

                  <List
                    dataSource={plan.features}
                    renderItem={(feature) => (
                      <List.Item className="py-2 border-none">
                        <Space>
                          <CheckOutlined className="text-green-500 text-base" />
                          <Text
                            className={
                              isDark ? "text-gray-200" : "text-gray-700"
                            }
                          >
                            {feature}
                          </Text>
                        </Space>
                      </List.Item>
                    )}
                  />

                  <Button
                    type={plan.buttonType}
                    size="large"
                    onClick={() => scrollToSection("contact")}
                    className="w-full h-12 rounded-xl text-base font-semibold"
                  >
                    {plan.buttonText}
                  </Button>
                </Space>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-12">
          <Paragraph
            className={`mb-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}
          >
            {t("moneyBackGuarantee")}
          </Paragraph>
          <Space size="large" wrap className="justify-center">
            <Space>
              <CheckOutlined className="text-green-500" />
              <Text className={isDark ? "text-gray-200" : "text-gray-700"}>
                {t("sslSecurity")}
              </Text>
            </Space>
            <Space>
              <CheckOutlined className="text-green-500" />
              <Text className={isDark ? "text-gray-200" : "text-gray-700"}>
                {t("securePayment")}
              </Text>
            </Space>
            <Space>
              <CheckOutlined className="text-green-500" />
              <Text className={isDark ? "text-gray-200" : "text-gray-700"}>
                {t("qualityGuarantee")}
              </Text>
            </Space>
          </Space>
        </div>
      </div>
    </section>
  );
}
