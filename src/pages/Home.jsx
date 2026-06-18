import Hero from "../components/home/Hero";
import Introduction from "../components/home/Introduction";
import WhyKarbalaMatters from "../components/home/WhyKarbalaMatters";
import TimelinePreview from "../components/home/TimelinePreview";
import FeaturedPersonalities from "../components/home/FeaturedPersonalities";

const Home = () => {
  return (
    <>
      <Hero />
      <Introduction />
      <WhyKarbalaMatters />
      <TimelinePreview />
      <FeaturedPersonalities />
    </>
  );
};

export default Home;