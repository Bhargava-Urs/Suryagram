import Navbar from '@components/navbar';
import Hero from '@components/hero';
import Fats from '@components/Fats';
import React from 'react';
import Oil from '@components/Oil';
import Ghani from '@components/Ghani';
import History from '@components/History';
import Process from '@components/Process';
import FAQ from '@components/FAQ';
import Products from '@components/Products';
import ContactForm from '@components/Contact';
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Oil />
      <Fats />
      <Ghani />
      <History />
      <Process />
      <Products />
      <FAQ />
      <ContactForm />
    </div>
  );
}
