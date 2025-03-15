import React from 'react';
import { DuaCategory } from '../types/dua';
import { Moon, SprayCan as Pray, Sun, Moon as MoonIcon, BookOpen } from 'lucide-react';

const iconMap = {
  'pray': Pray,
  'moon': Moon,
  'sun': Sun,
  'moon-icon': MoonIcon,
  'book': BookOpen
};

interface CategoryCardProps {
  category: DuaCategory;
  onClick: () => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, onClick }) => {
  const Icon = iconMap[category.icon as keyof typeof iconMap] || BookOpen;

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
    >
      <div className="flex items-center space-x-4">
        <div className="p-3 bg-emerald-100 rounded-full">
          <Icon className="w-6 h-6 text-emerald-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{category.name}</h3>
          <p className="text-sm text-gray-600">{category.description}</p>
        </div>
      </div>
    </div>
  );
};