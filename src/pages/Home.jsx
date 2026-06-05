import Hero from "../components/Hero";
import TechStack from "../components/TechStack";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import ScrollReveal from "../components/Animation";
const Home = () => {
  return (
    <main className="bg-white">
      <ScrollReveal duration={0.7}>
        <Hero />
      </ScrollReveal>
      <ScrollReveal duration={1}>
        <TechStack />
      </ScrollReveal>
      <ScrollReveal duration={0.7}>
        <Education />
      </ScrollReveal>
      <ScrollReveal duration={0.7}>
        <Projects />
      </ScrollReveal>
      <ScrollReveal duration={0.7}>
        <Contact />
      </ScrollReveal>
    </main>
  );
};
export default Home;
