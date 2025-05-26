import {
  Button,
  Card,
  Form,
  Input,
  Checkbox,
  Typography,
  Row,
  Col,
  Space,
  message,
  Select,
} from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined,
  SendOutlined,
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { useMutation } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/theme/ThemeProvider";
import { InsertContact } from "@/shared/schema";
const { Title, Paragraph } = Typography;
const { TextArea } = Input;
const { Option } = Select;

export default function Contact() {
  const [form] = Form.useForm();
  const { t } = useTranslation("contact");
  const { isDark } = useTheme();

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      return await fetch("/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    },
    onSuccess: () => {
      message.success("Cảm ơn bạn đã liên hệ!");
      form.resetFields();
    },
    onError: () => {
      message.error("Có lỗi xảy ra. Vui lòng thử lại.");
    },
  });

  const onSubmit = (values: InsertContact) => {
    contactMutation.mutate(values);
  };

  const contactInfo = [
    {
      icon: <PhoneOutlined className="text-2xl text-white" />,
      title: t("hotline"),
      value: "1900-1234 (Miễn phí)",
      bgColor: "bg-blue-600",
    },
    {
      icon: <MailOutlined className="text-2xl text-white" />,
      title: t("emailContact"),
      value: "support@learnpro.vn",
      bgColor: "bg-purple-600",
    },
    {
      icon: <EnvironmentOutlined className="text-2xl text-white" />,
      title: t("address"),
      value: "123 Nguyễn Huệ, Q.1, TP.HCM",
      bgColor: "bg-amber-500",
    },
    {
      icon: <ClockCircleOutlined className="text-2xl text-white" />,
      title: t("workingHours"),
      value: "24/7 - Hỗ trợ liên tục",
      bgColor: "bg-green-500",
    },
  ];

  const socialLinks = [
    { icon: <FacebookOutlined />, href: "#", bgColor: "bg-blue-600" },
    { icon: <InstagramOutlined />, href: "#", bgColor: "bg-pink-500" },
    { icon: <YoutubeOutlined />, href: "#", bgColor: "bg-red-600" },
    { icon: <LinkedinOutlined />, href: "#", bgColor: "bg-blue-500" },
  ];

  return (
    <section
      id="contact"
      className={`py-20 ${isDark ? "bg-gray-800" : "bg-gray-50"}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <Row gutter={[48, 48]}>
          <Col xs={24} lg={12}>
            <Space direction="vertical" size="large" className="w-full">
              <div>
                <Title level={2} className="mb-4">
                  {t("contactUs")}
                </Title>
                <Paragraph
                  className={`text-xl ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {t("contactDescription")}
                </Paragraph>
              </div>

              <Space direction="vertical" size="large" className="w-full">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${info.bgColor}`}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <Title level={5} className="m-0 mb-1">
                        {info.title}
                      </Title>
                      <Paragraph
                        className={`m-0 ${
                          isDark ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {info.value}
                      </Paragraph>
                    </div>
                  </div>
                ))}
              </Space>

              <div className="pt-6">
                <Title level={4} className="mb-4">
                  {t("followUs")}
                </Title>
                <Space size="middle">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl transition-all duration-300 hover:opacity-80 no-underline ${social.bgColor}`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </Space>
              </div>
            </Space>
          </Col>

          <Col xs={24} lg={12}>
            <Card
              className="rounded-2xl shadow-lg border-none"
              styles={{ body: { padding: "32px" } }}
            >
              <Title level={3} className="mb-6">
                {t("sendMessage")}
              </Title>

              <Form
                form={form}
                layout="vertical"
                onFinish={onSubmit}
                initialValues={{
                  newsletter: false,
                }}
              >
                <Form.Item
                  name="fullName"
                  label={`${t("fullName")} *`}
                  rules={[
                    { required: true, message: "Vui lòng nhập họ và tên!" },
                    { min: 2, message: "Họ và tên phải có ít nhất 2 ký tự!" },
                  ]}
                >
                  <Input
                    placeholder={t("fullNamePlaceholder")}
                    className="rounded-xl h-12 text-base"
                  />
                </Form.Item>

                <Form.Item
                  name="email"
                  label="Email *"
                  rules={[
                    { required: true, message: "Vui lòng nhập email!" },
                    { type: "email", message: "Email không hợp lệ!" },
                  ]}
                >
                  <Input
                    placeholder={t("emailPlaceholder")}
                    className="rounded-xl h-12 text-base"
                  />
                </Form.Item>

                <Form.Item name="phone" label={t("phone")}>
                  <Input
                    placeholder={t("phonePlaceholder")}
                    className="rounded-xl h-12 text-base"
                  />
                </Form.Item>

                <Form.Item name="course" label={t("courseInterested")}>
                  <Select
                    placeholder={t("selectCourse")}
                    className="h-12"
                    size="large"
                  >
                    <Option value="web-development">Lập trình Web</Option>
                    <Option value="data-science">Data Science</Option>
                    <Option value="digital-marketing">Digital Marketing</Option>
                    <Option value="ui-ux-design">UI/UX Design</Option>
                    <Option value="business-analytics">
                      Business Analytics
                    </Option>
                  </Select>
                </Form.Item>

                <Form.Item name="message" label={t("message")}>
                  <TextArea
                    rows={4}
                    placeholder={t("messagePlaceholder")}
                    className="rounded-xl text-base"
                  />
                </Form.Item>

                <Form.Item name="newsletter" valuePropName="checked">
                  <Checkbox className="text-base">{t("newsletter")}</Checkbox>
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={contactMutation.isPending}
                    icon={<SendOutlined />}
                    size="large"
                    className="w-full h-12 rounded-xl text-base font-semibold"
                  >
                    {contactMutation.isPending
                      ? t("sending")
                      : t("sendContact")}
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
}
