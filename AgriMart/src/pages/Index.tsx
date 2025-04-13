
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import CategorySection from '../components/CategorySection';
import FeaturedEquipment from '../components/FeaturedEquipment';
import HowItWorks from '../components/HowItWorks';
import StatsSection from '../components/StatsSection';
import IntegrationBanner from '../components/IntegrationBanner';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <CategorySection />
        <FeaturedEquipment />
        <HowItWorks />
        <StatsSection />
        <IntegrationBanner />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
