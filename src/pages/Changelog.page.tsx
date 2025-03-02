import { Box, Group, List, Text } from '@mantine/core';
import ChangeLog from '../../data/changelog.json';


export const ChangelogPage = () => {
  const { changelog } = ChangeLog;
  return (
    <Box m="3em">
      <h2>Note: Balance Changes Only From Jan 2025</h2>
      {changelog.map(({ version, date, changes }) => (
        <div key={version}>
          <Group>
            <h2>{version}</h2>
            <Text size="lg">{date}</Text>
          </Group>
          <div>
            {changes.map((changeGroup, index) => (
              <div key={index}>
                {Object.entries(changeGroup).map(([title, change]) => (
                  <div key={title}>
                    <h3>{title}</h3>
                    <List>
                      {change.map((bullet:any) => (
                        <List.Item key={bullet}>{bullet}</List.Item>
                      ))}
                    </List>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </Box>
  );
};