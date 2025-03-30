import { useState } from 'react';
import { Navbar } from '@/components/Navbar/Navbar';
import ContentPage from './Content.page';
import { ChangelogPage } from './Changelog.page';
import { TabsComponent, TabType } from '@/components/TabsComponent/TabsComponent';


export function HomePage() {
  const [activeTab, setActiveTab] = useState<TabType>('Essences');

  return (
    <>
      <Navbar/>
      <TabsComponent activeTab={activeTab} setActiveTab={setActiveTab}/>
      {(activeTab === 'Essences' || activeTab === 'Memories') ? <ContentPage activeTab={activeTab}/> : null}
      {activeTab === 'Changelog' ? <ChangelogPage/> : null}
    </>
  );
}