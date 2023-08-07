import Image from 'next/image';
import {useEffect, useState} from 'react';
import fats from '../../public/Images/Fats.png';
import fatimg from '../../public/Images/fatimg.png';
import rect1 from '../../public/Images/rect1.png';
import rect2 from '../../public/Images/rect2.png';
const Fats = () => {
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
            What do we get in general from oil?
          </h1>
          <Image
            src={fats}
            alt=""
            height={0}
            width={0}
            className="h-[800px] w-[1200px] mx-auto"
          />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <h1 className="border-b-2 border-[#FFD708] font-semibold text-[40px] inline-block m-5">
            What do we get in general from oil?
          </h1>
          <div className="flex flex-col items-center justify-center p-5">
            <Image
              alt=""
              src={fatimg}
              height={0}
              width={0}
              className="h-52 w-52"
            />
            <div>
              <h1 className="text-[24px] text-justify">
                <span className="text-[28px] font-semibold mx-auto ">
                  Trans Fats:
                </span>
                Trans fats are artificially produced fats commonly found in
                partially hydrogenated oils. They raise LDL (bad) cholesterol
                levels while lowering HDL (good) cholesterol levels, increasing
                the risk of heart disease and stroke. Health authorities
                recommend minimizing the intake of trans fats.
              </h1>
              <h1 className="text-[24px] text-justify">
                <span className="text-[28px] font-semibold mx-auto ">
                  High Caloric Density:
                </span>
                Oils are calorie-dense, with 9 calories per gram, making it easy
                to consume excess calories when using them in cooking or
                dressings. Overconsumption can lead to weight gain and
                obesity-related health issues.
              </h1>
              <h1 className="text-[24px] text-justify">
                <span className="text-[28px] font-semibold mx-auto ">
                  Lack of Essential Nutrients:
                </span>
                While some oils provide healthy fats, they lack essential
                nutrients like vitamins, minerals, and fiber, which are found in
                whole foods. Relying solely on oils for fats may lead to
                deficiencies in other nutrients.
              </h1>
              <h1 className="text-[24px] text-justify">
                <span className="text-[28px] font-semibold mx-auto ">
                  Potential Contamination:
                </span>
                Some oils may contain impurities or contaminants, particularly
                if they are not properly processed or stored.
              </h1>
            </div>
          </div>
        </div>
      )}
      <div className="flex items-center justify-center">
        <Image
          src={rect1}
          alt="img"
          height={0}
          width={0}
          className="mr-4 h-10 w-10 mb-[80px]"
        />
        <p className="font-bold text-center text-base md:text-2xl lg:text-3xl p-2 md:p-4 lg:p-6">
          “The Solution lies in the Tradition”
        </p>
        <Image
          src={rect2}
          alt="img"
          height={0}
          width={0}
          className="ml-4 h-10 w-10 mt-[80px]"
        />
      </div>
    </div>
  );
};

export default Fats;
