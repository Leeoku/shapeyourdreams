import '@mantine/core/styles.css';
import { Tabs } from '@mantine/core';
import styles from './TabsComponent.module.css';

export type TabType = 'Essences' | 'Memories'

interface TabsComponentProps {
  activeTab: TabType;
  setActiveTab: (value:TabType) => void;
}

export const TabsComponent = ({activeTab, setActiveTab}: TabsComponentProps) => {
  return (
    <Tabs variant="pills" value={activeTab}>
      <Tabs.List display="flex" w="100%">
        <Tabs.Tab
          value="Essences"
          className={styles.customTab}
          onClick={() => setActiveTab('Essences')}
        >
          Essences
        </Tabs.Tab>
        <Tabs.Tab
          value="Memories"
          className={styles.customTab}
          onClick={() => setActiveTab('Memories')}
        >
          Memories
        </Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
};