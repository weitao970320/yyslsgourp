import { ReactNode, useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
      {/* 背景遮罩 */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* 弹窗内容 */}
      <div className="relative bg-gradient-to-br from-red-50 via-amber-50 to-yellow-50 rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border-4 border-red-600 animate-fadeIn">
        {/* 顶部装饰 */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex gap-2">
          <div className="text-4xl animate-float">🏮</div>
          <div className="text-4xl animate-float" style={{ animationDelay: '0.5s' }}>🏮</div>
        </div>
        
        {/* 关闭按钮 */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full shadow-lg transition-all hover:scale-110 z-10"
        >
          <X className="size-5" />
        </button>
        
        {/* 弹窗边框装饰 */}
        <div className="absolute top-0 left-0 w-24 h-24 pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full text-red-600 opacity-80">
            <path d="M0,0 L30,0 L30,5 L5,5 L5,30 L0,30 Z" fill="currentColor"/>
            <circle cx="15" cy="15" r="3" fill="currentColor"/>
          </svg>
        </div>
        <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none transform scale-x-[-1]">
          <svg viewBox="0 0 100 100" className="w-full h-full text-red-600 opacity-80">
            <path d="M0,0 L30,0 L30,5 L5,5 L5,30 L0,30 Z" fill="currentColor"/>
            <circle cx="15" cy="15" r="3" fill="currentColor"/>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-24 h-24 pointer-events-none transform scale-y-[-1]">
          <svg viewBox="0 0 100 100" className="w-full h-full text-red-600 opacity-80">
            <path d="M0,0 L30,0 L30,5 L5,5 L5,30 L0,30 Z" fill="currentColor"/>
            <circle cx="15" cy="15" r="3" fill="currentColor"/>
          </svg>
        </div>
        <div className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none transform scale-[-1]">
          <svg viewBox="0 0 100 100" className="w-full h-full text-red-600 opacity-80">
            <path d="M0,0 L30,0 L30,5 L5,5 L5,30 L0,30 Z" fill="currentColor"/>
            <circle cx="15" cy="15" r="3" fill="currentColor"/>
          </svg>
        </div>
        
        {/* 内容区域 */}
        <div className="p-8 pt-10">
          {children}
        </div>
        
        {/* 底部装饰 */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
          <span className="text-2xl animate-sparkle">✨</span>
          <span className="text-2xl animate-sparkle" style={{ animationDelay: '0.5s' }}>✨</span>
          <span className="text-2xl animate-sparkle" style={{ animationDelay: '1s' }}>✨</span>
        </div>
      </div>
    </div>
  );
}
