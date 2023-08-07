'use client';
import Image from 'next/image';
import {useEffect, useState} from 'react';
import oil from '../../public/Images/Oil.png';
import oilImg from '../../public/Images/oilimg.png';
const Oil = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div>
      {!isMobile ? (
        <div>
          <h1 className="border-b-2 border-[#FFD708] font-semibold text-[40px] inline-block m-5">
            Why are Oil/fats essential for us?
          </h1>
          <Image
            src={oil}
            alt=""
            height={0}
            width={0}
            className="h-[800px] w-[1200px] mx-auto"
          />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <h1 className="border-b-2 border-[#FFD708] font-semibold text-[40px] inline-block m-5">
            Why are Oil/fats essential for us?
          </h1>
          <div className="flex flex-col items-center justify-center p-5">
            <Image
              alt=""
              src={oilImg}
              height={0}
              width={0}
              className="h-52 w-52"
            />
            <div>
              <h1 className="text-[24px] text-justify">
 The main function of fats in the body is to provide energy By supplying energy, fats save proteins from being used for energy. Fats on oxidation provide almost twice as much energy as that given by carbohydrates.
              </h1>
              <h1 className="text-[24px] text-justify">
                Fat helps the body absorb vitamin A, vitamin D and vitamin E. These vitamins are fat-soluble, which means they can only be absorbed with the help of fats.
              </h1>
              <h1 className="text-[24px] text-justify">
                Fat is a source of essential fatty acids, which the body cannot make itself.
              </h1>
              <h1 className="text-[24px] text-justify">
                Fat enhances texture, taste and flavour of the food, reduces it gastric emptying time and thereby affects satiety
              </h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Oil;
