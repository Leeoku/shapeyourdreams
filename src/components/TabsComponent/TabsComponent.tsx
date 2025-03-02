import '@mantine/core/styles.css';
import { Tabs } from '@mantine/core';
import styles from './TabsComponent.module.css';

export type TabType = 'Essences' | 'Memories' | 'Mechanics' | 'Changelog'

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
        {/* <Tabs.Tab
          value="Mechanics"
          className={styles.customTab}
          onClick={() => setActiveTab('Mechanics')}
        >
          Mechanics
        </Tabs.Tab> */}
        <Tabs.Tab
          value="Changelog"
          className={styles.customTab}
          onClick={() => setActiveTab('Changelog')}
        >
          Changelog
        </Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
};