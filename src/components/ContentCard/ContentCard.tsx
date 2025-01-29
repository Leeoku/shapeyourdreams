import { z } from 'zod';
import { Box, Card, CardSection, Center, Group, Image, Text } from '@mantine/core';
import { gemsSchema } from '@/schemas/gemSchema';


// const gemOrMemorySchema = z.union([gemsSchema])

export const ContentCard = ({ data }) => {
  const { name, description, rarity, image } = data;

  return (
    <Box maw={300}>
      <Card>
        <CardSection>
          <Center>
            <Box maw={100}>
              <Image src={`/images/${image}`} />
            </Box>
          </Center>
        </CardSection>
        <Group>
          <Text fw={700}>{name}</Text>
          <Text>{rarity}</Text>
        </Group>
        <Text>{description}</Text>
      </Card>
    </Box>
  );
};