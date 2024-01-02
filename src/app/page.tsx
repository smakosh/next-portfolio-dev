import Intro from 'components/modules/Intro';
import Projects from 'components/modules/Projects';
import Skills from 'components/modules/Skills';
import Contact from 'components/modules/Contact';
import AllProviders from 'components/AllProviders';
import Footer from 'components/ui/theme/Footer';

export const revalidate = 3600;
export const runtime = 'edge';

const HomePage = () => (
  <>
    <AllProviders>
      <Intro />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </AllProviders>
  </>
);

export default HomePage;
