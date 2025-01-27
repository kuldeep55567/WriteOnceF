'use client';

import { Card } from "@/components/ui/card";
import { GradientText } from "@/components/ui/gradient-text";
import { BookOpen, Globe, Rocket, Share2 } from "lucide-react";

const features = [
  {
    icon: <Share2 className="h-8 w-8 text-blue-400" />,
    title: "Cross-Platform Publishing",
    description: "Publish your content simultaneously across Medium, Hashnode, Dev.to, and more with a single click."
  },
  {
    icon: <BookOpen className="h-8 w-8 text-blue-400" />,
    title: "Rich Text Editor",
    description: "Write your content in a beautiful, distraction-free editor with support for markdown and rich media."
  },
  {
    icon: <Globe className="h-8 w-8 text-blue-400" />,
    title: "Analytics Dashboard",
    description: "Track your content performance across all platforms in one unified dashboard."
  },
  {
    icon: <Rocket className="h-8 w-8 text-blue-400" />,
    title: "SEO Optimization",
    description: "Built-in SEO tools to help your content rank better across all platforms."
  }
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
          Why Choose <GradientText>WriteOnce</GradientText>?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 bg-white border-gray-300 hover:border-blue-400 shadow-md transition-colors"
            >
              <div className="mb-4 text-blue-600">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

