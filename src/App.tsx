import HeroSection from './components/HeroSection';
import Edicao2025Section from './components/Edicao2025Section';
import SobreEventoSection from './components/SobreEventoSection';
import ProgramacaoSection from './components/ProgramacaoSection';
import CotasSection from './components/CotasSection';
import ImersaoSection from './components/ImersaoSection';
import PorQuePatrocinarSection from './components/PorQuePatrocinarSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <HeroSection />
      <Edicao2025Section />
      <SobreEventoSection />
      <ProgramacaoSection />
      <CotasSection />
      <ImersaoSection />
      <PorQuePatrocinarSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
