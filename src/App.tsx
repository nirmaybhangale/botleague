import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Competitions from "./components/Competitions";
import UserJourney from "./components/UserJourney";
import WhatIsBotLeague from "./components/WhatIsBotLeague";
import Categories from "./components/Categories";
import Disciplines from "./components/Disciplines";
import WhyRegister from "./components/WhyRegister";
import JoinEcosystem from "./components/JoinEcosystem";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <Hero />
      <Competitions />
      <UserJourney />
      <WhatIsBotLeague />
      <Categories />
      <Disciplines />
      <WhyRegister />
      <JoinEcosystem />
      <Sponsors />
      <Footer />
    </div>
  );
}
