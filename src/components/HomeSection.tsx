import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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

const HomeSection = () => {
  return (
    <div className="space-y-12 animate-fade-in">
      <section className="text-center space-y-6 py-16">
        <h2 className="text-5xl font-bold text-foreground tracking-tight">
          Лаборатория биомеханики и моделирования
        </h2>
        <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          Междисциплинарные исследования механизмов генерации мышечной силы и разработка
          математических моделей мышечной деятельности
        </p>
      </section>

      <div className="grid md:grid-cols-3 gap-8">
        <Card className="border-2 transition-all hover:border-primary hover:shadow-lg">
          <CardHeader className="space-y-4">
            <Icon name="FlaskConical" size={48} className="text-primary" />
            <CardTitle className="text-2xl">Исследования</CardTitle>
            <CardDescription className="text-base">Фундаментальные и прикладные научные проекты</CardDescription>
          </CardHeader>
        </Card>
        <Card className="border-2 transition-all hover:border-primary hover:shadow-lg">
          <CardHeader className="space-y-4">
            <Icon name="BookOpen" size={48} className="text-primary" />
            <CardTitle className="text-2xl">Публикации</CardTitle>
            <CardDescription className="text-base">Статьи в рецензируемых научных журналах</CardDescription>
          </CardHeader>
        </Card>
        <Card className="border-2 transition-all hover:border-primary hover:shadow-lg">
          <CardHeader className="space-y-4">
            <Icon name="Workflow" size={48} className="text-primary" />
            <CardTitle className="text-2xl">Методология</CardTitle>
            <CardDescription className="text-base">Методы моделирования и экспериментальные подходы</CardDescription>
          </CardHeader>
        </Card>
      </div>

      <Card className="border-2">
        <CardHeader className="space-y-3">
          <CardTitle className="text-2xl">Динамика мышечной активности</CardTitle>
          <CardDescription className="text-base">
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
                stroke="#1e3a5f"
                name="Бицепс"
                strokeWidth={3}
                dot={{ fill: '#1e3a5f', r: 5 }}
              />
              <Line
                type="monotone"
                dataKey="triceps"
                stroke="#2c5282"
                name="Трицепс"
                strokeWidth={3}
                dot={{ fill: '#2c5282', r: 5 }}
              />
              <Line
                type="monotone"
                dataKey="deltoid"
                stroke="#4a6fa5"
                name="Дельтовидная"
                strokeWidth={3}
                dot={{ fill: '#4a6fa5', r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default HomeSection;