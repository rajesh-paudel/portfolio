import Hero from "./Hero";
import TechStack from "./TechStack";
import Education from "./Education";
import Projects from "./Projects";
import Contact from "./Contact";

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
