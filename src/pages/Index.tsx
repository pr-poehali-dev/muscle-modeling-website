import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import HomeSection from '@/components/HomeSection';
import ResearchSection from '@/components/ResearchSection';
import PublicationsSection from '@/components/PublicationsSection';
import MethodologySection from '@/components/MethodologySection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Activity" size={28} className="text-primary" />
              <h1 className="text-xl font-bold text-foreground">Моделирование мышечной деятельности</h1>
            </div>
            <div className="hidden md:flex gap-6">
              <Button
                variant={activeSection === 'home' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('home')}
              >
                Главная
              </Button>
              <Button
                variant={activeSection === 'research' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('research')}
              >
                Исследования
              </Button>
              <Button
                variant={activeSection === 'publications' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('publications')}
              >
                Публикации
              </Button>
              <Button
                variant={activeSection === 'methodology' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('methodology')}
              >
                Методология
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        {activeSection === 'home' && <HomeSection />}
        {activeSection === 'research' && <ResearchSection />}
        {activeSection === 'publications' && <PublicationsSection />}
        {activeSection === 'methodology' && <MethodologySection />}
      </main>

      <footer className="border-t border-border mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Activity" size={24} className="text-primary" />
              <span className="text-sm text-muted-foreground">
                Лаборатория моделирования мышечной деятельности © 2024
              </span>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm">
                <Icon name="Mail" size={18} />
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="Github" size={18} />
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="Linkedin" size={18} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
