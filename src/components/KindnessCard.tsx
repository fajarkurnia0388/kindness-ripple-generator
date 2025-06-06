
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Share } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface KindnessCardProps {
  category: string;
  act: string;
  emoji: string;
  gradient: string;
  onComplete: () => void;
}

export const KindnessCard = ({ category, act, emoji, gradient, onComplete }: KindnessCardProps) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const { toast } = useToast();

  const handleComplete = () => {
    if (isCompleted) return;
    
    setIsAnimating(true);
    setIsCompleted(true);
    
    setTimeout(() => {
      setIsAnimating(false);
      onComplete();
      toast({
        title: "🎉 Amazing!",
        description: "You've spread kindness today! Keep up the beautiful work.",
      });
    }, 600);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Random Acts of Kindness',
        text: `I just completed a random act of kindness: ${act} 💝 Join me in spreading positivity!`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(`I just completed a random act of kindness: ${act} 💝 Join me in spreading positivity! Check out the Random Acts of Kindness Generator!`);
      toast({
        title: "📋 Copied!",
        description: "Share text copied to clipboard!",
      });
    }
  };

  return (
    <Card className={`relative overflow-hidden p-6 border-2 shadow-lg hover:shadow-xl transition-all duration-300 ${isAnimating ? 'animate-celebration' : ''} ${isCompleted ? 'border-accent shadow-accent/20' : ''}`}>
      <div className={`absolute inset-0 opacity-10 ${gradient}`} />
      
      <div className="relative z-10">
        <div className="text-center mb-4">
          <div className="text-4xl mb-2 animate-bounce-gentle">{emoji}</div>
          <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
            {category}
          </div>
        </div>
        
        <div className="text-center mb-6">
          <p className="text-lg font-medium leading-relaxed text-foreground">
            {act}
          </p>
        </div>
        
        <div className="flex gap-3 justify-center">
          <Button
            onClick={handleComplete}
            disabled={isCompleted}
            className={`flex-1 max-w-32 rounded-full transition-all duration-300 ${
              isCompleted 
                ? 'bg-accent hover:bg-accent text-accent-foreground' 
                : 'bg-primary hover:bg-primary/90'
            }`}
          >
            <Check className={`w-4 h-4 mr-2 ${isCompleted ? 'animate-pulse' : ''}`} />
            {isCompleted ? 'Done!' : 'Complete'}
          </Button>
          
          <Button
            onClick={handleShare}
            variant="outline"
            size="default"
            className="rounded-full border-2 hover:scale-105 transition-transform duration-200"
          >
            <Share className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};
