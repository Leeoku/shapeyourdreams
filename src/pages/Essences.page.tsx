import { keyboard } from "@testing-library/user-event/dist/types/keyboard";
import { ContentCard } from "@/components/ContentCard/ContentCard";
import { gemsSchema } from '@/schemas/gemSchema';
import essences from '../../data/essences.json';


const EssencesPage = () => {
    try {
      gemsSchema.parse(essences);
    } catch (e) {
      console.error(e);
    }
  const data = essences
  // const mappedData = Object.entries(data)
  // console.log(mappedData)
  // const mappedDatatest = Object.entries(data).map(([key, value]) => (
  //   console.log(key, value.name)
  // ))

  return (
    <>
      {Object.entries(data).map(([key, value]) => (
          <ContentCard key={key} data={value} />
      ))}
    </>
  );
}

export default EssencesPage