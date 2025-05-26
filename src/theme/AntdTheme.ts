import { theme } from "antd";

export const lightTheme = {
  algorithm: theme.defaultAlgorithm,
  token: {
    colorPrimary: "#2563EB", // blue-600
    colorSuccess: "#10B981", // emerald-500
    colorWarning: "#F59E0B", // amber-500
    colorError: "#EF4444", // red-500
    colorInfo: "#3B82F6", // blue-500
    borderRadius: 8,
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
    fontSize: 14,
    lineHeight: 1.5,
    colorBgContainer: "#ffffff",
    colorBgLayout: "#f8fafc",
    colorText: "#1f2937",
    colorTextSecondary: "#6b7280",
    colorBorder: "#e5e7eb",
  },
  components: {
    Button: {
      borderRadius: 8,
      fontWeight: 500,
    },
    Card: {
      borderRadius: 12,
    },
    Form: {
      itemMarginBottom: 24,
    },
    Input: {
      borderRadius: 8,
    },
    Select: {
      borderRadius: 8,
    },
    Menu: {
      borderRadius: 8,
    },
  },
};

export const darkTheme = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: "#2563EB", // blue-600
    colorSuccess: "#10B981", // emerald-500
    colorWarning: "#F59E0B", // amber-500
    colorError: "#EF4444", // red-500
    colorInfo: "#3B82F6", // blue-500
    borderRadius: 8,
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
    fontSize: 14,
    lineHeight: 1.5,
    colorBgContainer: "#1f2937",
    colorBgLayout: "#111827",
    colorText: "#f9fafb",
    colorTextSecondary: "#d1d5db",
    colorBorder: "#374151",
  },
  components: {
    Button: {
      borderRadius: 8,
      fontWeight: 500,
    },
    Card: {
      borderRadius: 12,
    },
    Form: {
      itemMarginBottom: 24,
    },
    Input: {
      borderRadius: 8,
    },
    Select: {
      borderRadius: 8,
    },
    Menu: {
      borderRadius: 8,
    },
  },
};
