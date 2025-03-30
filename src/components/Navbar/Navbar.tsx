import { Box, Flex, Group, Title } from '@mantine/core';


export const Navbar = () => {
  return (
    <Box>
      <Flex align="center" justify="space-between">
        <Group grow justify="center" style={{ flexGrow: 1, textAlign: 'center' }}>
          <Title order={1} mb="xl" mt="xl">
            Shape Your Dreams
          </Title>
        </Group>
        {/* Add your icon code here */}
      </Flex>
    </Box>
  );
};