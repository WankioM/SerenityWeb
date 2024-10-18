import React, { forwardRef } from 'react';
import FeatureCard from './FeatureCard';
import meditation from '../../../assets/meditation.png';
import tasks from '../../../assets/tasks.png';
import sb from '../../../assets/sb.png';
import posts from '../../../assets/posts.png';
import quiz from '../../../assets/quizzy.png';
import ai from '../../../assets/ai.png';

const Features = forwardRef<HTMLDivElement>((props, ref) => {
  const features = [
    {
      title: "AGI Therapist",
      description: "Experience personalized mental health care through five unique AI personas. Choose from Dr. Emily, Dr. James, Dr. Sophia, Dr. Ethan, or Dr. Ava, each designed to address your specific emotional needs with 24/7 availability.",
      imageUrl: ai,
    },
    {
      title: "Meditation",
      description: "Discover inner peace with our variety of guided meditation practices. Designed for both beginners and experienced meditators, our sessions promote mindfulness, reduce stress, and enhance emotional well-being anytime, anywhere.",
      imageUrl: meditation,
    },
    {
      title: "Rewards for Engagement",
      description: "Earn our native token through consistent engagement with the app. Use these tokens to unlock exclusive features or connect with the community, making your journey in the Serenity ecosystem even more rewarding.",
      imageUrl: tasks,
    },
    {
      title: "Daily Tasks",
      description: "Build positive habits with manageable daily goals. Complete tasks like journaling, mindfulness exercises, or gratitude entries. Track your progress, earn rewards, and strengthen your motivation to support your mental well-being.",
      imageUrl: tasks,
    },
    {
      title: "Community",
      description: "Connect with others in recovery through our safe and supportive community space. Share experiences, offer encouragement, and participate in discussions and virtual meetings to build meaningful relationships on your journey to sobriety.",
      imageUrl: posts,
    },
    {
      title: "Quiz",
      description: "Challenge yourself with engaging quizzes designed to test and expand your knowledge on recovery. Learn more about sobriety, mental health, and personal growth in a fun, interactive way while earning rewards for your progress.",
      imageUrl: quiz,
    }
  ];

  return (
    <div ref={ref} className="px-40">
      <h2 className="text-white text-[28px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Features</h2>
      <div className="p-4 rounded-3xl border border-black/10 overflow-hidden bg-[rgba(26,26,26,0.2)]">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            imageUrl={feature.imageUrl}
            isImageLeft={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
});

Features.displayName = 'Features';

export default Features;