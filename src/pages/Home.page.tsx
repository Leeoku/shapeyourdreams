import { useState } from 'react';
import { Center, Text, Title } from '@mantine/core';
import EssencesPage from './Content.page';
import { TabsComponent, TabTypes } from '@/components/TabsComponent/TabsComponent';


export function HomePage() {
  const [activeTab, setActiveTab] = useState<TabTypes>('Essences');

  return (
    <>
      <Center>
        <Title order={1} mb="xl" mt="xl">
          Shape Your Dreams
        </Title>
      </Center>
      <TabsComponent activeTab={activeTab} setActiveTab={setActiveTab}/>
      {activeTab === "Essences" ? <EssencesPage tabData="Essences"/> : <EssencesPage tabData="Memories"/>}
    </>
  );
}