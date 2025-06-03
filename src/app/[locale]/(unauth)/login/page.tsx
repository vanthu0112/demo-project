"use client";

import { useState } from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Form, Input, Button, Checkbox, Divider } from "antd";
import Link from "next/link";
import { GoogleIcon } from "@/components/icons/GoogleIcon";
import { FacebookIcon, TechLearningIcon } from "@/components/icons";
import { TechIcons } from "@/components/icons/TechIcons";
import { useParams, useRouter } from "next/navigation";
import { ROUTES } from "@/constants/routes";
import { saveAccessToken } from "@/utils/cookiesHelper";
import { Login } from "@/services/login/loginServices";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const params = useParams();
  const currentLocale = params.locale as string;

  // Handle form submission
  const onFinish = async (data: { email: string; password: string }) => {
    setLoading(true);
    const response = await Login(data.email, data.password);
    if (response.AccessToken && response.IdToken) {
      setLoading(false);
      saveAccessToken(response.IdToken);
      router.push(`/${currentLocale}${ROUTES.HOME}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <header className="text-center">
          <div className="flex justify-center items-center mb-6">
            <TechLearningIcon className="h-10 w-10 text-blue-600" />
            <span className="ml-2 text-3xl font-bold text-gray-900">
              TechLearn Pro
            </span>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
            Đăng nhập tài khoản
          </h2>
          <p className="text-gray-600">
            Truy cập vào thư viện khóa học công nghệ của bạn
          </p>
        </header>

        {/* Login Form */}
        <section className="bg-white rounded-xl shadow-lg p-8">
          <Form
            name="login"
            layout="vertical"
            onFinish={onFinish}
            className="space-y-6"
            autoComplete="off"
            initialValues={{
              email: "AIC0001000",
              password: "Laplas12345",
            }}
          >
            <Form.Item
              label={
                <span className="text-sm font-medium text-gray-700">Email</span>
              }
              name="email"
              rules={[{ required: true, message: "Vui lòng nhập email!" }]}
            >
              <Input
                prefix={<TechIcons.User />}
                // type="email"
                placeholder="Nhập email của bạn"
                className="w-full px-3 py-3 border border-gray-300 rounded-lg"
                autoComplete="email"
              />
            </Form.Item>

            <Form.Item
              label={
                <span className="text-sm font-medium text-gray-700">
                  Mật khẩu
                </span>
              }
              name="password"
              rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
            >
              <Input.Password
                prefix={<TechIcons.Lock />}
                placeholder="Nhập mật khẩu"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
                className="w-full px-3 py-3 border border-gray-300 rounded-lg"
                autoComplete="current-password"
              />
            </Form.Item>

            <div className="flex items-center justify-between mb-4">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox className="text-blue-600">Ghi nhớ đăng nhập</Checkbox>
              </Form.Item>
              <Link
                href="/forgot-password"
                className="text-sm font-medium text-blue-600 hover:text-blue-500"
              >
                Quên mật khẩu?
              </Link>
            </div>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                className="w-full h-12 flex justify-center py-3 px-4 rounded-lg text-xl font-bold"
              >
                Đăng nhập
              </Button>
            </Form.Item>

            <Divider plain className="text-gray-500">
              Hoặc đăng nhập bằng
            </Divider>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <Button
                type="default"
                icon={<GoogleIcon />}
                className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                htmlType="button"
                block
              >
                <span className="ml-2">Google</span>
              </Button>
              <Button
                type="default"
                icon={<FacebookIcon />}
                className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                htmlType="button"
                block
              >
                <span className="ml-2">Facebook</span>
              </Button>
            </div>

            <div className="text-center mt-6">
              <p className="text-sm text-gray-600">
                Chưa có tài khoản?{" "}
                <Link
                  href="/register"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Đăng ký ngay
                </Link>
              </p>
            </div>
          </Form>
        </section>

        {/* Features */}
        <section className="bg-white rounded-xl shadow-lg p-6 mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
            Tại sao chọn TechLearn Pro?
          </h3>
          <ul className="space-y-3">
            {[
              "Hơn 100+ khóa học công nghệ chất lượng cao",
              "Chứng chỉ được công nhận trong ngành",
              "Hỗ trợ học tập 24/7 từ chuyên gia",
              "Cập nhật nội dung theo xu hướng mới nhất",
            ].map((feature, idx) => (
              <li key={idx} className="flex items-center">
                <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
                <span className="text-sm text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default LoginPage;
