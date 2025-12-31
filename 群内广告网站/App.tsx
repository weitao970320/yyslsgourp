import { useState } from 'react';
import { AdList } from './components/AdList';
import { AdForm } from './components/AdForm';
import { MusicPlayer } from './components/MusicPlayer';
import { Decorations } from './components/Decorations';
import { Modal } from './components/Modal';
import { Settings, Sparkles } from 'lucide-react';

export interface Ad {
  id: string;
  content: string;
  isVip: boolean;
  category?: string;
}

function App() {
  const [ads, setAds] = useState<Ad[]>([
    {
      id: '1',
      content: '成功禁闭泡菜✖️小羊编内师徒/知知✖️山外左编内快缘\n泡菜宝✖️酸辣鱼宝 哪老师✖️小羊老师编内师徒\n岭野✖️猫老师编外师徒 知知✖️星月老师 编外师徒\n猫说不知✖️燕浮星编内徒弟 泡菜✖️猫说不知编内师博\n岭野✖️阮星叶 泡菜 ✖️ 知知(编内师徒)',
      isVip: false
    },
    {
      id: '2',
      content: '编（半A长草期）找编外师博/白衣将世聘师父',
      isVip: true,
      category: '重点广告'
    },
    {
      id: '3',
      content: '柳掷影、栀谊、酸辣鱼',
      isVip: false,
      category: '以下宝聘侠缘'
    },
    {
      id: '4',
      content: '嫒玖又尊侠缘',
      isVip: true,
      category: '以下宝聘徒✖️'
    },
    {
      id: '5',
      content: '腰骨、冬季、编',
      isVip: false,
      category: '以下宝聘徒✖️'
    },
    {
      id: '6',
      content: '冬季(D爱打麻将的)、洋羊米(D师父师姐师兄)、Dii(D个师父)、羊舌汤(聘师父)、淋冬又何时(聘师博)',
      isVip: true,
      category: '以下宝涵响门'
    },
    {
      id: '7',
      content: '步向远、不咏月、董艳、归宝、青木枝(加分符·梨)、缨',
      isVip: false,
      category: '以下宝涵徒弟'
    }
  ]);

  const [showForm, setShowForm] = useState(false);

  const addAd = (ad: Omit<Ad, 'id'>) => {
    const newAd = {
      ...ad,
      id: Date.now().toString()
    };
    setAds([...ads, newAd]);
    setShowForm(false);
  };

  const deleteAd = (id: string) => {
    setAds(ads.filter(ad => ad.id !== id));
  };

  const updateAd = (id: string, updatedAd: Partial<Ad>) => {
    setAds(ads.map(ad => ad.id === id ? { ...ad, ...updatedAd } : ad));
  };

  return (
    <div className="min-h-screen bg-[#1a0a05] relative overflow-hidden">
      {/* 背景纹理 */}
      <div className="fixed inset-0 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMTAwIDAgTCAwIDAgMCAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] pointer-events-none"></div>
      
      {/* 渐变背景层 */}
      <div className="fixed inset-0 bg-gradient-to-br from-red-950/40 via-amber-950/30 to-yellow-950/40 pointer-events-none"></div>
      
      {/* 装饰元素 */}
      <Decorations />
      
      {/* 音乐播放器 */}
      <MusicPlayer />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-red-900 via-red-800 to-red-900 shadow-2xl relative z-20 border-b-4 border-yellow-600">
        {/* 中国结装饰 */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-6xl animate-float pointer-events-none">
          🏮
        </div>
        
        {/* 祥云纹理 */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCw1MCBRNTAsMjAgMTAwLDUwIFQyMDAsNTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==')] bg-repeat-x"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 py-12 relative z-10">
          <div className="flex items-center justify-center gap-4 mb-6 animate-fadeIn">
            <div className="text-4xl animate-pulse">🎊</div>
            <Sparkles className="size-10 text-yellow-300 animate-pulse" />
            <h1 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-200 drop-shadow-lg text-4xl font-bold tracking-wider">
              欢迎加入权威暖心窝子群
            </h1>
            <Sparkles className="size-10 text-yellow-300 animate-pulse" />
            <div className="text-4xl animate-pulse">🎊</div>
          </div>
          
          {/* 卷轴效果的内容框 */}
          <div className="relative bg-gradient-to-br from-amber-100 via-yellow-50 to-amber-100 rounded-2xl p-8 border-4 border-yellow-700 shadow-2xl animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            {/* 卷轴顶部 */}
            <div className="absolute -top-3 left-8 right-8 h-6 bg-gradient-to-r from-yellow-800 via-yellow-700 to-yellow-800 rounded-t-lg border-2 border-yellow-900"></div>
            <div className="absolute -bottom-3 left-8 right-8 h-6 bg-gradient-to-r from-yellow-800 via-yellow-700 to-yellow-800 rounded-b-lg border-2 border-yellow-900"></div>
            
            {/* 印章装饰 */}
            <div className="absolute -right-4 -top-4 w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-red-800 shadow-lg transform rotate-12">
              群公告
            </div>
            
            <p className="text-center text-gray-800 leading-loose text-lg">
              这里应有尽有，全员鬼才，多才多艺，上能跟工拍照打本调号，下能弹琴唱歌仰天长啸，让我们一起上班摸鱼下班畅游，愉快养老！
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12 relative z-20">
        {/* Title Section */}
        <div className="relative animate-fadeIn" style={{ animationDelay: '0.3s' }}>
          {/* 中国风边框装饰 */}
          <div className="absolute -inset-4 bg-gradient-to-br from-red-600/20 via-yellow-600/20 to-red-600/20 rounded-3xl blur-xl"></div>
          
          <div className="relative bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-50 rounded-3xl shadow-2xl p-10 border-8 border-double border-red-700">
            {/* 四角装饰 */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-yellow-600 rounded-tl-2xl"></div>
            <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-yellow-600 rounded-tr-2xl"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-yellow-600 rounded-bl-2xl"></div>
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-yellow-600 rounded-br-2xl"></div>
            
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="text-5xl animate-pulse">▶</div>
              <h2 className="text-center bg-gradient-to-r from-red-700 via-red-600 to-red-700 bg-clip-text text-transparent text-4xl font-bold drop-shadow tracking-wider">
                插播本群广告
              </h2>
              <div className="text-5xl animate-pulse">◀</div>
            </div>
            
            {/* 装饰性分割线 */}
            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl">🌸</span>
              <div className="flex-1 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
              <span className="text-3xl">🎋</span>
              <div className="flex-1 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
              <span className="text-3xl">🌸</span>
            </div>

            {/* Ad List */}
            <AdList 
              ads={ads} 
              onDelete={deleteAd}
              onUpdate={updateAd}
            />
            
            {/* 装饰性分割线 */}
            <div className="flex items-center gap-3 mt-8">
              <span className="text-3xl">🌸</span>
              <div className="flex-1 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
              <span className="text-3xl">🎋</span>
              <div className="flex-1 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
              <span className="text-3xl">🌸</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex justify-center gap-4 mt-8 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
          <button
            onClick={() => setShowForm(true)}
            className="relative group bg-gradient-to-r from-red-700 via-red-600 to-red-700 hover:from-red-800 hover:via-red-700 hover:to-red-800 text-yellow-100 px-12 py-5 rounded-full shadow-2xl transition-all hover:scale-110 flex items-center gap-3 border-4 border-yellow-600 overflow-hidden"
          >
            {/* 按钮光效 */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            <Settings className="size-7 relative z-10" />
            <span className="text-xl font-bold relative z-10 tracking-wide">添加广告</span>
            <span className="text-2xl relative z-10">📢</span>
          </button>
        </div>
      </div>
      
      {/* Modal Form */}
      <Modal isOpen={showForm} onClose={() => setShowForm(false)}>
        <AdForm onSubmit={addAd} onCancel={() => setShowForm(false)} />
      </Modal>
    </div>
  );
}

export default App;