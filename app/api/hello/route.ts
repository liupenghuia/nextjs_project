import { NextResponse } from "next/server";

// 这是一个 GET 请求的处理函数 PP
// 当浏览器或前端访问 /api/hello 时，如果不带参数，就会触发这个函数
export async function GET() {
  // 模拟从数据库拿数据
  const data = {
    message: "你好！这是来自后端服务器的消息",
    time: new Date().toLocaleString(),
    luckyNumber: Math.floor(Math.random() * 100),
  };

  // 把对象变成 JSON 返回回去
  return NextResponse.json(data);
}

// 确保 API 路由在构建时被正确识别
export const dynamic = 'force-dynamic';
