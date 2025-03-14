import { useState } from 'react';
import { Center, Title } from '@mantine/core';
import ContentPage from './Content.page';
import { ChangelogPage } from './Changelog.page';
import { TabsComponent, TabType } from '@/components/TabsComponent/TabsComponent';


export function HomePage() {
  const [activeTab, setActiveTab] = useState<TabType>('Essences');

  return (
    <>
      <Center>
        <Title order={1} mb="xl" mt="xl">
          Shape Your Dreams
        </Title>
      </Center>
      <TabsComponent activeTab={activeTab} setActiveTab={setActiveTab}/>
      {(activeTab === 'Essences' || activeTab === 'Memories') ? <ContentPage activeTab={activeTab}/> : null}
      {activeTab === 'Changelog' ? <ChangelogPage/> : null}
    </>
  );
}