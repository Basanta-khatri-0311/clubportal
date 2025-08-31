import HeroSlider from "../components/home/HeroSlider";
import AboutPreview from "../components/home/AboutPreview";
import EventsPreview from "../components/home/EventsPreview";
import ResultsPreview from "../components/home/ResultsPreview";
import MembersShowcase from "../components/home/MembersShowcase";
import Footer from "../components/common/Footer";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <AboutPreview />
      <EventsPreview />
      <ResultsPreview />
      <MembersShowcase />
      <Footer />
    </div>
  );
}
