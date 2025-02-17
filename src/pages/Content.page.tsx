import { z } from 'zod';
import { CardGrid } from '@/components/CardGrid/CardGrid';
import { ContentCard } from '@/components/ContentCard/ContentCard';
import { TabType } from '@/components/TabsComponent/TabsComponent';
import { gemsSchema } from '@/schemas/gemSchema';
import { memoriesSchema } from '@/schemas/memorySchema';
import EssencesData from '../../data/essences.json';
import MemoriesData from '../../data/memories.json';


const gemOrMemorySchema = z.union([gemsSchema, memoriesSchema])

interface ContentPageProps {
  activeTab: TabType
}

const ContentPage = ({activeTab}: ContentPageProps) => {
  const dataMapping: Record<TabType, Record<string, unknown>> = {
    Essences: EssencesData,
    Memories: MemoriesData,
  };

  const jsonToLoad = dataMapping[activeTab]

  try {
    gemOrMemorySchema.parse(jsonToLoad);
  } catch (e) {
    console.error(e);
  }
  
  const data = jsonToLoad ?? typeof(jsonToLoad) === 'object' ? Object.entries(jsonToLoad) : [];

  const mappedData = data.map(([key, value]) => <ContentCard key={key} data={value} />);
  return <CardGrid cardData={mappedData} />;
};

export default ContentPage;