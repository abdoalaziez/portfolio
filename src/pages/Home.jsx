import Hero from "../sections/Hero";
import AboutMe from "../sections/AboutMe";
import Skills from "../sections/Skills";
import ContactMe from "../sections/ContactMe";
import Services from "../sections/Services";
import MyProject from "../sections/MyProject"





const Home = () => {
  return (
    <main id="home" className="max-w-7xl mx-auto">
      <Hero />
      <AboutMe />
      <Skills />
      <Services />
      <MyProject />
      <ContactMe />
    </main>
  );
};

export default Home;
