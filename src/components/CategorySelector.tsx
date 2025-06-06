
import { Button } from '@/components/ui/button';

interface Category {
  id: string;
  name: string;
  emoji: string;
  gradient: string;
}

interface CategorySelectorProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export const CategorySelector = ({ categories, selectedCategory, onCategoryChange }: CategorySelectorProps) => {
  return (
    <div className="grid grid-cols-2 gap-3 mb-6">
      {categories.map((category) => (
        <Button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          variant={selectedCategory === category.id ? "default" : "outline"}
          className={`h-auto p-4 rounded-xl border-2 transition-all duration-300 ${
            selectedCategory === category.id
              ? 'bg-primary text-primary-foreground shadow-lg scale-105'
              : 'hover:scale-105 hover:shadow-md'
          }`}
        >
          <div className="text-center">
            <div className="text-2xl mb-1">{category.emoji}</div>
            <div className="text-sm font-medium">{category.name}</div>
          </div>
        </Button>
      ))}
    </div>
  );
};
