import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesOverview from '@/components/ServicesOverview';
import StreamingSection from '@/components/StreamingSection';
import CardsSection from '@/components/CardsSection';
import RechargeSection from '@/components/RechargeSection';
import CryptoSection from '@/components/CryptoSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesOverview />
        <StreamingSection />
        <CardsSection />
        <RechargeSection />
        <CryptoSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
