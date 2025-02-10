import { CardGrid } from '@/components/CardGrid/CardGrid';
import { ContentCard } from '@/components/ContentCard/ContentCard';
import { gemsSchema } from '@/schemas/gemSchema';
import essences from '../../data/essences.json';

const EssencesPage = () => {
  try {
    gemsSchema.parse(essences);
  } catch (e) {
    console.error(e);
  }

  const data = Object.entries(essences);
  // console.log(data);
  const mappedData = data.map(([key, value]) => <ContentCard key={key} data={value} />);
  return <CardGrid cardData={mappedData} />;
};

export default EssencesPage;
