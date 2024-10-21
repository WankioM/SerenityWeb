import React, { forwardRef, useState, useEffect, ForwardRefRenderFunction } from 'react';

interface ContentItem {
  title: string;
  text: string;
  image: string;
}

interface AboutUsProps {}

const AboutUs: ForwardRefRenderFunction<HTMLDivElement, AboutUsProps> = (props, ref) => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ['Our Story', 'Our Mission', 'About DV Tech Ventures'];

  const content: ContentItem[] = [
    {
      title: 'About Us',
      text: `We are committed to building and scaling innovative startups that address global challenges through technology, with a focus on Africa's unique potential. Our mission is to empower visionary entrepreneurs, foster disruptive solutions, and create ventures that drive sustainable growth, not just in Africa but across the world.`,
      image: 'https://serenity-gallery.s3.amazonaws.com/web_images/aa.jpeg',
    },
    {
      title: 'Our Mission & Vision',
      text: `At DV Tech Ventures Co., our vision is to become a global leader in building and scaling ventures that drive meaningful change. We believe in the power of technology to solve real-world challenges and improve lives. By fostering innovation and empowering entrepreneurs, we aim to create solutions that not only address pressing global issues but also inspire transformation across industries, communities, and individuals.

Rooted in Africa, with a focus on the world, our vision is to build ventures that are sustainable, socially impactful, and globally relevant. We strive to create a future where technology is a force for good, bridging gaps, empowering communities, and creating a world where every individual has access to the tools they need to thrive.`,
      image: 'https://serenity-gallery.s3.amazonaws.com/web_images/al.jpg',
    },
    {
      title: 'Our Story',
      text: `David and Vir had always been the kind of friends who could talk about anything, from the ordinary to the extraordinary. Vir, a tech enthusiast with a passion for coding, and David, a doctor dedicated to improving lives, often found themselves exchanging ideas across their fields. One afternoon, what started as a casual conversation about their dreams and ambitions quickly grew into something much more significant. They realized they both shared a deep desire—to build something that could make a real difference in the world. That moment was the spark that led to the creation of DV Tech Ventures Co., a venture studio built on friendship, diverse expertise, and a shared vision to create impactful solutions.

Their combined experiences gave them a unique perspective. Vir's technical skills and love for innovation paired perfectly with David's background in healthcare and his passion for helping people. Together, they saw an opportunity to bridge the gap between technology and well-being, leveraging their strengths to develop ventures that not only address pressing challenges but also make life better for individuals and communities around the globe.

The journey became even more personal with their first product, Serenity. Inspired by Vir's own experience with sobriety, Serenity was created to help individuals on their path to recovery, offering the kind of support and tools Vir wished he had during his own journey. His struggle and triumph became the foundation of DV Tech Ventures Co.'s mission: to build solutions that not only solve problems but also empower individuals and strengthen communities.

DV Tech Ventures Co. isn't just about building businesses—it's about addressing real-world challenges and creating ventures that leave a lasting, positive impact. With a deep commitment to innovation, social good, and a global vision, David and Vir set out to foster disruptive ideas and support visionary entrepreneurs, starting with Serenity. What began as a simple conversation between two friends has now grown into a global mission to inspire change, one venture at a time.`,
      image: 'https://serenity-gallery.s3.amazonaws.com/web_images/rd.jpg',
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
    return <p className="text-white leading-relaxed">{activeContent.text}</p>;
  };

  return (
    <div ref={ref} className="px-4 md:px-10 lg:px-40 py-10 bg-[rgb(26,26,26)]">
      <h2 className="text-white text-3xl md:text-4xl font-bold mb-8 text-center">About DV Tech Ventures</h2>
      
      <div className="flex flex-wrap justify-center mb-8">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-3 py-2 m-1 text-sm md:text-base md:px-4 md:py-2 md:mx-2 rounded-full ${
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
        className="bg-transparent rounded-lg p-4 md:p-8 max-w-5xl mx-auto transition-opacity duration-500 ease-in-out flex flex-col md:flex-row items-center"
        style={{
          opacity: 1,
          transform: 'translateY(0)',
          transition: 'opacity 500ms, transform 500ms',
        }}
      >
        <div className="w-full md:w-1/2 md:pr-8 mb-6 md:mb-0">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{content[activeTab].title}</h3>
          {renderContent()}
        </div>
        <div className="w-full md:w-1/2">
          <img src={content[activeTab].image} alt={content[activeTab].title} className="w-full h-auto rounded-lg" />
        </div>
      </div>

      <div className="mt-12 text-center">
        <a 
          href="https://play.google.com/store/apps/details?id=com.serenity.flutter_application"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 md:px-8 md:py-3 bg-[#363636] text-white rounded-xl font-bold hover:bg-[#4a4a4a] transition-colors duration-300"
        >
          Download Serenity Now
        </a>
      </div>
    </div>
  );
};

export default forwardRef(AboutUs);