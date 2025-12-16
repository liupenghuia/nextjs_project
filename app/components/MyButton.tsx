// components/MyButton.tsx
// 因为这按钮要点击，所以必须是客户端组件
"use client";

// 接收父组件传来的 props (参数)
export default function MyButton({
  onClick,
  loading,
}: {
  onClick: any;
  loading: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="bg-blue-500 text-white p-2 rounded"
    >
      {loading ? "加载中..." : "点击我"}
    </button>
  );
}
