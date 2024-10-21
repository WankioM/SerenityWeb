import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

interface HeaderProps {
  aboutRef: React.RefObject<HTMLDivElement>;
  featuresRef: React.RefObject<HTMLDivElement>;
}

const Header: React.FC<HeaderProps> = ({ aboutRef, featuresRef }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="border-b border-solid border-b-[#363636] px-4 sm:px-6 md:px-10 py-3">
      <div className="flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2 sm:gap-4 text-white no-underline hover:opacity-80 transition-opacity duration-300">
          <div className="w-8 h-8 sm:w-10 sm:h-10 relative">
            <img 
              src={logo} 
              alt="DV Tech Ventures Logo" 
              className="absolute top-0 left-0 w-full h-full object-contain"
            />
          </div>
          <h2 className="text-white text-base sm:text-lg font-bold leading-tight tracking-[-0.015em]">Serenity</h2>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          <div className="flex items-center gap-4 lg:gap-9">
            <button onClick={() => scrollToSection(aboutRef)} className="text-white text-sm font-medium leading-normal bg-transparent border-none cursor-pointer">About</button>
            <button onClick={() => scrollToSection(featuresRef)} className="text-white text-sm font-medium leading-normal bg-transparent border-none cursor-pointer">Features</button>
            <a className="text-white text-sm font-medium leading-normal" href="#">Blog</a>
          </div>
          <a
            href="https://play.google.com/store/apps/details?id=com.serenity.flutter_application"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#363636] text-white text-sm font-bold leading-normal tracking-[0.015em] no-underline hover:bg-[#4a4a4a] transition-colors duration-300"
          >
            <span className="truncate">Download Serenity</span>
          </a>
         
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4">
          <button onClick={() => scrollToSection(aboutRef)} className="text-white text-sm font-medium leading-normal bg-transparent border-none cursor-pointer">About</button>
          <button onClick={() => scrollToSection(featuresRef)} className="text-white text-sm font-medium leading-normal bg-transparent border-none cursor-pointer">Features</button>
          <a className="text-white text-sm font-medium leading-normal" href="#">Blog</a>
          <a
            href="https://play.google.com/store/apps/details?id=com.serenity.flutter_application"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#363636] text-white text-sm font-bold leading-normal tracking-[0.015em] no-underline hover:bg-[#4a4a4a] transition-colors duration-300"
          >
            <span className="truncate">Download Serenity</span>
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;