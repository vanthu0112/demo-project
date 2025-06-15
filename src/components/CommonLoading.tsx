import { Spin } from "antd";

export function CommonLoading({ fullscreen = false }) {
  return (
    <div
      className={
        fullscreen
          ? "fixed inset-0 flex items-center justify-center bg-white/70 z-50"
          : "flex items-center justify-center"
      }
    >
      <Spin size="large" className="text-center" />
    </div>
  );
}
