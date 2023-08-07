import Image from 'next/image';
import {useEffect, useState} from 'react';

const Process = () => {
  const data = [
    {
      step: 'Step 1:- Sourcing',
      img: '/Images/p1.jpg',
      desc: 'At Suryagram, we are dedicated to providing our customers with the highest quality and most sustainable oil possible. We understand that the quality of our oil starts with the raw materials, which is why we prioritize working with local farmers to source the freshest and highest quality nuts and seeds for our bull-driven ghani oil.',
    },
    {
      step: 'Step 2:- Processing',
      img: '/Images/p2.jpeg',
      desc: 'Suryagrams bull-driven ghani oil is extracted using traditional wooden oil mills worked by a pair of bullocks within a designated perimeter. This time-tested process ensures that the oil is the purest form with all the wholesome benefits of the seeds or nuts. The bullocks press the seeds or nuts without using any heat or chemicals to retain the oils natural nutrients, vitamins, and flavor.',
    },
    {
      step: 'Step 3:- Post Processing',
      img: '/Images/p3.jpg',
      desc: 'Suryagrams bull-driven ghani oil is sun-dried for three days after extraction to sterilize and let sediments settle before filtering, ensuring its purity. The oil is stored in dark brown bottles to protect its aroma and nutrients from light-induced oxidation and spoilage. By carefully preserving the oils natural goodness, Suryagram is able to offer a premium product that is both delicious and nutritious while supporting sustainable agriculture practices and the local community.',
    },
  ];
  const leftData = [
    {
      img: '/Images/u1.png',
      desc: 'Packed in transparent bottles. When in contact with sunlight, the oil will loose its nutrients.',
    },
    {
      img: '/Images/u3.jpg',
      desc: 'Improper sorting techniques which does not select the best quality grains.',
    },
    {
      img: '/Images/u7.png',
      desc: 'Machine made oil usually rotates at high rpm. Which produces heat and nutrients gets evaporated and affects the quality of oil.',
    },
  ];
  const rightData = [
    {
      img: '/Images/u2.webp',
      desc: 'Packed in amber brown bottles. When in contact with sunlight, the oil will not loose its nutrients.',
    },
    {
      img: '/Images/u4.jpg',
      desc: 'Proper hand picked grains from local farmers which helps in selecting high quality grains and hence we get high quality oil.',
    },
    {
      img: '/Images/u8.jpeg',
      desc: 'Suryagrams oil is made at a very low rpm hence the heat generated is minimal and so the nutrients of the oil are stored and not evaporated.',
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [data.length]);
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prevIndex) => (prevIndex + 1) % leftData.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [leftData.length]);
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
    <div id='Process'>
      <div>
        <h1 className="border-b-2 border-[#FFD708] font-semibold text-[40px] inline-block m-5">
          How are we helping with this?
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className=" border-b-2 border-[#FFD708]  font-semibold text-[40px] inline-block m-5">
          Our Mission
        </h1>
        <div className="flex flex-wrap items-center justify-center">
          <p className="font-semibold text-justify text-[18px] md:text-lg lg:text-xl p-2 md:p-4 lg:p-6 max-w-[600px]">
            “Our mission at Suryagram is to produce the highest quality
            bull-driven ghani oil using a traditional extraction method for
            maximum nutritional value. As a social enterprise, we are committed
            to supporting farmers, workers and Bulls while promoting
            sustainability and positive social impact. Through our signature
            brand, we aim to offer conscious consumers a healthier lifestyle
            choice that also positively impacts the lives of others.”
          </p>
        </div>
      </div>
      <h1 className="border-b-2 border-[#FFD708] font-semibold text-[40px] inline-block m-5">
        Our Process
      </h1>
      <div
        className="w-full h-auto bg-cover bg-center"
        style={{backgroundImage: "url('Images/hero-bg.png')"}}>
        <div className="relative p-10">
          {data.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center justify-around ${
                index === currentIndex ? 'opacity-100' : 'opacity-0 absolute'
              } transition-opacity duration-500`}>
              <Image
                src={item.img}
                alt="img"
                height={0}
                width={0}
                className="h-96 w-96"
              />
              <p className="font-semibold text-[24px] w-full md:w-[700px] text-justify md:text-left p-5">
                <span className="font-semibold text-[20px]">{item.step}</span>
                <br />
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      <h1 className="border-b-2 border-[#FFD708] font-semibold text-[40px] inline-block m-5">
        What makes us unique?
      </h1>
      {!isMobile ? (
        <div className="flex items-center justify-around ">
          <div className="flex flex-col items-center justify-center">
            {leftData.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center p-5 ${
                  index === carouselIndex ? 'opacity-100' : 'opacity-0 absolute'
                } transition-opacity duration-500`}>
                <h1 className="font-bold text-[20px]">Normal Oil</h1>
                <Image
                  src={item.img}
                  alt=""
                  height={0}
                  width={0}
                  className="h-52 w-52"
                />
                <p className="w-[300px] text-[20px] text-justify">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="p-[2px] h-[150px] w-[1px] bg-[#131C13]"></div>
          <div className="flex flex-col items-center justify-center">
            {rightData.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center p-5 ${
                  index === carouselIndex ? 'opacity-100' : 'opacity-0 absolute'
                } transition-opacity duration-500`}>
                <h1 className="font-bold text-[20px]">Suryagram&apos;s Oil</h1>
                <Image
                  src={item.img}
                  alt=""
                  height={0}
                  width={0}
                  className="h-52 w-52"
                />
                <p className="w-[300px] text-[20px] text-justify">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-around">
          <div className="flex flex-col items-center justify-center">
            {leftData.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center p-5 ${
                  index === carouselIndex ? 'opacity-100' : 'opacity-0 absolute'
                } transition-opacity duration-500`}>
                <h1 className="font-bold text-[20px]">Normal Oil</h1>
                <Image
                  src={item.img}
                  alt=""
                  height={0}
                  width={0}
                  className="h-52 w-52"
                />
                <p className="w-[300px] text-[20px] text-justify">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center justify-center">
            {rightData.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center p-5 ${
                  index === carouselIndex ? 'opacity-100' : 'opacity-0 absolute'
                } transition-opacity duration-500`}>
                <h1 className="font-bold text-[20px]">Suryagram&apos;s Oil</h1>
                <Image
                  src={item.img}
                  alt=""
                  height={0}
                  width={0}
                  className="h-52 w-52"
                />
                <p className="w-[300px] text-[20px] text-justify">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default Process;
