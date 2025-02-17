import { CardGrid } from '@/components/CardGrid/CardGrid';
import { ContentCard } from '@/components/ContentCard/ContentCard';
import { gemsSchema } from '@/schemas/gemSchema';
import EssencesData from '../../data/essences.json';
import MemoriesData from '../../data/memories.json';


const EssencesPage = ({tabData}) => {
  const dataMapping = {
    Essences: EssencesData,
    Memories: MemoriesData
  }
  const jsonToLoad = tabData === 'Essences' ? dataMapping.Essences : dataMapping.Memories

  try {
    gemsSchema.parse(jsonToLoad);
  } catch (e) {
    console.error(e);
  }
  
  const data = Object.entries(jsonToLoad);

  const mappedData = data.map(([key, value]) => <ContentCard key={key} data={value} />);
  return <CardGrid cardData={mappedData} />;
};

export default EssencesPage;