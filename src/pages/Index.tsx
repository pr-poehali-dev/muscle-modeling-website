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
      <nav className="border-b-2 border-border sticky top-0 bg-card z-50 shadow-sm">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Activity" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-foreground tracking-tight">Моделирование мышечной деятельности</h1>
            </div>
            <div className="hidden md:flex gap-2">
              <Button
                variant={activeSection === 'home' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('home')}
                className="text-base font-medium"
              >
                Главная
              </Button>
              <Button
                variant={activeSection === 'research' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('research')}
                className="text-base font-medium"
              >
                Исследования
              </Button>
              <Button
                variant={activeSection === 'publications' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('publications')}
                className="text-base font-medium"
              >
                Публикации
              </Button>
              <Button
                variant={activeSection === 'methodology' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('methodology')}
                className="text-base font-medium"
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

      <footer className="border-t-2 border-border mt-24 bg-card">
        <div className="container mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <Icon name="Activity" size={28} className="text-primary" />
              <span className="text-base text-muted-foreground font-medium">
                Лаборатория моделирования мышечной деятельности © 2024
              </span>
            </div>
            <div className="flex gap-3">
              <Button variant="ghost" size="default" className="hover:bg-muted">
                <Icon name="Mail" size={20} />
              </Button>
              <Button variant="ghost" size="default" className="hover:bg-muted">
                <Icon name="Github" size={20} />
              </Button>
              <Button variant="ghost" size="default" className="hover:bg-muted">
                <Icon name="Linkedin" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;