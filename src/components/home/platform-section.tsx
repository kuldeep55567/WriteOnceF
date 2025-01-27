'use client';

import { Card } from "@/components/ui/card";
import Image from "next/image";

const platforms = [
  {
    name: "Medium",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPwML1P3DL-wxPGTkaCTAaRg9C2GqM9mm59Q&s",
    description: "Reach millions of readers on Medium"
  },
  {
    name: "Hashnode",
    logo: "https://images.unsplash.com/photo-1633355444132-695d5876cd00?auto=format&fit=crop&w=100&q=80",
    description: "Connect with the developer community"
  },
  {
    name: "Dev.to",
    logo: "https://images.unsplash.com/photo-1649180556628-9ba704115795?auto=format&fit=crop&w=100&q=80",
    description: "Share with passionate developers"
  }
];

export function PlatformsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
          Supported Platforms
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <Card 
              key={index} 
              className="p-6 bg-white border-gray-300 hover:border-blue-400 shadow-md transition-colors"
            >
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={platform.logo}
                    alt={platform.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{platform.name}</h3>
              </div>
              <p className="text-gray-600">{platform.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}