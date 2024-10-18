import React from 'react';
import LandingBody from './Home/LandingBody';
import Contact from './Contact/Contact';
import Features from './Products/Features';

interface MainContentProps {
  featuresRef: React.RefObject<HTMLDivElement>;
}

const MainContent: React.FC<MainContentProps> = ({ featuresRef }) => {
  return (
    <div>
      <LandingBody />
      <Features ref={featuresRef} />
      <Contact />
    </div>
  );
};

export default MainContent;