import React, {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/Images/logo.png';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={
        'navbar border-b-8 border-yellow-300 bg-white z-10  shadow-xl'
      }>
      <div className="flex justify-between items-center  ">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src={Logo}
              alt=""
              // className="h-22 w-20"
              height={150}
              width={150}
            />
          </Link>
        </div>
        <div className="lg:flex hidden ml-10">
          <Link
            href="/"
            className={
              'mx-5 my-2 lg:my-0  font-Oswald  text-[20px] p-1 bg-transparent rounded hover:text-yellow-300'
            }>
            Home
          </Link>
          <Link
            href="#Process"
            className={
              'mx-5 my-2 lg:my-0  font-Oswald  text-[20px] p-1 bg-transparent rounded hover:text-yellow-300'
            }>
            Our Process
          </Link>
          <Link
            href="#Products"
            className={
              'mx-5 my-2 lg:my-0  font-Oswald  text-[20px] p-1 bg-transparent rounded hover:text-yellow-300'
            }>
            Our Products
          </Link>
          <Link
            href="#FAQ"
            className={
              'mx-5 my-2 lg:my-0  font-Oswald  text-[20px] p-1 bg-transparent rounded hover:text-yellow-300'
            }>
            FAQ
          </Link>
        </div>
        <div className="flex items-center">
          <div className="lg:hidden ml-7 mr-3">
            <button
              className="flex items-center p-2 border rounded text-black border-black"
              onClick={toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-6 cursor-pointer"
                fill="none"
                viewBox="0 0 20 20"
                stroke="currentColor">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl z-20">
                <Link
                  href="/"
                  className={
                    'mx-5 my-2 lg:my-0  font-Oswald  text-[20px] p-1 bg-transparent rounded hover:text-yellow-300'
                  }>
                  Home
                </Link>

                <Link
                  href="#Process"
                  className={
                    'mx-5 my-2 lg:my-0  font-Oswald  text-[20px] p-1 bg-transparent rounded hover:text-yellow-300'
                  }>
                  Our Process
                </Link>
                <Link
                  href="#Products"
                  className={
                    'mx-5 my-2 lg:my-0  font-Oswald  text-[20px] p-1 bg-transparent rounded hover:text-yellow-300'
                  }>
                  Our Products
                </Link>
                <Link
                  href="#FAQ"
                  className={
                    'mx-5 my-2 lg:my-0  font-Oswald  text-[20px] p-1 bg-transparent rounded hover:text-yellow-300'
                  }>
                  FAQ
                </Link>
              </div>
            )}
          </div>
          <Link href="#Contact">
            <button className="hidden lg:block px-2 py-1 mr-2 bg-yellow-300 whitespace-nowrap  rounded text-white font-Oswald font-semibold text-[20px] hover:text-yellow-300 hover:bg-white hover:border-2 hover:border-yellow-300">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
