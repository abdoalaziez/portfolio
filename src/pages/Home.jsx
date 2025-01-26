import Hero from "../sections/Hero";
import Skills from "../sections/Skills";
import ContactMe from "../sections/ContactMe";
import AboutMe from "../sections/AboutMe";
import Services from "../sections/Services";
import MyProject from "../sections/MyProject"





const Home = () => {
  return (
    <main id="home" className="max-w-7xl mx-auto">
      <Hero />
      <Skills />
      <AboutMe />
      <ContactMe />
      <Services />
      <MyProject />
    </main>
  );
};

export default Home;
