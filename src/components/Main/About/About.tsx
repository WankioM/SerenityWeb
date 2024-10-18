import React, { forwardRef, useState, useEffect } from 'react';
import aa from '../../../assets/aa.jpeg';
import al from '../../../assets/al.jpg';
import rd from '../../../assets/rd.jpg';

interface ContentItem {
  title: string;
  text?: string;
  facts?: string[];
  image: string;
}

const AboutUs = forwardRef<HTMLDivElement>((props, ref) => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ['Our Story', 'Our Mission', 'Addiction Facts'];

  const content: ContentItem[] = [
    {
      title: 'About Us',
      text: `Addiction is a devastating force that destroys lives, relationships, and futures. At Serenity, we believe in the power of recovery and second chances. Our mission is to help people break free from addiction and rebuild their lives. We're here not just to provide tools but to offer support, community, and hope. Every person who joins Serenity is taking a step toward saving their life, restoring their relationships, and reclaiming their future.`,
      image: aa,
    },
    {
      title: 'Our Mission & Vision',
      text: `Our mission is to save lives by empowering individuals battling addiction with the tools, support, and community they need to reclaim their futures and strengthen the bonds with their loved ones. We strive to make recovery accessible, compassionate, and transformative.

      Our vision is a world where addiction no longer tears families apart. A future where those struggling with substance abuse can find the help they need without stigma, and where recovery is possible for everyone. We envision a community built on hope, strength, and shared recovery, where lives are not just saved but transformed.`,
      image: al,
    },
    {
      title: 'Facts About Addiction',
      facts: [
        '283 million people worldwide suffer from alcohol use disorders.',
        'Alcohol causes over 3 million deaths annually, nearly 6% of global deaths.',
        '1 in 8 adults in the U.S. suffers from both alcohol and drug addiction.',
        'Children of alcoholics are 4 times more likely to develop alcohol addiction.',
        '1 in 5 people will experience addiction in their lifetime.',
        'Recovery programs can boost sobriety chances by 60%.',
      ],
      image: rd,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prevTab) => (prevTab + 1) % tabs.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const renderContent = () => {
    const activeContent = content[activeTab];
    if (activeContent.text) {
      return <p className="text-white leading-relaxed">{activeContent.text}</p>;
    } else if (activeContent.facts && activeContent.facts.length > 0) {
      return (
        <ul className="list-disc list-inside text-white space-y-2">
          {activeContent.facts.map((fact, index) => (
            <li
              key={index}
              className="transition-all duration-300 ease-in-out"
              style={{
                opacity: 1,
                transform: 'translateX(0)',
                transition: 'opacity 300ms, transform 300ms',
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {fact}
            </li>
          ))}
        </ul>
      );
    }
    return null;
  };

  return (
    <div ref={ref} className="px-4 md:px-40 py-10 bg-[rgb(26,26,26)]">
      <h2 className="text-white text-4xl font-bold mb-8 text-center">About Serenity</h2>
      
      <div className="flex justify-center mb-8">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 mx-2 rounded-full ${
              activeTab === index ? 'bg-[#363636] text-white' : 'bg-transparent text-white'
            } hover:bg-[#4a4a4a] transition-colors duration-300`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div
        key={activeTab}
        className="bg-transparent rounded-lg p-8 max-w-5xl mx-auto transition-opacity duration-500 ease-in-out flex items-center"
        style={{
          opacity: 1,
          transform: 'translateY(0)',
          transition: 'opacity 500ms, transform 500ms',
        }}
      >
        <div className="w-1/2 pr-8">
          <h3 className="text-2xl font-bold text-white mb-4">{content[activeTab].title}</h3>
          {renderContent()}
        </div>
        <div className="w-1/2">
          <img src={content[activeTab].image} alt={content[activeTab].title} className="w-full h-auto rounded-lg" />
        </div>
      </div>

      <div className="mt-12 text-center">
        <a 
          href="https://play.google.com/store/apps/details?id=uk.co.serenity.guided.meditation&hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-[#363636] text-white rounded-xl font-bold hover:bg-[#4a4a4a] transition-colors duration-300"
        >
          Download Serenity Now
        </a>
      </div>
    </div>
  );
});

AboutUs.displayName = 'AboutUs';

export default AboutUs;