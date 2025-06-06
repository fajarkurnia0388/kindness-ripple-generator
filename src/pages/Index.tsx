
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ThemeToggle } from '@/components/ThemeToggle';
import { KindnessCard } from '@/components/KindnessCard';
import { StatsCard } from '@/components/StatsCard';
import { CategorySelector } from '@/components/CategorySelector';
import { kindnessActs, motivationalQuotes } from '@/data/kindnessActs';
import { useToast } from '@/hooks/use-toast';
import { Bell, BellOff } from 'lucide-react';

const categories = [
  { id: 'strangers', name: 'For Strangers', emoji: '🤝', gradient: 'gradient-warm' },
  { id: 'friends', name: 'Friends & Family', emoji: '💝', gradient: 'gradient-cool' },
  { id: 'yourself', name: 'For Yourself', emoji: '🌱', gradient: 'gradient-nature' },
  { id: 'environment', name: 'Environment', emoji: '🌍', gradient: 'gradient-sunset' }
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('strangers');
  const [currentAct, setCurrentAct] = useState(kindnessActs[0]);
  const [completedActs, setCompletedActs] = useState<string[]>([]);
  const [dailyStreak, setDailyStreak] = useState(0);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(motivationalQuotes[0]);
  const { toast } = useToast();

  useEffect(() => {
    const saved = localStorage.getItem('completedActs');
    if (saved) {
      setCompletedActs(JSON.parse(saved));
    }
    
    const streak = localStorage.getItem('dailyStreak');
    if (streak) {
      setDailyStreak(parseInt(streak));
    }

    const notifications = localStorage.getItem('notificationsEnabled');
    setNotificationsEnabled(notifications === 'true');

    // Set random quote on load
    setCurrentQuote(motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]);
  }, []);

  useEffect(() => {
    localStorage.setItem('completedActs', JSON.stringify(completedActs));
  }, [completedActs]);

  useEffect(() => {
    localStorage.setItem('dailyStreak', dailyStreak.toString());
  }, [dailyStreak]);

  const generateRandomAct = () => {
    const categoryActs = kindnessActs.filter(act => act.category === selectedCategory);
    const randomAct = categoryActs[Math.floor(Math.random() * categoryActs.length)];
    setCurrentAct(randomAct);
    
    // Change quote too
    setCurrentQuote(motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]);
  };

  const handleActComplete = () => {
    if (!completedActs.includes(currentAct.id)) {
      setCompletedActs([...completedActs, currentAct.id]);
      setDailyStreak(prev => prev + 1);
    }
  };

  const toggleNotifications = async () => {
    if (!notificationsEnabled) {
      try {
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
          setNotificationsEnabled(true);
          localStorage.setItem('notificationsEnabled', 'true');
          toast({
            title: "🔔 Notifications Enabled!",
            description: "We'll send you gentle daily reminders to spread kindness.",
          });
        }
      } catch (error) {
        toast({
          title: "❌ Notification Error",
          description: "Unable to enable notifications. Please check your browser settings.",
        });
      }
    } else {
      setNotificationsEnabled(false);
      localStorage.setItem('notificationsEnabled', 'false');
      toast({
        title: "🔕 Notifications Disabled",
        description: "Daily reminders have been turned off.",
      });
    }
  };

  const currentCategory = categories.find(cat => cat.id === selectedCategory);
  const todayCompleted = completedActs.length;
  const uniqueCategories = new Set(kindnessActs.filter(act => completedActs.includes(act.id)).map(act => act.category)).size;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b">
        <div className="container max-w-md mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-foreground">Random Acts of Kindness</h1>
              <p className="text-sm text-muted-foreground">by fajarkurnia0388</p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={toggleNotifications}
                className="rounded-full p-2 border-2 hover:scale-105 transition-transform duration-200"
              >
                {notificationsEnabled ? (
                  <Bell className="h-4 w-4 text-kindness-green" />
                ) : (
                  <BellOff className="h-4 w-4 text-muted-foreground" />
                )}
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      <div className="container max-w-md mx-auto px-4 py-6 space-y-6">
        {/* Motivational Quote */}
        <Card className="p-4 bg-gradient-to-r from-kindness-orange/10 to-kindness-pink/10 border-2 border-primary/20">
          <div className="text-center">
            <div className="text-2xl mb-2">✨</div>
            <p className="text-sm italic text-foreground leading-relaxed">
              "{currentQuote}"
            </p>
          </div>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-3">
          <StatsCard
            title="Acts Completed"
            value={todayCompleted}
            emoji="💝"
            gradient="gradient-warm"
          />
          <StatsCard
            title="Daily Streak"
            value={dailyStreak}
            emoji="🔥"
            gradient="gradient-cool"
          />
          <StatsCard
            title="Categories"
            value={uniqueCategories}
            emoji="🌟"
            gradient="gradient-nature"
          />
        </div>

        {/* Category Selector */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-center">Choose a Category</h2>
          <CategorySelector
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>

        {/* Current Kindness Act */}
        <div className="space-y-4">
          <KindnessCard
            category={currentCategory?.name || ''}
            act={currentAct.act}
            emoji={currentCategory?.emoji || '💝'}
            gradient={currentCategory?.gradient || 'gradient-warm'}
            onComplete={handleActComplete}
          />
          
          <Button
            onClick={generateRandomAct}
            variant="outline"
            className="w-full rounded-full border-2 hover:scale-105 transition-transform duration-200 py-6"
          >
            <span className="text-lg">🎲</span>
            <span className="ml-2 font-medium">Generate New Act of Kindness</span>
          </Button>
        </div>

        {/* Daily Reminder */}
        {!notificationsEnabled && (
          <Card className="p-4 bg-gradient-to-r from-kindness-blue/10 to-kindness-purple/10 border-2 border-kindness-blue/20">
            <div className="text-center">
              <div className="text-xl mb-2">🔔</div>
              <p className="text-sm text-foreground mb-3">
                Enable daily reminders to build your kindness habit!
              </p>
              <Button
                onClick={toggleNotifications}
                size="sm"
                className="rounded-full"
              >
                Enable Notifications
              </Button>
            </div>
          </Card>
        )}

        {/* Footer */}
        <div className="text-center py-4">
          <Badge variant="secondary" className="rounded-full px-4 py-1">
            Spreading kindness, one act at a time 💕
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default Index;
