import Seo from '../components/ui/Seo.jsx';
import Hero from '../components/sections/Hero.jsx';
import About from '../components/sections/About.jsx';
import Skills from '../components/sections/Skills.jsx';
import Experience from '../components/sections/Experience.jsx';
import ProjectsPreview from '../components/sections/ProjectsPreview.jsx';
import Credentials from '../components/sections/Credentials.jsx';
import ContactPanel from '../components/sections/ContactPanel.jsx';

export default function Home() {
  return (
    <>
      <Seo />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <ProjectsPreview />
      <Credentials />
      <ContactPanel />
    </>
  );
}
