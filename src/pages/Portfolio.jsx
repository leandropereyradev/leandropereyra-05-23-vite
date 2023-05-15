import HeaderPortfolio from "../components/portfolio/HeaderPortfolio";
import ImagesPortfolio from "../components/portfolio/ImagesPortfolio";

const Portfolio = () => {
  return (
    <header className="w-11/12 mx-auto h-screen pt-14 xl:pt-20 xl:grid xl:grid-cols-2 items-center xl:max-w-[1700px] xl:mx-auto">
      <HeaderPortfolio />

      <ImagesPortfolio />
    </header>
  );
};

export default Portfolio;
