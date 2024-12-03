import React, { Suspense, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/Main/MainContent';
import AboutUs from './components/Main/About/About';
import TermsAndPolicy from './components/Main/Home/PrivacyPolicy';

const App: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  return (
    <Router>
      <div className="app">
        <div className="relative flex size-full min-h-screen flex-col bg-[#1a1a1a] dark group/design-root overflow-x-hidden" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
          <div className="layout-container flex h-full grow flex-col">
            <Header aboutRef={aboutRef} featuresRef={featuresRef} />
            <Routes>
              <Route path="/" element={
                <>
                  <MainContent featuresRef={featuresRef} aboutRef={aboutRef} />
                  <AboutUs ref={aboutRef} />
                </>
              } />
              <Route path="/privacy-policy" element={<TermsAndPolicy />} />
            </Routes>
            <Footer featuresRef={featuresRef} aboutRef={aboutRef} />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;