'use client';

import Link from 'next/link';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center text-white font-bold text-lg">
                W
              </div>
              <span className="text-xl font-bold">
                <span className="text-blue-600">write</span>
                <span className="text-gray-900">Once</span>
              </span>
            </div>
            <p className="text-gray-500 max-w-sm">
              Write once, publish everywhere. Simplify your content distribution across multiple blogging platforms with a single click.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="hover:text-blue-600">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-blue-600">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-blue-600">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/features" className="text-gray-500 hover:text-blue-600">Features</Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-500 hover:text-blue-600">Pricing</Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-500 hover:text-blue-600">Blog</Link>
              </li>
              <li>
                <Link href="/docs" className="text-gray-500 hover:text-blue-600">Documentation</Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-500 hover:text-blue-600">About</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-500 hover:text-blue-600">Contact</Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-500 hover:text-blue-600">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-500 hover:text-blue-600">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {currentYear} writeOnce. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-blue-600">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-gray-500 hover:text-blue-600">
              Terms
            </Link>
            <Link href="/cookies" className="text-sm text-gray-500 hover:text-blue-600">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}