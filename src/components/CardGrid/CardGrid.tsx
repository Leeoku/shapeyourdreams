import { SimpleGrid } from '@mantine/core';

export const CardGrid = ({ cardData }) => {
  return <SimpleGrid cols={5}>{cardData}</SimpleGrid>;
};
