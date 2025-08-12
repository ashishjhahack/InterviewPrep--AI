import React from "react";
import { Brain, Mic, Languages } from "lucide-react"; // icons for visuals

const TopFeatures = () => {
  const features = [
    {
      icon: <Brain className="w-10 h-10 text-violet-500" />,
      title: "Generate Tech-Specific Questions",
      description:
        "Instantly create interview questions for any technology you choose — from beginner to expert level.",
    },
    {
      icon: <Mic className="w-10 h-10 text-violet-500" />,
      title: "Real-time AI Interviews",
      description:
        "Practice live interviews with our AI agent, get instant feedback, and improve your confidence.",
    },
    {
      icon: <Languages className="w-10 h-10 text-violet-500" />,
      title: "Learn New Languages",
      description:
        "Boost your communication skills by learning specific languages for global job opportunities.",
    },
  ];

  return (
    <section className="py-12 px-6 md:px-16">
      <h2 className="text-5xl font-bold text-center mb-10 text-gray-800">
        Top Features
      </h2>

      <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-all duration-300 ease-in-out"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopFeatures;
