import Image from 'next/image';
import g1 from '../../public/Images/g1.png';
import g2 from '../../public/Images/g2.png';
import ghani1 from '../../public/Images/Ghani1.webp';
import {useEffect, useState} from 'react';
const History = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div>
      <h1 className="border-b-2 border-[#FFD708] font-semibold text-[40px] inline-block m-5">
        History of Ghani Bull Driven Oil
      </h1>
      {!isMobile ? (
        <div className="flex items-center justify-around">
          <p className="w-[800px] text-justify text-[20px]">
            Ghani oil, also known as &quot;Kolhu&quot; or &quot;Chekku&quot;
            oil, has a long and storied history in India, dating back thousands
            of years. Ghani refers to the traditional wooden oil extraction
            device used to crush oilseeds and extract oil. This ancient method
            has been an integral part of India&quot;s cultural heritage and
            culinary traditions. The Ghani process involves using a pair of
            wooden rollers to crush oilseeds like sesame, groundnut, coconut, or
            mustard, and the oil is then collected through the pores of the
            wooden vessel.
          </p>
          <Image
            src={g2}
            alt=""
            height={0}
            width={0}
            className="h-[300px] w-[300px]"
          />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-around">
          <Image
            src={g2}
            alt=""
            height={0}
            width={0}
            className="h-[300px] w-[300px]"
          />
          <p className="mx-auto text-justify text-[20px] p-5">
            Ghani oil, also known as &quot;Kolhu&quot; or &quot;Chekku&quot;
            oil, has a long and storied history in India, dating back thousands
            of years. Ghani refers to the traditional wooden oil extraction
            device used to crush oilseeds and extract oil. This ancient method
            has been an integral part of India&quot;s cultural heritage and
            culinary traditions. The Ghani process involves using a pair of
            wooden rollers to crush oilseeds like sesame, groundnut, coconut, or
            mustard, and the oil is then collected through the pores of the
            wooden vessel.
          </p>
        </div>
      )}
      {!isMobile ? (
        <div className="flex items-center justify-around">
          <Image
            src={ghani1}
            alt=""
            height={0}
            width={0}
            className="h-[300px] w-[300px]"
          />
          <p className="w-[800px] text-justify text-[20px]">
            Historically, Ghani oil played a crucial role in Indian households,
            serving as a primary source of cooking oil. Before the advent of
            modern oil extraction technologies, such as expellers or solvent
            extraction, the Ghani method was widely employed throughout the
            country. Communities across various regions of India utilized this
            traditional method, allowing them to produce fresh, unrefined, and
            pure oils with unique flavors and nutritional properties.
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-around">
          <Image
            src={ghani1}
            alt=""
            height={0}
            width={0}
            className="h-[300px] w-[300px]"
          />
          <p className="mx-auto text-justify text-[20px] p-5">
            Historically, Ghani oil played a crucial role in Indian households,
            serving as a primary source of cooking oil. Before the advent of
            modern oil extraction technologies, such as expellers or solvent
            extraction, the Ghani method was widely employed throughout the
            country. Communities across various regions of India utilized this
            traditional method, allowing them to produce fresh, unrefined, and
            pure oils with unique flavors and nutritional properties.
          </p>
        </div>
      )}
      {!isMobile ? (
        <div className="flex items-center justify-around">
          <p className="w-[800px] text-justify text-[20px]">
            With the rise of industrialization and modernization in the mid-20th
            century, the use of Ghani oil declined considerably as commercial
            oil processing units took over the market. However, there has been a
            resurgence of interest in recent years, driven by growing awareness
            of the health and environmental benefits of traditional oil
            extraction methods. As a result, some small-scale artisanal
            producers and enthusiasts have revived the Ghani technique, catering
            to a niche market seeking natural and authentic oils. Today, Ghani
            oil is witnessing a renaissance, as consumers appreciate its
            traditional appeal, nutritional value, and cultural significance in
            India&apos;s culinary landscape.
          </p>
          <Image
            src={g1}
            alt=""
            height={0}
            width={0}
            className="h-[300px] w-[300px]"
          />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-around">
          <Image
            src={g1}
            alt=""
            height={0}
            width={0}
            className="h-[300px] w-[300px]"
          />
          <p className="mx-auto text-justify text-[20px] p-5">
            With the rise of industrialization and modernization in the mid-20th
            century, the use of Ghani oil declined considerably as commercial
            oil processing units took over the market. However, there has been a
            resurgence of interest in recent years, driven by growing awareness
            of the health and environmental benefits of traditional oil
            extraction methods. As a result, some small-scale artisanal
            producers and enthusiasts have revived the Ghani technique, catering
            to a niche market seeking natural and authentic oils. Today, Ghani
            oil is witnessing a renaissance, as consumers appreciate its
            traditional appeal, nutritional value, and cultural significance in
            India&apos;s culinary landscape.
          </p>
        </div>
      )}
    </div>
  );
};
export default History;
