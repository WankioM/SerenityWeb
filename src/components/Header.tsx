import React from 'react';
import { Link } from 'react-router-dom';
interface HeaderProps {
  aboutRef: React.RefObject<HTMLDivElement>;
  featuresRef: React.RefObject<HTMLDivElement>;
}

const Header: React.FC<HeaderProps> = ({ aboutRef, featuresRef }) => {
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div>
      
          <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#363636] px-10 py-3">
            <div className="flex items-center gap-4 text-white">
            <Link to="/" className="flex items-center gap-4 text-white no-underline hover:opacity-80 transition-opacity duration-300">
              <div className="size-4">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Serenity</h2>
            </Link>
            </div>
            <div className="flex flex-1 justify-end gap-8">
              <div className="flex items-center gap-9">
              <button onClick={() => scrollToSection(aboutRef)} className="text-white text-sm font-medium leading-normal bg-transparent border-none cursor-pointer">About</button>
              <button onClick={() => scrollToSection(featuresRef)} className="text-white text-sm font-medium leading-normal bg-transparent border-none cursor-pointer">Features</button>
                <a className="text-white text-sm font-medium leading-normal" href="#">Blog</a>
              </div>
              <a
    href="https://play.google.com/store/apps/details?id=uk.co.serenity.guided.meditation&hl=en"
    target="_blank"
    rel="noopener noreferrer"
    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#363636] text-white text-sm font-bold leading-normal tracking-[0.015em] no-underline hover:bg-[#4a4a4a] transition-colors duration-300"
  >
                <span className="truncate">Download Serenity</span>
              </a>
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/5245e422-a076-4fa8-b754-8e9cc9557d73.png")' }}
              ></div>
            </div>
          </header>
          
        </div>
     
  );
};

export default Header;
