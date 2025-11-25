import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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

const ResearchSection = () => {
  return (
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
  );
};

export default ResearchSection;
