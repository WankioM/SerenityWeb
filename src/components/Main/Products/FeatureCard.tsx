import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  imageUrl: string;
  isImageLeft: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, imageUrl, isImageLeft }) => {
  const textContent = (
    <div className="flex flex-col justify-center p-6">
      <h3 className="text-white text-2xl font-bold leading-tight tracking-[-0.015em] mb-4">{title}</h3>
      <p className="text-white/80 text-base leading-relaxed">{description}</p>
    </div>
  );

  const imageContent = (
    <div className="w-full h-96 flex items-center justify-center p-4">
      <img 
        src={imageUrl} 
        alt={title} 
        className="max-w-full max-h-full object-contain rounded-xl shadow-lg"
      />
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row items-center w-full mb-16 pb-16 border-b border-gray-400/20">
      {isImageLeft ? (
        <>
          <div className="w-full md:w-1/2 mb-6 md:mb-0 md:pr-8">{imageContent}</div>
          <div className="w-full md:w-1/2">{textContent}</div>
        </>
      ) : (
        <>
          <div className="w-full md:w-1/2 mb-6 md:mb-0">{textContent}</div>
          <div className="w-full md:w-1/2 md:pl-8">{imageContent}</div>
        </>
      )}
    </div>
  );
};

export default FeatureCard;