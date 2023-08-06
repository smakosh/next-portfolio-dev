import Intro from 'components/modules/Intro';
import Projects from 'components/modules/Projects';
import Skills from 'components/modules/Skills';
import Contact from 'components/modules/Contact';
import AllProviders from 'components/AllProviders';
import Footer from 'components/ui/theme/Footer';
import Scripts from 'components/Scripts';

const HomePage = () => (
  <>
    <Scripts />
    <AllProviders>
      <Intro />
      {/* @ts-expect-error Server Component */}
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </AllProviders>
  </>
);

export default HomePage;
