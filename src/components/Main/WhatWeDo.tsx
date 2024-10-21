import React from 'react';


const WhatWeDo: React.FC = () => {
  return (
    <div className="bg-[rgb(26,26,26)] text-white py-16 px-4 md:px-10 lg:px-40">
      <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">What We Do</h2>
      
      <div className="max-w-4xl mx-auto">
        <p className="text-base mb-12 text-center">
          DV Tech Ventures Co. is a venture studio focused on creating and scaling innovative solutions that address critical global challenges. With a base in Africa and a vision that spans the world, we empower visionary entrepreneurs and leverage technology to build impactful ventures.
        </p>

        <div className="bg-[#363636] rounded-xl p-6 md:p-8 mb-12">
          <h3 className="text-xl font-bold mb-4">Our Approach</h3>
          <p className="text-base">
            At DV Tech Ventures, we don't just build businesses—we build solutions that make a difference. Our approach combines deep technical expertise, a commitment to social good, and a hands-on process for transforming ideas into scalable ventures. From ideation to execution, we collaborate with entrepreneurs to turn visions into reality, fostering innovation every step of the way.
          </p>
        </div>

        <div className="bg-[#363636] rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center">
          
          <div>
            <h3 className="text-xl font-bold mb-2">Serenity</h3>
            <p className="text-base mb-4">
              Serenity is our first venture, born from a deeply personal place. Inspired by our co-founder's journey to sobriety, Serenity is designed to support individuals seeking recovery, offering tools and resources to guide them through their path to wellness.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;