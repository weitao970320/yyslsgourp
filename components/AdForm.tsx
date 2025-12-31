import { useState } from 'react';
import { Ad } from '../App';
import { PlusCircle } from 'lucide-react';

interface AdFormProps {
  onSubmit: (ad: Omit<Ad, 'id'>) => void;
  onCancel: () => void;
}

export function AdForm({ onSubmit, onCancel }: AdFormProps) {
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [isVip, setIsVip] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) {
      alert('请输入广告内容');
      return;
    }

    onSubmit({
      content: content.trim(),
      category: category.trim() || undefined,
      isVip
    });

    // Reset form
    setContent('');
    setCategory('');
    setIsVip(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="text-center mb-6">
        <h3 className="text-2xl bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent font-bold">
          添加新广告
        </h3>
        <div className="mt-2 flex items-center justify-center gap-2">
          <div className="h-1 w-12 bg-gradient-to-r from-red-600 to-pink-600 rounded-full"></div>
          <span className="text-xl">✨</span>
          <div className="h-1 w-12 bg-gradient-to-r from-pink-600 to-red-600 rounded-full"></div>
        </div>
      </div>

      <div>
        <label className="block text-gray-700 mb-2">
          分类（可选）
        </label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder="例如：重点广告、以下宝聘侠缘、以下宝聘徒✖️"
        />
        <p className="text-sm text-gray-500 mt-1">
          相同分类的广告会自动分组显示
        </p>
      </div>

      <div>
        <label className="block text-gray-700 mb-2">
          广告内容 <span className="text-red-500">*</span>
        </label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 min-h-32"
          placeholder="输入广告内容...&#10;支持多行文本"
          required
        />
      </div>

      <div className="flex items-center gap-3 bg-gradient-to-r from-red-50 to-pink-50 p-4 rounded-lg border-2 border-red-200">
        <input
          type="checkbox"
          id="vip-checkbox"
          checked={isVip}
          onChange={(e) => setIsVip(e.target.checked)}
          className="size-5 text-red-600 rounded"
        />
        <label htmlFor="vip-checkbox" className="text-gray-700 flex-1">
          <span className="block">设为VIP广告</span>
          <span className="text-sm text-gray-500">VIP广告将以红色加粗的大字体显示</span>
        </label>
      </div>

      <div className="flex gap-3 pt-2">
        <button
          type="submit"
          className="flex-1 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white py-3 rounded-lg transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
        >
          <PlusCircle className="size-5" />
          添加广告
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-6 bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 rounded-lg transition-all hover:scale-105 shadow"
        >
          取消
        </button>
      </div>
    </form>
  );
}