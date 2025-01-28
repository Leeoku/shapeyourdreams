import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import EssencesPage from './Essences.page';


export function HomePage() {
  return (
    <>
      <ColorSchemeToggle />
      <EssencesPage></EssencesPage>
    </>
  );
}