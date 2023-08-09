import Image from 'next/image';
import g1 from '../../public/Images/Ghani1.webp';
import g2 from '../../public/Images/Ghani2.png';
import g3 from '../../public/Images/ghani3.jpg';
import g4 from '../../public/Images/ghani4.jpg';
import {useEffect, useState} from 'react';
const Ghani = () => {
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
      <h1 className="border-b-2 border-[#FFD708] font-semibold text-[40px] inline-block m-5">
        Old Bull Driven Ghani Pictures
      </h1>
      {!isMobile ? (
        <div className="flex items-center justify-evenly p-5">
          <Image
            src={g1}
            alt="img"
            height={0}
            width={0}
            className="h-52 w-52"
          />
          <Image 
            src={g2}
            alt="img"
            height={0}
            width={0}
            className="h-52 w-52"
          />
          <Image
            src={g3}
            alt="img"
            height={0}
            width={0}
            className="h-52 w-52"
          />
          <Image
            src={g4}
            alt="img"
            height={0}
            width={0}
            className="h-52 w-52"
          />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-evenly p-5">
          <Image
            src={g1}
            alt="img"
            height={0}
            width={0}
            className="h-52 w-52 p-1"
          />
          <Image
            src={g2}
            alt="img"
            height={0}
            width={0}
            className="h-52 w-52 p-1"
          />
          <Image
            src={g3}
            alt="img"
            height={0}
            width={0}
            className="h-52 w-52 p-1"
          />
          <Image
            src={g4}
            alt="img"
            height={0}
            width={0}
            className="h-52 w-52 p-1"
          />
        </div>
      )}
    </div>
  );
};
export default Ghani;
