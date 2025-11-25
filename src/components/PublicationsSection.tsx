import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

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

const PublicationsSection = () => {
  return (
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
  );
};

export default PublicationsSection;
