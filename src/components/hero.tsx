import Image from 'next/image';
import {useEffect, useState} from 'react';
const Hero = () => {
  const data = [
    {
      Img: '/Images/1.jpg',
      mainHeading: 'Why Groundnut Oil?',
      q1: 'Versatile Cooking Oil with High Smoke Point:',
      a1: 'It is a versatile cooking oil used for sauteing and deep frying. It has high smoke point which makes it suitable for various cooking methods',
      q2: 'Weight Management Benefits',
      a2: 'Peanuts are high in satiety, keeping you fuller for longer, and helping to reduce appetite and prevent overeating.',
      q3: 'Improves Digestion and Reduces Cholesterol',
      a3: 'It enhances Agni (digestive fire) and corrects impaired digestion, preventing the accumulation of bad cholesterol.',
      q4: 'Beneficial for Heart Healt',
      a4: 'Peanuts are a good source of vitamin E, which is beneficial for managing coronary heart disease.',
    },
    {
      Img: '/Images/2.jpg',
      mainHeading: 'Why White Sesame Oil?',
      q1: 'Versatile Cooking Oil with High Smoke Point:',
      a1: 'Versatile cooking oil for stir-frying, sautéing, and deep-frying. Adapts well to different cooking methods. Ideal for a wide range of culinary applications.',
      q2: 'Nutrition Benfits:',
      a2: ' Despite being calorie-dense, white sesame oil also provides essential nutrients like vitamin E, which can support overall health while you are on a weight loss journey.',
      q3: 'Improves Digestion:',
      a3: 'It is believed to aid digestion, alleviate constipation, and promote a healthy gastrointestinal system when consumed in moderate amounts as part of a balanced diet.',
      q4: 'Light and Delicate Flavor',
      a4: 'It adds a subtle nutty taste to dishes without overpowering the other ingredients, allowing the flavors of the dish to shine through.',
    },
    {
      Img: '/Images/3.jpg',
      mainHeading: 'Why Edible Oil?',
      q1: 'Versatile Cooking Oil with High Smoke Point:',
      a1: 'Edible oil is versatile for various cooking methods and has a high smoke point, making it ideal for frying and high-heat cooking.',
      q2: 'Nutrition Benefits:',
      a2: 'Edible oils provide a concentrated source of energy, containing essential fatty acids such as omega-3 and omega-6, which are vital for the body. Additionally, some edible oils are rich in vitamin E, an antioxidant that helps protect cells from damage.',
      q3: 'Digestion Support:',
      a3: 'Edible oils, especially those with healthy fats, aid digestion by promoting the absorption of fat-soluble vitamins (A, D, E, and K) and contribute to the formation of healthy cell membranes.',
      q4: 'Neutral Flavor Profile:',
      a4: ' Edible oils have a mild and neutral flavor, suitable for various culinary applications, enhancing dishes without overpowering their natural flavors.',
    },
    {
      Img: '/Images/4.jpg',
      mainHeading: 'Why White Safflower Oil?',
      q1: 'Versatile Cooking Oil with High Smoke Point:',
      a1: 'Safflower oil is a versatile cooking oil that complements a variety of dishes. It can be used for sautéing, frying, baking, and even as a salad dressing.',
      q2: 'Neutral Flavor Profile',
      a2: 'Safflower oil has a neutral flavor profile, making it an excellent choice for dishes where you dont want the oil to overpower the natural flavors of the ingredients.',
      q3: 'Weight Management',
      a3: 'The monounsaturated fats in safflower oil may aid in weight management by promoting satiety and reducing the risk of overeating.',
      q4: 'Beneficial for Heart Healt',
      a4: 'Safflower oil is low in saturated fats and high in monounsaturated and polyunsaturated fats, particularly linoleic acid (omega-6 fatty acid). These fats can help reduce LDL cholesterol levels, promoting heart health when used as part of a balanced diet.',
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
    <div
      className="w-full h-auto bg-cover bg-center"
      style={{backgroundImage: "url('Images/hero-bg.png')"}} >
      {!isMobile ? (
        <div>
          {data.map((item, index) => (
            <div
              key={index}
              className={`flex items-center justify-around ${
                index === currentIndex ? '' : 'hidden'
              }`}>
              <Image
                src={item.Img}
                alt="img"
                height={0}
                width={0}
                className="h-[512px] w-[512px]"
              />
              <div className="w-[900px] p-10">
                <h1 className="font-bold text-[40px] flex justify-center border-b-2 border-white">
                  {item.mainHeading}
                </h1>
                <h2 className="text-[#3C5606] font-semibold text-[32px] text-justify">
                  {item.q1}
                </h2>
                <h2 className="font-semibold text-[20px] text-justify">
                  {item.a1}
                </h2>
                <h2 className="text-[#3C5606] font-semibold text-[32px] text-justify">
                  {item.q2}
                </h2>
                <h2 className="font-semibold text-[20px] text-justify">
                  {item.a2}
                </h2>
                <h2 className="text-[#3C5606] font-semibold text-[32px]">
                  {item.q3}
                </h2>
                <h2 className="font-semibold text-[20px] text-justify">
                  {item.a3}
                </h2>
                <h2 className="text-[#3C5606] font-semibold text-[32px] text-justify">
                  {item.q4}
                </h2>
                <h2 className="font-semibold text-[20px] text-justify">
                  {item.a4}
                </h2>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          {data.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-around ${
                index === currentIndex ? '' : 'hidden'
              }`}>
              <Image
                src={item.Img}
                alt="img"
                height={0}
                width={0}
                className="h-[512px] w-[512px]"
              />
              <div className="mx-auto p-10">
                <h1 className="font-bold text-[40px] flex justify-center border-b-2 border-white">
                  {item.mainHeading}
                </h1>
                <h2 className="text-[#3C5606] font-semibold text-[32px] text-justify">
                  {item.q1}
                </h2>
                <h2 className="font-semibold text-[20px] text-justify">
                  {item.a1}
                </h2>
                <h2 className="text-[#3C5606] font-semibold text-[32px] text-justify">
                  {item.q2}
                </h2>
                <h2 className="font-semibold text-[20px] text-justify">
                  {item.a2}
                </h2>
                <h2 className="text-[#3C5606] font-semibold text-[32px]">
                  {item.q3}
                </h2>
                <h2 className="font-semibold text-[20px] text-justify">
                  {item.a3}
                </h2>
                <h2 className="text-[#3C5606] font-semibold text-[32px] text-justify">
                  {item.q4}
                </h2>
                <h2 className="font-semibold text-[20px] text-justify">
                  {item.a4}
                </h2>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Hero;
