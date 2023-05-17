import ArticleAbout from "../components/about/ArticleAbout";
import HeaderAbout from "../components/about/HeaderAbout";
import ParagraphsAbout from "../components/about/ParagraphsAbout";
import SkilsAbout from "../components/about/SkilsAbout";

const About = () => {
  window.scrollTo(0, 0);

  return (
    <section className="text-gray-50 w-11/12 mx-auto text-justify tracking-widest">
      <HeaderAbout />

      <ArticleAbout />

      <ParagraphsAbout />

      <SkilsAbout />
    </section>
  );
};

export default About;
