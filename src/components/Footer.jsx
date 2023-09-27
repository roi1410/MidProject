import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-blue-900 py-8 text-white">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="mb-4 w-full md:mb-0 md:w-1/3">
          <p className="text-sm">Your gateway to knowledge and excellence.</p>
        </div>
        <div className="mb-4 w-full md:mb-0 md:w-1/3">
          <h3 className="mb-2 text-lg font-semibold">Explore Our University</h3>
          <ul className="text-sm">
            <li>
              <a href="#" className="hover:underline">
                Admissions
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Academics
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Campus Life
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Research
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Alumni
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="mb-2 text-lg font-semibold">Contact Us</h3>
          <address className="text-sm">
            <p>123 University Avenue</p>
            <p>City, State ZIP</p>
            <p>Email: info@university.edu</p>
            <p>Phone: +1 (123) 456-7890</p>
          </address>
        </div>
      </div>
      <div className="container mx-auto mt-4">
        <h3 className="mb-2 text-lg font-semibold">Connect with Us</h3>
        <ul className="flex space-x-4 text-2xl">
          <li>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
