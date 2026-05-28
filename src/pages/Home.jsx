import Hero from "../components/Hero";
import TechStack from "../components/TechStack";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
const Home = () => {
  return (
    <main className="bg-white">
      <Hero />
      <TechStack />
      <Education />
      <Projects />
      <Contact />
    </main>
  );
};
export default Home;
