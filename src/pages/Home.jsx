import Time from "../components/Time/Time";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Background from "../components/Background/Background";
import Skill from "../components/Skill/Skill";
import Project from "../components/Project/Project";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      {/* <Time /> */}
      <Navbar />
      <Hero />
      <Background />
      <Skill />
      <Project />
      <Footer />
    </>
  );
}

export default Home;
