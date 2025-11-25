import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const MethodologySection = () => {
  return (
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
  );
};

export default MethodologySection;
