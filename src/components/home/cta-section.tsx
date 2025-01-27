'use client';

import { Button } from "@/components/ui/button";
import { GradientText } from "@/components/ui/gradient-text";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
export function CTASection() {
  const router = useRouter();
  return (
    <section className="py-20 bg-gradient-to-t from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
          Ready to <GradientText>Streamline</GradientText> Your Content Publishing?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join WriteOnce today and experience the future of multi-platform content publishing.
        </p>
        <Button size="lg" 
        className="bg-blue-600 hover:bg-blue-700 text-white"
        onClick={() => router.push('/login')}>
          Get Started Now
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}
