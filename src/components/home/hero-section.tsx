"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Edit3 } from "lucide-react";
import { useRouter } from "next/navigation";

export function HeroSection() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-100" />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="flex items-center justify-center mb-6">
          <Edit3 className="h-12 w-12 text-blue-600 mr-2" />
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
            Write<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700">Once</span>
          </h1>
        </div>
        <h2 className="text-xl md:text-3xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Write your content once, publish everywhere. Seamlessly share your blogs across Medium, Hashnode, Dev.to, and more.
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-blue-600 text-white hover:bg-blue-700"
            onClick={() => router.push('/login')}
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-gray-300 text-gray-700 hover:bg-gray-100"
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}
