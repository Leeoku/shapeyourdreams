import { keyboard } from '@testing-library/user-event/dist/types/keyboard';
import { z } from 'zod';
import { Box, Card, CardSection, Group, Image, keys, Text } from '@mantine/core';
import { gemsSchema } from '@/schemas/gemSchema';


// const gemOrMemorySchema = z.union([gemsSchema])

export const ContentCard = ({data}) => {
  const {name, description, rarity, image} = data

  return (
    <Box maw={300}>
      <Card>
        <CardSection>
          <Box maw={100}>
          <Image src={`/images/${image}`} fit="contain" />
          </Box>
        </CardSection>
        <Group>
          <Text>{name}</Text>
          <Text>{rarity}</Text>
        </Group>
        <Text>{description}</Text>
      </Card>
    </Box>
  );
};