import { Ad } from '../App';
import { AdItem } from './AdItem';

interface AdListProps {
  ads: Ad[];
  onDelete: (id: string) => void;
  onUpdate: (id: string, updatedAd: Partial<Ad>) => void;
}

export function AdList({ ads, onDelete, onUpdate }: AdListProps) {
  // Group ads by category
  const groupedAds = ads.reduce((acc, ad) => {
    const category = ad.category || 'default';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(ad);
    return acc;
  }, {} as Record<string, Ad[]>);

  return (
    <div className="space-y-6">
      {Object.entries(groupedAds).map(([category, categoryAds]) => (
        <div key={category}>
          {category !== 'default' && (
            <div className="mb-3">
              <span className={`text-lg ${
                categoryAds.some(ad => ad.isVip) 
                  ? 'text-red-600 font-bold' 
                  : 'text-gray-700 font-semibold'
              }`}>
                {category}：
              </span>
            </div>
          )}
          <div className={category === 'default' ? '' : 'space-y-4'}>
            {categoryAds.map((ad, index) => (
              <AdItem
                key={ad.id}
                ad={ad}
                onDelete={onDelete}
                onUpdate={onUpdate}
                showDivider={index < categoryAds.length - 1 && category === 'default'}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}