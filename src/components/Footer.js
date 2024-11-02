import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-bluish py-6 mt-10">
      <div className="container mx-auto text-center">
        <p className="mb-4">Connect with me on social media:</p>
        <div className="flex justify-center space-x-4 mb-4">
          <a
            href="https://github.com/Saksham292001"
            target="_blank"
            rel="noopener noreferrer"
            className="text-bluish hover:text-blue-400 transition-colors duration-300"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/saksham-singh-89b827239/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-bluish hover:text-blue-400 transition-colors duration-300"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
        <p className="text-sm">© {new Date().getFullYear()} Saksham Singh. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
