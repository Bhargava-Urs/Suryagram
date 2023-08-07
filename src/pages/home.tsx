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
import { useEffect,useState } from 'react';
import logo from '../../public/Images/logo.jpg';
import Image from 'next/image';
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay of 2 seconds
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);
  return (
   
    <div>
       {isLoading ? (
        // Loading animation and logo here
        <div
        className="absolute bottom-0 left-0 right-0 transform -translate-y-1/2 flex justify-center items-center bg-white z-50"
        style={{ minHeight: '200px' }}
      >
        <style>
          {`
            @keyframes slideUp {
              0% {
                transform: translateY(100%);
              }
              100% {
                transform: translateY(0);
              }
            }
  
            .slide-up {
              animation: slideUp 5s ease-in-out forwards; // Increased animation duration to 1 second
            }
          `}
        </style>
        <Image
          src={logo}
          alt="Logo"
          className="h-96 w-96 slide-up" // Add the 'slide-up' class here
          height={0}
          width={0}
        />
      </div>
      
      ) : (
        <>
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
      </>
      )}
    </div>
  );
}

