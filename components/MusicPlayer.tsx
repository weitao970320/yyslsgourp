import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Try to autoplay when component mounts
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          // Autoplay was prevented, user needs to interact first
          console.log('Autoplay prevented, waiting for user interaction');
          setIsPlaying(false);
        }
      }
    };

    playAudio();
  }, []);

  const togglePlay = async () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          console.error('Error playing audio:', error);
        }
      }
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <audio
        ref={audioRef}
        loop
        autoPlay
        muted={isMuted}
      >
        {/* 使用免费的背景音乐示例 - 用户可以替换为自己的音乐文件 */}
        {/* 由于没有实际音频文件，这里提供占位符 */}
        {/* <source src="/path/to/your/music.mp3" type="audio/mpeg" /> */}
      </audio>
      
      <div className="flex flex-col items-center gap-3">
        <div className="flex gap-3">
          <button
            onClick={togglePlay}
            className="bg-gradient-to-br from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-yellow-100 p-4 rounded-full shadow-2xl transition-all hover:scale-110 animate-float border-4 border-yellow-600"
            title={isPlaying ? '暂停音乐' : '播放音乐'}
          >
            <Music className={`size-7 ${isPlaying ? 'animate-pulse' : ''}`} />
          </button>
          
          <button
            onClick={toggleMute}
            className="bg-gradient-to-br from-amber-100 to-yellow-100 hover:from-amber-200 hover:to-yellow-200 text-red-700 p-4 rounded-full shadow-2xl transition-all hover:scale-110 border-4 border-red-600"
            title={isMuted ? '取消静音' : '静音'}
          >
            {isMuted ? (
              <VolumeX className="size-7" />
            ) : (
              <Volume2 className="size-7" />
            )}
          </button>
        </div>
        
        <div className="text-center">
          <p className="text-sm text-yellow-100 bg-red-800/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border-2 border-yellow-600">
            {isPlaying ? '🎵 播放中' : '⏸️ 已暂停'}
          </p>
        </div>
      </div>
    </div>
  );
}