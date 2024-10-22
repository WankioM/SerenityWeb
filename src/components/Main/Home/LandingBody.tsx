import React from 'react';
const backgroundImage='https://serenity-gallery.s3.amazonaws.com/web_images/bnw.jpg'

interface LandingBodyProps {
  aboutRef: React.RefObject<HTMLDivElement>;
}

const LandingBody: React.FC<LandingBodyProps> = ({ aboutRef }) => {

  const handleLearnMoreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    aboutRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="bg-[rgb(26,26,26)]">
      <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-10 md:py-20">
        <div className="layout-content-container flex flex-col max-w-[1200px] w-full">
          <div className="@container">
            <div className="p-2 md:p-4">
              <div
                className="flex min-h-[400px] md:min-h-[600px] flex-col gap-6 md:gap-8 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center px-4 py-10 md:px-10 md:py-20 text-center"
                style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.7) 100%), url(${backgroundImage})` }}
              >
                <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                  Empowering Global Change, One Venture at a Time
                </h1>
                <p className="text-white text-lg md:text-xl lg:text-2xl max-w-3xl">
                  We are a venture studio with roots in Africa, building transformative solutions that solve real-world challenges.
                </p>
                <button
                onClick={handleLearnMoreClick}
                  className="mt-4 inline-block px-8 py-3 bg-white text-[rgb(26,26,26)] text-lg font-bold rounded-full hover:bg-opacity-90 transition-colors duration-300"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingBody;