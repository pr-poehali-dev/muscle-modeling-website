import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const muscleActivityData = [
  { time: 0, biceps: 20, triceps: 15, deltoid: 18 },
  { time: 1, biceps: 45, triceps: 25, deltoid: 35 },
  { time: 2, biceps: 65, triceps: 30, deltoid: 55 },
  { time: 3, biceps: 85, triceps: 40, deltoid: 75 },
  { time: 4, biceps: 70, triceps: 60, deltoid: 65 },
  { time: 5, biceps: 55, triceps: 80, deltoid: 50 },
  { time: 6, biceps: 35, triceps: 65, deltoid: 40 },
  { time: 7, biceps: 25, triceps: 35, deltoid: 28 },
];

const forceData = [
  { angle: 0, force: 0 },
  { angle: 30, force: 45 },
  { angle: 60, force: 78 },
  { angle: 90, force: 95 },
  { angle: 120, force: 82 },
  { angle: 150, force: 58 },
  { angle: 180, force: 20 },
];

const fatigueData = [
  { rep: 1, maxForce: 100, avgForce: 95 },
  { rep: 5, maxForce: 98, avgForce: 92 },
  { rep: 10, maxForce: 92, avgForce: 85 },
  { rep: 15, maxForce: 85, avgForce: 78 },
  { rep: 20, maxForce: 75, avgForce: 68 },
  { rep: 25, maxForce: 65, avgForce: 58 },
  { rep: 30, maxForce: 52, avgForce: 45 },
];

const researchProjects = [
  {
    title: 'Биомеханика сокращения скелетных мышц',
    description: 'Исследование молекулярных механизмов генерации силы в мышечных волокнах',
    status: 'В процессе',
    year: '2024',
  },
  {
    title: 'Моделирование утомления при изометрических нагрузках',
    description: 'Разработка математической модели снижения силовых показателей',
    status: 'Завершен',
    year: '2023',
  },
  {
    title: 'Нейромышечная активация при динамических движениях',
    description: 'Анализ паттернов активации мышц при сложнокоординационных упражнениях',
    status: 'В процессе',
    year: '2024',
  },
];

const publications = [
  {
    title: 'Mathematical modeling of muscle force generation during eccentric contractions',
    authors: 'Иванов А.И., Петров В.С., Сидорова Е.М.',
    journal: 'Journal of Biomechanics',
    year: 2023,
    citation: 'IF: 4.5',
  },
  {
    title: 'Computational analysis of fatigue-induced changes in muscle activation patterns',
    authors: 'Петров В.С., Смирнов Д.А.',
    journal: 'European Journal of Applied Physiology',
    year: 2023,
    citation: 'IF: 3.2',
  },
  {
    title: 'A novel approach to modeling muscle-tendon interaction during stretch-shortening cycles',
    authors: 'Сидорова Е.М., Иванов А.И., Козлов М.П.',
    journal: 'Journal of Experimental Biology',
    year: 2022,
    citation: 'IF: 3.0',
  },
];

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
        {activeSection === 'home' && (
          <div className="space-y-12 animate-fade-in">
            <section className="text-center space-y-4 py-12">
              <h2 className="text-4xl font-bold text-secondary">
                Лаборатория биомеханики и моделирования
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Междисциплинарные исследования механизмов генерации мышечной силы и разработка
                математических моделей мышечной деятельности
              </p>
            </section>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover-scale">
                <CardHeader>
                  <Icon name="FlaskConical" size={40} className="text-primary mb-2" />
                  <CardTitle>Исследования</CardTitle>
                  <CardDescription>Фундаментальные и прикладные научные проекты</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover-scale">
                <CardHeader>
                  <Icon name="BookOpen" size={40} className="text-primary mb-2" />
                  <CardTitle>Публикации</CardTitle>
                  <CardDescription>Статьи в рецензируемых научных журналах</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover-scale">
                <CardHeader>
                  <Icon name="Workflow" size={40} className="text-primary mb-2" />
                  <CardTitle>Методология</CardTitle>
                  <CardDescription>Методы моделирования и экспериментальные подходы</CardDescription>
                </CardHeader>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Динамика мышечной активности</CardTitle>
                <CardDescription>
                  ЭМГ-активность основных мышечных групп при выполнении концентрического сокращения
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={muscleActivityData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis
                      dataKey="time"
                      label={{ value: 'Время (с)', position: 'insideBottom', offset: -5 }}
                      stroke="#6b7280"
                    />
                    <YAxis
                      label={{ value: 'Активность (%)', angle: -90, position: 'insideLeft' }}
                      stroke="#6b7280"
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'white',
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                      }}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="biceps"
                      stroke="#0EA5E9"
                      name="Бицепс"
                      strokeWidth={2}
                      dot={{ fill: '#0EA5E9', r: 4 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="triceps"
                      stroke="#1A1F2C"
                      name="Трицепс"
                      strokeWidth={2}
                      dot={{ fill: '#1A1F2C', r: 4 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="deltoid"
                      stroke="#8E9196"
                      name="Дельтовидная"
                      strokeWidth={2}
                      dot={{ fill: '#8E9196', r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'research' && (
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-2">Текущие исследования</h2>
              <p className="text-muted-foreground">
                Актуальные проекты лаборатории в области биомеханики и моделирования
              </p>
            </div>

            <div className="grid gap-6">
              {researchProjects.map((project, index) => (
                <Card key={index} className="hover-scale">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2 flex-1">
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                        <CardDescription className="text-base">{project.description}</CardDescription>
                      </div>
                      <Badge variant={project.status === 'Завершен' ? 'secondary' : 'default'}>
                        {project.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Calendar" size={16} />
                      <span>{project.year}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Зависимость силы от угла</CardTitle>
                  <CardDescription>Момент силы при различных углах в локтевом суставе</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={forceData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis dataKey="angle" label={{ value: 'Угол (°)', position: 'insideBottom', offset: -5 }} />
                      <YAxis label={{ value: 'Сила (Н·м)', angle: -90, position: 'insideLeft' }} />
                      <Tooltip />
                      <Area type="monotone" dataKey="force" stroke="#0EA5E9" fill="#0EA5E9" fillOpacity={0.3} />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Развитие утомления</CardTitle>
                  <CardDescription>Снижение силовых показателей при повторных сокращениях</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={fatigueData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis dataKey="rep" label={{ value: 'Повторение', position: 'insideBottom', offset: -5 }} />
                      <YAxis label={{ value: 'Сила (%)', angle: -90, position: 'insideLeft' }} />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="maxForce" stroke="#0EA5E9" name="Макс. сила" strokeWidth={2} />
                      <Line type="monotone" dataKey="avgForce" stroke="#8E9196" name="Средн. сила" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeSection === 'publications' && (
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-2">Научные публикации</h2>
              <p className="text-muted-foreground">
                Статьи в международных рецензируемых журналах
              </p>
            </div>

            <div className="grid gap-4">
              {publications.map((pub, index) => (
                <Card key={index} className="hover-scale">
                  <CardHeader>
                    <div className="space-y-3">
                      <CardTitle className="text-lg font-semibold">{pub.title}</CardTitle>
                      <div className="flex flex-wrap items-center gap-4 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Icon name="Users" size={16} />
                          <span>{pub.authors}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Icon name="BookOpen" size={16} />
                          <span className="italic">{pub.journal}</span>
                        </div>
                        <Badge variant="outline">{pub.year}</Badge>
                        <Badge>{pub.citation}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'methodology' && (
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-2">Методология исследований</h2>
              <p className="text-muted-foreground">
                Экспериментальные и вычислительные методы моделирования
              </p>
            </div>

            <Tabs defaultValue="experimental" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="experimental">Экспериментальные методы</TabsTrigger>
                <TabsTrigger value="computational">Вычислительное моделирование</TabsTrigger>
                <TabsTrigger value="validation">Валидация моделей</TabsTrigger>
              </TabsList>

              <TabsContent value="experimental" className="space-y-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Microscope" size={24} className="text-primary" />
                      Электромиография (ЭМГ)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-muted-foreground">
                      Регистрация электрической активности мышц с использованием поверхностных и игольчатых электродов
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={16} className="text-primary mt-0.5" />
                        <span>Частота дискретизации: 2000 Гц</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={16} className="text-primary mt-0.5" />
                        <span>Полоса пропускания: 20-500 Гц</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={16} className="text-primary mt-0.5" />
                        <span>Синхронизация с биомеханическими данными</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Gauge" size={24} className="text-primary" />
                      Динамометрия
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-muted-foreground">
                      Измерение силы и момента силы с использованием изокинетических и изометрических динамометров
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={16} className="text-primary mt-0.5" />
                        <span>Точность измерений: ±0.5%</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={16} className="text-primary mt-0.5" />
                        <span>Диапазон угловых скоростей: 0-500°/с</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="computational" className="space-y-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Binary" size={24} className="text-primary" />
                      Математическое моделирование
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Модель Хилла</h4>
                      <p className="text-sm text-muted-foreground">
                        Трёхкомпонентная модель мышцы: сократительный элемент, последовательный и параллельный упругие элементы
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Модель Хаксли</h4>
                      <p className="text-sm text-muted-foreground">
                        Молекулярная модель образования поперечных мостиков актин-миозиновых взаимодействий
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Модель утомления</h4>
                      <p className="text-sm text-muted-foreground">
                        Феноменологическая модель снижения силы при повторных сокращениях
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Cpu" size={24} className="text-primary" />
                      Численные методы
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={16} className="text-primary mt-0.5" />
                        <span>Метод конечных элементов для биомеханического анализа</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={16} className="text-primary mt-0.5" />
                        <span>Численное решение дифференциальных уравнений (Runge-Kutta)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={16} className="text-primary mt-0.5" />
                        <span>Оптимизация параметров моделей (генетические алгоритмы)</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="validation" className="space-y-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Процесс валидации</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                          1
                        </div>
                        <div>
                          <h4 className="font-semibold">Сбор экспериментальных данных</h4>
                          <p className="text-sm text-muted-foreground">
                            Проведение контролируемых экспериментов с регистрацией всех параметров
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                          2
                        </div>
                        <div>
                          <h4 className="font-semibold">Калибровка модели</h4>
                          <p className="text-sm text-muted-foreground">
                            Подбор параметров модели для минимизации расхождения с экспериментом
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                          3
                        </div>
                        <div>
                          <h4 className="font-semibold">Статистический анализ</h4>
                          <p className="text-sm text-muted-foreground">
                            Оценка точности предсказаний модели (R², RMSE, корреляционный анализ)
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                          4
                        </div>
                        <div>
                          <h4 className="font-semibold">Независимая проверка</h4>
                          <p className="text-sm text-muted-foreground">
                            Тестирование модели на новых данных, не использованных при калибровке
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Критерии точности</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-muted rounded-lg">
                        <div className="text-3xl font-bold text-primary">R² &gt; 0.85</div>
                        <div className="text-sm text-muted-foreground mt-1">Коэффициент детерминации</div>
                      </div>
                      <div className="text-center p-4 bg-muted rounded-lg">
                        <div className="text-3xl font-bold text-primary">&lt; 5%</div>
                        <div className="text-sm text-muted-foreground mt-1">Средняя ошибка</div>
                      </div>
                      <div className="text-center p-4 bg-muted rounded-lg">
                        <div className="text-3xl font-bold text-primary">p &lt; 0.01</div>
                        <div className="text-sm text-muted-foreground mt-1">Статистическая значимость</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        )}
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
