import '@mantine/core/styles.css';



import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';


export default function App() {
  return (
    <>
      <ColorSchemeScript forceColorScheme="dark" />
      <MantineProvider theme={theme}>
        <Router />
      </MantineProvider>
    </>
  );
}