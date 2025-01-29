import { SimpleGrid } from '@mantine/core';

export const CardGrid = ({ cardData }) => {
  return <SimpleGrid cols={4}>{cardData}</SimpleGrid>;
};
