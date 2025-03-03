import { Badge, Box, Card, CardSection, Center, Group, Image, Text } from '@mantine/core';
import { StyledDescription } from '@/components/StyledDescription/StyledDescription';

// @ts-ignore
export const ContentCard = ({ data }) => {
  const { name, description, rarity, image, cooldownTime, maxCharges, type, traveler, tags } = data;

  function trimTravelerText(text: string) {
    return text.replace('Hero_', '');
  }

  function renderTags(tags: string[]) {
    if(tags.length === 0) {return "None"}
    return tags.join(', ');
  }

  const gemRarityColorMapping = {
    'Common': 'grey',
    'Rare': 'cyan',
    'Epic': 'purple', 
    'Legendary': 'red'
  } as const

  type Rarity = keyof typeof gemRarityColorMapping
  const rarityValue:Rarity = rarity

  const rarityColor = gemRarityColorMapping[rarityValue] || "yellow"
  
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
          <Text size="lg" fw={700}>
            {name}
          </Text>
          <Group>
            {traveler ? <Badge color="violet">{trimTravelerText(traveler)}</Badge> : null}
            <Badge color={rarityColor}>{rarity}</Badge>
          </Group>
        </Group>
        <Box>
          {cooldownTime ? <Text>Cooldown: {cooldownTime} seconds</Text> : null}
          {type ? <Text>Type: {type}</Text> : null}
          {(maxCharges && maxCharges !== 1)? <Text>Charges: {maxCharges}</Text> : null}
          {tags ? <Text>Tags: {renderTags(tags)}</Text> : null}
        </Box>
        <StyledDescription description={description} />
      </Card>
    </Box>
  );
};
