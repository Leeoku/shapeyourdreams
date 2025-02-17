import { z } from 'zod';
import { Box, Card, CardSection, Center, Group, Image, Text } from '@mantine/core';
import { StyledDescription } from '@/components/StyledDescription/StyledDescription';
import { gemsSchema } from '@/schemas/gemSchema';


// const gemOrMemorySchema = z.union([gemsSchema])

// @ts-ignore
export const ContentCard = ({ data }) => {
  const { name, description, rarity, image } = data;

  return (
    <Box maw={400}>
      <Card>
        <CardSection>
          <Center>
            <Box maw={150}>
              <Image src={`/images/${image}`} />
            </Box>
          </Center>
        </CardSection>
        <Group justify="space-between">
          <Text fw={700}>{name}</Text>
          <Text>{rarity}</Text>
        </Group>
        <StyledDescription description={description} />
      </Card>
    </Box>
  );
};