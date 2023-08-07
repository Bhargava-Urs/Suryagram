'use client';
import Image from 'next/image';
import {useEffect, useState} from 'react';
import oil from '../../public/Images/Oil.png';
import oilImg from '../../public/Images/oilimg.png';
const Oil = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1280);
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
                <span className="text-[28px] font-semibold mx-auto ">
                  Nutrient Absorption:
                </span>
                Get the most out of your meals with oil. It aids in the
                absorption of essential fat-soluble vitamins, ensuring your body
                benefits from the full range of nutrients.
              </h1>
              <h1 className="text-[24px] text-justify">
                <span className="text-[28px] font-semibold mx-auto ">
                  Flavor Boost:
                </span>
                Oil enhances the flavor of your favorite dishes, allowing herbs,
                spices, and ingredients to shine and creating a delightful taste
                experience.
              </h1>
              <h1 className="text-[24px] text-justify">
                <span className="text-[28px] font-semibold mx-auto ">
                  Perfect Texture:
                </span>
                Oil adds richness, smoothness, and creaminess to sauces,
                dressings, and baked goods, ensuring a delectable texture in
                every bite.
              </h1>
              <h1 className="text-[24px] text-justify">
                <span className="text-[28px] font-semibold mx-auto ">
                  Even Cooking:
                </span>
                Oil&apos;s have excellent heat transfer properties ensure efficient
                and even cooking, preventing burning or sticking, and helping
                you achieve perfectly cooked meals every time.
              </h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Oil;
