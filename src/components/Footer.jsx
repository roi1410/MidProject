import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <img src="university_logo.png" alt="University Logo" className="w-32 h-auto mb-4" />
          <p className="text-sm">Your gateway to knowledge and excellence.</p>
        </div>
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Explore Our University</h3>
          <ul className="text-sm">
            <li><a href="#" className="hover:underline">Admissions</a></li>
            <li><a href="#" className="hover:underline">Academics</a></li>
            <li><a href="#" className="hover:underline">Campus Life</a></li>
            <li><a href="#" className="hover:underline">Research</a></li>
            <li><a href="#" className="hover:underline">Alumni</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <address className="text-sm">
            <p>123 University Avenue</p>
            <p>City, State ZIP</p>
            <p>Email: info@university.edu</p>
            <p>Phone: +1 (123) 456-7890</p>
          </address>
        </div>
      </div>
      <div className="container mx-auto mt-4">
        <h3 className="text-lg font-semibold mb-2">Connect with Us</h3>
        <ul className="flex space-x-4 text-2xl">
          <li><a href="#" className="text-white hover:text-gray-400"><i className="fab fa-facebook"></i></a></li>
          <li><a href="#" className="text-white hover:text-gray-400"><i className="fab fa-twitter"></i></a></li>
          <li><a href="#" className="text-white hover:text-gray-400"><i className="fab fa-instagram"></i></a></li>
          <li><a href="#" className="text-white hover:text-gray-400"><i className="fab fa-linkedin"></i></a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
