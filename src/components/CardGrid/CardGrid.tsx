import { SimpleGrid } from '@mantine/core';


// @ts-ignore
export const CardGrid = ({ cardData }) => {
  return <SimpleGrid my={16} cols={5}>{cardData}</SimpleGrid>;
};