import Header from "@components/Header";
import AboutMe from "@components/AboutMe";
import Globaleur from "@components/Globaleur";
import Projects from "@components/Projects";

function Home() {
  return (
    <div className="w-full flex flex-col items-center gap-24 mb-28">
      <Header />
      <AboutMe />
      <Globaleur />
      <Projects />
    </div>
  );
}

export default Home;
