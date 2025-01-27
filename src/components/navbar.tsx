'use client';
import React, { useState } from 'react';
import { Search, Pencil, User, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
// Mock data for search results - replace with your actual features
const features = [
    { id: 1, name: 'Dashboard', path: '/dashboard', category: 'Navigation' },
    { id: 2, name: 'New Post', path: '/new-post', category: 'Content' },
    { id: 3, name: 'Analytics', path: '/analytics', category: 'Reports' },
    { id: 4, name: 'Scheduled Posts', path: '/scheduled', category: 'Content' },
    { id: 5, name: 'Settings', path: '/settings', category: 'Account' },
];

export default function Navbar() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const router = useRouter();
    interface Feature {
        id: number;
        name: string;
        path: string;
        category: string;
    }

    const handleSearch = (feature: Feature): void => {
        setIsSearchOpen(false);
        console.log('Navigating to:', feature.path);
    };

    return (
        <>
            <nav className="border-b bg-white sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <Link href="/" passHref>
                            <div className="flex-shrink-0 flex items-center">
                                <div className="flex items-center gap-2">
                                    <div className="h-8 w-8 rounded bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center text-white font-bold text-lg">
                                        W
                                    </div>
                                    <span className="hidden sm:block text-xl font-bold">
                                        <span className="text-blue-600">write</span>
                                        <span className="text-gray-900">Once</span>
                                    </span>
                                </div>
                            </div>
                        </Link>
                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center justify-center flex-1 px-8">
                            <button
                                onClick={() => setIsSearchOpen(true)}
                                className="group w-full max-w-xl h-10 px-4 rounded-lg border border-gray-200 hover:border-gray-300 bg-gray-50 text-gray-500 hover:text-gray-600 flex items-center gap-2 text-sm"
                            >
                                <Search className="h-4 w-4" />
                                <span className="flex-1 text-left">Search features...</span>
                                <kbd className="hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border bg-white px-1.5 font-mono text-xs font-medium text-gray-600">
                                    <span className="text-xs">⌘</span>K
                                </kbd>
                            </button>
                        </div>

                        {/* Desktop Right Section */}
                        <div className="hidden md:flex items-center gap-4">
                            <Link href="/editor" passHref>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-9 w-9 rounded-full"
                                >
                                    <Pencil className="h-5 w-5 text-gray-600" />
                                </Button>
                            </Link>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-9 w-9 rounded-full"
                                    >
                                        <User className="h-5 w-5 text-gray-600" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-48">
                                    <DropdownMenuItem
                                        onClick={() => router.push('/login')}
                                    >
                                        Login
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center gap-2">
                            <button
                                onClick={() => setIsSearchOpen(true)}
                                className="p-2 rounded-lg text-gray-600 hover:bg-gray-100"
                            >
                                <Search className="h-5 w-5" />
                            </button>
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="p-2 rounded-lg text-gray-600 hover:bg-gray-100"
                            >
                                {isMobileMenuOpen ? (
                                    <X className="h-5 w-5" />
                                ) : (
                                    <Menu className="h-5 w-5" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden border-t">
                        <div className="px-4 py-3 space-y-3">
                            <Link href="/editor" passHref>
                                <Button
                                    variant="ghost"
                                    className="w-full justify-start gap-2"
                                >
                                    <Pencil className="h-5 w-5" />
                                    Write
                                </Button>
                            </Link>
                            <Button
                                variant="ghost"
                                className="w-full justify-start gap-2"
                            >
                                <User className="h-5 w-5" />
                                Login
                            </Button>
                        </div>
                    </div>
                )}
            </nav>

            {/* Command Menu for Search */}
            <CommandDialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
                <CommandInput placeholder="Search features..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    {Object.entries(
                        features.reduce<Record<string, Feature[]>>((acc, feature) => {
                            (acc[feature.category] = acc[feature.category] || []).push(feature);
                            return acc;
                        }, {})
                    ).map(([category, items]) => (
                        <CommandGroup key={category} heading={category}>
                            {items.map((feature) => (
                                <CommandItem
                                    key={feature.id}
                                    onSelect={() => handleSearch(feature)}
                                >
                                    {feature.name}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    ))}
                </CommandList>
            </CommandDialog>
        </>
    );
}