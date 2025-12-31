export function Decorations() {
  return (
    <>
      {/* 顶部装饰云朵和仙鹤 */}
      <div className="fixed top-0 left-0 right-0 pointer-events-none overflow-hidden h-32 z-10">
        <div className="absolute top-4 left-[10%] text-6xl opacity-40 animate-float">☁️</div>
        <div className="absolute top-8 left-[30%] text-4xl opacity-30 animate-float" style={{ animationDelay: '1s' }}>☁️</div>
        <div className="absolute top-2 right-[20%] text-5xl opacity-35 animate-float" style={{ animationDelay: '2s' }}>☁️</div>
        <div className="absolute top-10 right-[5%] text-3xl opacity-25 animate-float" style={{ animationDelay: '0.5s' }}>☁️</div>
      </div>

      {/* 侧边装饰竹子 */}
      <div className="fixed left-8 top-1/4 pointer-events-none z-10 opacity-60">
        <div className="text-6xl animate-float">🎋</div>
      </div>
      <div className="fixed right-8 top-1/3 pointer-events-none z-10 opacity-60">
        <div className="text-6xl animate-float" style={{ animationDelay: '1.5s' }}>🎋</div>
      </div>

      {/* 装饰性灯笼 */}
      <div className="fixed left-12 top-[12%] pointer-events-none z-10">
        <div className="text-6xl animate-float" style={{ animationDelay: '0.8s' }}>🏮</div>
      </div>
      <div className="fixed right-12 top-[12%] pointer-events-none z-10">
        <div className="text-6xl animate-float" style={{ animationDelay: '1.8s' }}>🏮</div>
      </div>

      {/* 底部装饰花朵 */}
      <div className="fixed bottom-12 left-[15%] pointer-events-none z-10 opacity-70">
        <div className="text-5xl animate-float" style={{ animationDelay: '0.3s' }}>🌸</div>
      </div>
      <div className="fixed bottom-20 right-[25%] pointer-events-none z-10 opacity-70">
        <div className="text-4xl animate-float" style={{ animationDelay: '1.2s' }}>🌸</div>
      </div>
      <div className="fixed bottom-16 left-[40%] pointer-events-none z-10 opacity-60">
        <div className="text-3xl animate-float" style={{ animationDelay: '2s' }}>🌺</div>
      </div>

      {/* 闪烁的星星 */}
      <div className="fixed top-[25%] left-[8%] pointer-events-none z-10">
        <div className="text-3xl text-yellow-400 animate-sparkle">✨</div>
      </div>
      <div className="fixed top-[60%] right-[12%] pointer-events-none z-10">
        <div className="text-3xl text-yellow-400 animate-sparkle" style={{ animationDelay: '0.7s' }}>✨</div>
      </div>
      <div className="fixed top-[45%] left-[15%] pointer-events-none z-10">
        <div className="text-2xl text-yellow-400 animate-sparkle" style={{ animationDelay: '1.4s' }}>✨</div>
      </div>
      
      {/* 中国风扇子装饰 */}
      <div className="fixed top-[70%] left-[5%] pointer-events-none z-10 opacity-50">
        <div className="text-4xl animate-float" style={{ animationDelay: '1s' }}>🪭</div>
      </div>
      <div className="fixed top-[55%] right-[6%] pointer-events-none z-10 opacity-50">
        <div className="text-4xl animate-float" style={{ animationDelay: '2.5s' }}>🪭</div>
      </div>
    </>
  );
}