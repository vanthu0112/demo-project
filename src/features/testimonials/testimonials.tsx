import { Card, Typography, Row, Col, Rate, Avatar, Button, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/theme/ThemeProvider";

const { Title, Paragraph, Text } = Typography;

export default function Testimonials() {
  const { t } = useTranslation("testimonials");
  const { isDark } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const testimonials = [
    {
      name: "Nguyễn Thu Hà",
      role: "Marketing Manager",
      content:
        "LearnPro đã thay đổi hoàn toàn cách tôi học tập. Hệ thống AI thông minh giúp tôi tập trung vào những gì thực sự quan trọng và tiết kiệm thời gian đáng kể.",
      avatar: "#2563EB",
    },
    {
      name: "Trần Minh Đức",
      role: "Software Developer",
      content:
        "Chất lượng video 4K và âm thanh crystal clear khiến việc học trở nên thú vị hơn bao giờ hết. Tôi đã hoàn thành 5 khóa học trong 3 tháng.",
      avatar: "#10B981",
    },
    {
      name: "Lê Thị Mai",
      role: "Business Owner",
      content:
        "Cộng đồng học tập rất tích cực và hỗ trợ. Tôi đã kết nối được với nhiều bạn cùng chí hướng và cùng nhau phát triển sự nghiệp.",
      avatar: "#7C3AED",
    },
    {
      name: "Phạm Văn Long",
      role: "Data Analyst",
      content:
        "Hệ thống hỗ trợ 24/7 thực sự tuyệt vời. Mỗi khi có thắc mắc, tôi luôn nhận được câu trả lời nhanh chóng và chuyên nghiệp.",
      avatar: "#F59E0B",
    },
    {
      name: "Hoàng Thị Lan",
      role: "Project Manager",
      content:
        "Chứng chỉ quốc tế từ LearnPro đã giúp tôi được tăng lương 40% và chuyển sang vị trí cao hơn trong công ty.",
      avatar: "#EF4444",
    },
    {
      name: "Nguyễn Hoàng Nam",
      role: "Student",
      content:
        "Interface rất thân thiện và dễ sử dụng. Tôi có thể học mọi lúc mọi nơi, kể cả khi đang di chuyển nhờ tính năng offline.",
      avatar: "#6366F1",
    },
  ];

  return (
    <section
      id="testimonials"
      className={`py-20 ${isDark ? "bg-gray-900" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Title level={2} className="mb-4">
            {t("testimonialsTitle")}
          </Title>
          <Paragraph
            className={`text-xl max-w-3xl mx-auto ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {t("testimonialsDescription")}
          </Paragraph>
        </div>

        <Row gutter={[32, 32]}>
          {testimonials.map((testimonial, index) => (
            <Col key={index} xs={24} md={12} lg={8}>
              <Card
                className={`h-full rounded-2xl border-none transition-all duration-300 hover:shadow-lg ${
                  isDark ? "bg-gray-800" : "bg-gray-50"
                }`}
                styles={{ body: { padding: "32px" } }}
              >
                <Space direction="vertical" size="middle" className="w-full">
                  <Rate disabled defaultValue={5} className="text-base" />

                  <Paragraph
                    className={`m-0 leading-relaxed text-base ${
                      isDark ? "text-gray-200" : "text-gray-700"
                    }`}
                  >
                    {testimonial.content}
                  </Paragraph>

                  <div className="flex items-center mt-4">
                    <Avatar
                      size={48}
                      style={{ backgroundColor: testimonial.avatar }}
                      className="mr-4 text-lg font-semibold"
                      icon={<UserOutlined />}
                    >
                      {testimonial.name.charAt(0)}
                    </Avatar>
                    <div>
                      <Text
                        strong
                        className={`block text-base ${
                          isDark ? "text-gray-50" : "text-gray-900"
                        }`}
                      >
                        {testimonial.name}
                      </Text>
                      <Text
                        className={`text-sm ${
                          isDark ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {testimonial.role}
                      </Text>
                    </div>
                  </div>
                </Space>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-16">
          <Card
            className="border-none rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600"
            styles={{ body: { padding: "48px 32px" } }}
          >
            <Space direction="vertical" size="large" className="w-full">
              <Title level={3} className="text-white m-0">
                {t("joinCommunity")}
              </Title>
              <Paragraph className="text-xl text-white opacity-90 m-0">
                {t("startJourney")}
              </Paragraph>
              <Button
                size="large"
                onClick={() => scrollToSection("contact")}
                className="bg-white text-blue-600 border-none rounded-xl h-12 text-base font-semibold px-8 hover:opacity-90"
              >
                {t("registerFree")}
              </Button>
            </Space>
          </Card>
        </div>
      </div>
    </section>
  );
}
