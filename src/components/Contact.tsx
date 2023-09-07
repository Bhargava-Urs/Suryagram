import Image from 'next/image';
import Logo from '../../public/Images/logo.png';
import call from '../../public/Images/call.png';
import mail from '../../public/Images/mail.png';
import {useState, useEffect} from 'react';
const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here
    console.log(formData);
    // Clear form data after submission (optional)
    setFormData({
      fullName: '',
      email: '',
      phoneNumber: '',
      message: '',
    });
  };
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
    <div className="mt-16" id='Contact'>
      {!isMobile ? (
        <div className="flex items-center justify-evenly">
          <div className="max-w-lg  mt-8 p-4 border rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="fullName"
                  className="block text-gray-800 font-semibold">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full border rounded-md p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-800 font-semibold">
                  Email ID
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border rounded-md p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phoneNumber"
                  className="block text-gray-800 font-semibold">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full border rounded-md p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-800 font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-[400px] border rounded-md p-2"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-yellow-300 text-white font-semibold px-4 py-2 rounded-md">
                Submit
              </button>
            </form>
          </div>
          <div>
            <h1 className="font-semibold text-[28px]">Site Map</h1>
            <p className="text-[20px]">-Home</p>
            <p className="text-[20px]">-About Us</p>
            <p className="text-[20px]">-Our Process</p>
            <p className="text-[20px]">-Our Products</p>
          </div>
          <div>
            <Image
              src={Logo}
              alt=""
              height={0}
              width={0}
              className="h-40 w-40"
            />
            <div className="flex items-center ">
              <Image
                src={call}
                alt=""
                height={0}
                width={0}
                className="h-6 w-6 mr-5"
              />
              <p>+91-9959617677</p>
            </div>
            <div className="flex items-center ">
              <Image
                src={mail}
                alt=""
                height={0}
                width={0}
                className="h-6 w-6 mr-5"
              />
              <p>kishore@gmail.com</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-evenly">
          <div className="max-w-lg  mt-8 p-4 border rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="fullName"
                  className="block text-gray-800 font-semibold">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full border rounded-md p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-800 font-semibold">
                  Email ID
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border rounded-md p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phoneNumber"
                  className="block text-gray-800 font-semibold">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full border rounded-md p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-800 font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full border rounded-md p-2"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-yellow-300 text-white font-semibold px-4 py-2 rounded-md">
                Submit
              </button>
            </form>
          </div>
          <div>
            <h1 className="font-semibold text-[28px]">Site Map</h1>
            <p className="text-[20px]">-Home</p>
            <p className="text-[20px]">-About Us</p>
            <p className="text-[20px]">-Our Process</p>
            <p className="text-[20px]">-Our Products</p>
          </div>
          <div>
            <Image
              src={Logo}
              alt=""
              height={0}
              width={0}
              className="h-40 w-40"
            />
            <div className="flex items-center ">
              <Image
                src={call}
                alt=""
                height={0}
                width={0}
                className="h-6 w-6 mr-5"
              />
              <p>+91-9959617677</p>
            </div>
            <div className="flex items-center ">
              <Image
                src={mail}
                alt=""
                height={0}
                width={0}
                className="h-6 w-6 mr-5"
              />
              <p>kishore@gmail.com</p>
            </div>
          </div>
        </div>
      )}

      <div className="bg-yellow-300">
        <p className="text-center font-semibold text-[20px]">
          © Suryachakra Foods Pvt. Ltd. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
