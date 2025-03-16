import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Made with love section */}
          <div className="flex items-center space-x-2 group">
            <span className="text-sm">Made with</span>
            <FaHeart className="text-red-500 animate-pulse" />
            <span className="text-sm">by</span>
            <span className="text-indigo-400 font-medium text-lg transition-all duration-300 hover:text-indigo-300 transform hover:scale-105">
              Raj Singh Rajpoot
            </span>
          </div>

          {/* Social links */}
          <div className="flex space-x-6">
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 transform hover:scale-125"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 transform hover:scale-125"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 transform hover:scale-125"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
            <a
              href="mailto:youremail@example.com"
              className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 transform hover:scale-125"
            >
              <HiMail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Copyright text */}
        <div className="mt-8 border-t border-gray-800 pt-6 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} ShopEase. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;