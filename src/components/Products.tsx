import Image from 'next/image';
import img1 from '../../public/Images/1.png';
import img2 from '../../public/Images/2.png';
import img3 from '../../public/Images/3.png';
import img4 from '../../public/Images/4.png';
const Products = () => {
  return (
    <div id='Products'>
      <h1 className="border-b-2 border-[#FFD708] font-semibold text-[40px] inline-block m-5">
        Our Products
      </h1>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 flex items-center justify-center">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  className="h-[300px] w-full  object-center"
                  src={img1}
                  height={0}
                  width={0}
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Ground Nut Oil
                  </h1>
                  <p className="leading-relaxed mb-3">
                   Oty:- 1 Ltr
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  className="h-[300px] w-full  object-center"
                  src={img2}
                  height={0}
                  width={0}
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    White Sesame Oil
                  </h1>
                  <p className="leading-relaxed mb-3">
                  Qty:- 1 Ltr
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  className="h-[300px] w-full  object-center"
                  src={img3}
                  height={0}
                  width={0}
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Edible Oil
                  </h1>
                  <p className="leading-relaxed mb-3">
                Qty: - 1 Ltr
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  className="h-[300px] w-full  object-center"
                  src={img4}
                  height={0}
                  width={0}
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Safflower Oil
                  </h1>
                  <p className="leading-relaxed mb-3">
                  Qty:- 1 Ltr
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Products;
