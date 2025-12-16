"use client";

import { useState } from 'react';

export default function Home() {
  const [content, setContent] = useState<string>("等待加载...");
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/hello');
      const data = await res.json();
      setContent(`消息: ${data.message} | 时间: ${data.time} | 幸运数字: ${data.luckyNumber}`);
    } catch {
      setContent("出错了！");
    }
    setLoading(false);
  };

  return (
    // 1. 最外层容器
    // min-h-screen: 最小高度占满屏幕
    // p-4: 手机上内边距小点
    // md:p-24: 电脑(md及以上)内边距大点
    // bg-gray-100: 浅灰色背景
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24 bg-gray-100">
      
      {/* 2. 标题区 */}
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        {/* text-3xl: 手机字体大 */}
        {/* md:text-5xl: 电脑字体超级大 */}
        {/* mb-8: 底部留白 */}
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 text-blue-600">
          全栈 Demo
        </h1>
      </div>

      {/* 3. 内容卡片 */}
      {/* w-full: 手机上占满宽度 */}
      {/* max-w-md: 电脑上限制最大宽度，不至于太宽 */}
      {/* bg-white: 白底 */}
      {/* rounded-xl: 圆角 */}
      {/* shadow-md: 阴影 */}
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
        
        {/* 卡片内容区 */}
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            服务器响应
          </div>
          
          {/* break-words: 防止手机上文字太长撑破容器 */}
          <p className="mt-2 text-slate-500 break-words">
            {content}
          </p>
        </div>

        {/* 按钮区 */}
        <div className="bg-gray-50 px-8 py-4">
          <button 
            onClick={fetchData}
            disabled={loading}
            // active:scale-95: 点击时有个缩小的动画，手机上手感很好
            // transition: 动画过渡
            // w-full: 手机上按钮通常要通栏，方便手指点击
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white 
              ${loading ? 'bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-700'} 
              transition duration-150 ease-in-out active:scale-95 text-lg`}
          >
            {loading ? '加载中...' : '点击呼叫后端'}
          </button>
        </div>
      </div>

      {/* 4. 底部补充信息 */}
      <div className="mt-8 text-center text-gray-400 text-sm">
        <p>试着改变浏览器窗口大小看看效果</p>
      </div>

    </main>
  );
}