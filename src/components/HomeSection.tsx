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
  );
};

export default HomeSection;
