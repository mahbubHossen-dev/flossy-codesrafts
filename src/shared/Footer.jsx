import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 border-t w-full py-6 px-5 lg:px-8 xl:px-[8%] mt-24">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + Contact */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src="/logo.png" alt="logo" className="w-8 h-8" />
            <span className="text-2xl font-bold text-[#003366]">Smile Bright</span>
          </div>
          <p className="text-sm mb-2"><strong>P:</strong> (907) 563-6683</p>
          <p className="text-sm"><strong>E:</strong> smbright@gmail.com</p>
        </div>

        {/* Clinic Links */}
        <div>
          <h4 className="font-semibold mb-3">Smile Bright Clinic</h4>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Our Services</li>
            <li>Team</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Helpful Links */}
        <div>
          <h4 className="font-semibold mb-3">Helpful Links</h4>
          <ul className="space-y-2 text-sm">
            <li>Clinics</li>
            <li>Special Offers</li>
            <li>Careers</li>
            <li>Complaints Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Opening Times */}
        <div>
          <h4 className="font-semibold mb-3">Opening Times</h4>
          <ul className="text-sm space-y-2">
            <li><span className="text-blue-600 font-medium">Monday – Friday:</span> 08:00am – 05:00pm</li>
            <li><span className="text-blue-600 font-medium">Saturday:</span> 08:00am – 12:00pm</li>
            <li><span className="text-blue-600 font-medium">Sunday:</span> Closed</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-10 border-t pt-5 text-sm">
        <p>© 2025 Smile Bright. All Rights Reserved.</p>
        <div className="flex gap-4 mt-3 md:mt-0 text-gray-600">
          <FaFacebookF className="text-[#0e6efd] hover:text-blue-600 cursor-pointer" />
          <FaTwitter className="text-[#0e6efd] hover:text-blue-400 cursor-pointer" />
          <FaInstagram className="text-[#0e6efd] hover:text-pink-500 cursor-pointer" />
          <FaLinkedinIn className="text-[#0e6efd] hover:text-blue-700 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
