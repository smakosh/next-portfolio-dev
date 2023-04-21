import AllProviders from '../components/AllProviders';
import Contact from '../components/modules/Contact';
import Intro from '../components/modules/Intro';
import Projects from '../components/modules/Projects';
import Skills from '../components/modules/Skills';
import Scripts from '../components/Scripts';
import Footer from '../components/ui/theme/Footer';

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
