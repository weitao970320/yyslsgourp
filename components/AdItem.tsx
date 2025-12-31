import { useState } from "react";
import { Ad } from "../App";
import { Trash2, Edit2, Check, X } from "lucide-react";

interface AdItemProps {
  ad: Ad;
  onDelete: (id: string) => void;
  onUpdate: (id: string, updatedAd: Partial<Ad>) => void;
  showDivider?: boolean;
}

export function AdItem({
  ad,
  onDelete,
  onUpdate,
  showDivider,
}: AdItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(ad.content);
  const [editCategory, setEditCategory] = useState(
    ad.category || "",
  );
  const [editIsVip, setEditIsVip] = useState(ad.isVip);

  const handleSave = () => {
    onUpdate(ad.id, {
      content: editContent,
      category: editCategory || undefined,
      isVip: editIsVip,
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditContent(ad.content);
    setEditCategory(ad.category || "");
    setEditIsVip(ad.isVip);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="bg-gradient-to-br from-red-50 via-amber-50 to-yellow-50 rounded-xl p-5 space-y-3 border-4 border-red-300 shadow-lg">
        <div>
          <label className="block text-base text-gray-700 mb-2 font-semibold">
            分类（可选）
          </label>
          <input
            type="text"
            value={editCategory}
            onChange={(e) => setEditCategory(e.target.value)}
            className="w-full px-4 py-3 border-2 border-red-300 rounded-lg bg-white focus:border-red-500 focus:outline-none"
            placeholder="例如：重点广告、以下宝聘侠缘"
          />
        </div>
        <div>
          <label className="block text-base text-gray-700 mb-2 font-semibold">
            广告内容
          </label>
          <textarea
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            className="w-full px-4 py-3 border-2 border-red-300 rounded-lg min-h-24 bg-white focus:border-red-500 focus:outline-none"
            placeholder="输入广告内容..."
          />
        </div>
        <div className="flex items-center gap-3 bg-red-100 p-3 rounded-lg border-2 border-red-300">
          <input
            type="checkbox"
            id={`vip-${ad.id}`}
            checked={editIsVip}
            onChange={(e) => setEditIsVip(e.target.checked)}
            className="size-5"
          />
          <label
            htmlFor={`vip-${ad.id}`}
            className="text-base text-gray-800 font-semibold"
          >
            VIP广告（红色加粗显示）
          </label>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handleSave}
            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-5 py-3 rounded-lg flex items-center gap-2 transition-all hover:scale-105 shadow-lg border-2 border-green-800"
          >
            <Check className="size-5" />
            保存
          </button>
          <button
            onClick={handleCancel}
            className="bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white px-5 py-3 rounded-lg flex items-center gap-2 transition-all hover:scale-105 shadow-lg border-2 border-gray-700"
          >
            <X className="size-5" />
            取消
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative py-2">
      <div
        className={`
        ${
          ad.isVip
            ? "text-red-700 text-2xl font-bold drop-shadow-md"
            : "text-gray-800 text-lg"
        }
        whitespace-pre-wrap leading-relaxed transition-all
      `}
      >
        {ad.content}
      </div>

      {/* Action buttons */}
      <div className="absolute -right-2 -top-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
        <button
          onClick={() => setIsEditing(true)}
          className="bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white p-2 rounded-lg shadow-xl transition-all hover:scale-110 border-2 border-blue-700"
          title="编辑"
        >
          <Edit2 className="size-4" />
        </button>
        <button
          onClick={() => {
            if (confirm("确定要删除这条广告吗？")) {
              onDelete(ad.id);
            }
          }}
          className="bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white p-2 rounded-lg shadow-xl transition-all hover:scale-110 border-2 border-red-700"
          title="删除"
        >
          <Trash2 className="size-4" />
        </button>
      </div>

      {showDivider && (
        <div className="h-px bg-gradient-to-r from-transparent via-red-300 to-transparent my-4" />
      )}
    </div>
  );
}