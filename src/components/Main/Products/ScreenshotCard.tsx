import React from 'react';

interface ScreenshotCardProps {
  imageUrl: string;
}

const ScreenshotCard: React.FC<ScreenshotCardProps> = ({ imageUrl }) => (
  <div className="flex flex-col gap-3">
    <div
      className="w-full h-96 bg-center bg-no-repeat bg-cover rounded-xl"
      style={{ backgroundImage: `url("${imageUrl}")` }}
    />
  </div>
);

export default ScreenshotCard;