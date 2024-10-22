import React, { forwardRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  imageUrl: string;
  isImageLeft: boolean;
}

interface Feature {
  title: string;
  description: string;
  imageUrl: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, imageUrl, isImageLeft }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white/5 transition-all duration-300 hover:bg-white/10">
      <div className="flex flex-col md:flex-row items-center">
        {isImageLeft ? (
          <>
            <div className="w-full md:w-1/2 p-6 md:p-8">
              <div className="relative min-h-[300px] md:min-h-[400px] w-full rounded-xl flex items-center justify-center">
                <img 
                  src={imageUrl} 
                  alt={title}
                  className="max-w-full max-h-full w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 transition-colors duration-300">
                {title}
              </h3>
              <p className="text-white/70 leading-relaxed transition-opacity duration-300 group-hover:text-white/90">
                {description}
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="w-full md:w-1/2 p-6 md:p-8 order-2 md:order-1">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 transition-colors duration-300">
                {title}
              </h3>
              <p className="text-white/70 leading-relaxed transition-opacity duration-300 group-hover:text-white/90">
                {description}
              </p>
            </div>
            <div className="w-full md:w-1/2 p-6 md:p-8 order-1 md:order-2">
              <div className="relative min-h-[300px] md:min-h-[400px] w-full rounded-xl flex items-center justify-center">
                <img 
                  src={imageUrl} 
                  alt={title}
                  className="max-w-full max-h-full w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
const Features = forwardRef<HTMLDivElement>((props, ref) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  const features: Feature[] = [
    {
      title: "Virtual Therapist",
      description: "Experience personalized mental health care through five unique AI personas. Choose from Dr. Emily, Dr. James, Dr. Sophia, Dr. Ethan, or Dr. Ava, each designed to address your specific emotional needs with 24/7 availability.",
      imageUrl: 'https://serenity-gallery.s3.amazonaws.com/web_images/ai.png',
    },
    {
      title: "Meditation",
      description: "Discover inner peace with our variety of guided meditation practices. Designed for both beginners and experienced meditators, our sessions promote mindfulness, reduce stress, and enhance emotional well-being anytime, anywhere.",
      imageUrl: 'https://serenity-gallery.s3.amazonaws.com/web_images/meditation.png',
    },
    {
      title: "Rewards for Engagement",
      description: "Earn our native token through consistent engagement with the app. Use these tokens to unlock exclusive features or connect with the community, making your journey in the Serenity ecosystem even more rewarding.",
      imageUrl: "https://serenity-gallery.s3.amazonaws.com/web_images/tasks.png",
    },
    {
      title: "Daily Tasks",
      description: "Build positive habits with manageable daily goals. Complete tasks like journaling, mindfulness exercises, or gratitude entries. Track your progress, earn rewards, and strengthen your motivation to support your mental well-being.",
      imageUrl: "https://serenity-gallery.s3.amazonaws.com/web_images/tasks.png",
    },
    {
      title: "Community",
      description: "Connect with others in recovery through our safe and supportive community space. Share experiences, offer encouragement, and participate in discussions and virtual meetings to build meaningful relationships on your journey to sobriety.",
      imageUrl: "https://serenity-gallery.s3.amazonaws.com/web_images/posts.png",
    },
    {
      title: "Quiz",
      description: "Challenge yourself with engaging quizzes designed to test and expand your knowledge on recovery. Learn more about sobriety, mental health, and personal growth in a fun, interactive way while earning rewards for your progress.",
      imageUrl: "https://serenity-gallery.s3.amazonaws.com/web_images/quizzy.png",
    }
  ];

  return (
    <div ref={ref} className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none" />
      <div className="relative px-4 md:px-10 lg:px-40 py-16 max-w-[1400px] mx-auto">
        <div 
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-[rgb(26,26,26)] group cursor-pointer relative overflow-hidden  rounded-2xl bg-gradient-to-r  p-8 mb-12 transition-all duration-500 "
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 transition-colors duration-300 ">
                Features of the Serenity App
              </h2>
              <p className="text-white/70 text-lg transition-colors duration-300 group-hover:text-white/90">
                {isExpanded ? "Click to collapse" : "Click to explore all features"}
              </p>
            </div>
            <div className={`text-white transition-transform duration-500 ${isExpanded ? "rotate-180" : ""}`}>
              <ChevronDown size={36} className="transition-transform duration-300 group-hover:scale-110" />
            </div>
          </div>
        </div>

        <div className={`grid gap-8 transition-all duration-500 ${isExpanded ? "opacity-100" : "opacity-0 h-0 overflow-hidden"}`}>
          {features.map((feature, index) => (
            <div
              key={index}
              className={`transform transition-all duration-500 ${
                isExpanded ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              <FeatureCard
                title={feature.title}
                description={feature.description}
                imageUrl={feature.imageUrl}
                isImageLeft={index % 2 === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

Features.displayName = 'Features';

export default Features;