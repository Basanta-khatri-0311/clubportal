import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ClubMembers from "../components/ClubMembers";
import Matches from "../components/Matches";
import Programs from "../components/Programs";
import ProgramRegistration from "../components/ProgramRegistration";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ClubMembers />
      <Matches />
      <Programs />
      <ProgramRegistration />
      <Footer />
    </div>
  );
}
