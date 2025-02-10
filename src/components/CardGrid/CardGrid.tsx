import { SimpleGrid } from '@mantine/core';


// @ts-ignore
export const CardGrid = ({ cardData }) => {
  return <SimpleGrid cols={5}>{cardData}</SimpleGrid>;
};