
import { Card } from '@/components/ui/card';

interface StatsCardProps {
  title: string;
  value: number;
  emoji: string;
  gradient: string;
}

export const StatsCard = ({ title, value, emoji, gradient }: StatsCardProps) => {
  return (
    <Card className="relative overflow-hidden p-4 border-2 shadow-md hover:shadow-lg transition-all duration-300">
      <div className={`absolute inset-0 opacity-15 ${gradient}`} />
      
      <div className="relative z-10 text-center">
        <div className="text-2xl mb-1">{emoji}</div>
        <div className="text-2xl font-bold text-foreground mb-1">{value}</div>
        <div className="text-xs text-muted-foreground font-medium">{title}</div>
      </div>
    </Card>
  );
};
