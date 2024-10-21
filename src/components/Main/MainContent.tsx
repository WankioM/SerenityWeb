import React from 'react';
import LandingBody from './Home/LandingBody';
import WhatWeDo from './WhatWeDo';
import OurTeam from './OurTeam';
import Features from './Products/Features';
import Contact from './Contact/Contact';

interface MainContentProps {
  featuresRef: React.RefObject<HTMLDivElement>;
}

const MainContent: React.FC<MainContentProps> = ({ featuresRef }) => {
  return (
    <div>
      <LandingBody />
      <WhatWeDo />
      <Features ref={featuresRef} />
      <OurTeam />
      <Contact />
    </div>
  );
};

export default MainContent;