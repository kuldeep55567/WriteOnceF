'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Linkedin, Chrome } from "lucide-react";

const OTPInput = ({ onComplete }: { onComplete: (otp: string) => void }) => {
    const [otp, setOtp] = useState(new Array(6).fill(''));

    interface OTPInputProps {
        onComplete: (otp: string) => void;
    }

    interface HandleChangeEvent {
        target: HTMLInputElement;
        parentElement: HTMLElement;
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        if (isNaN(Number(e.target.value))) return;

        const newOtp = [...otp];
        newOtp[index] = e.target.value;
        setOtp(newOtp);

        // Focus next input
        if (e.target.value && index < 5) {
            const nextInput = e.target.parentElement?.nextSibling ? (e.target.parentElement.nextSibling as HTMLElement)?.querySelector('input') as HTMLInputElement : null;
            if (nextInput) nextInput.focus();
        }

        // Check if OTP is complete
        if (newOtp.every(digit => digit !== '')) {
            onComplete(newOtp.join(''));
        }
    };

    interface HandleKeyDownEvent extends React.KeyboardEvent<HTMLInputElement> {
        target: HTMLInputElement & {
            parentElement: HTMLElement & {
                previousSibling: ChildNode | null;
            };
        };
    }

    const handleKeyDown = (e: HandleKeyDownEvent, index: number) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            const prevInput = (e.target.parentElement.previousSibling as HTMLElement)?.querySelector('input') as HTMLInputElement;
            if (prevInput) {
                prevInput.focus();
                const newOtp = [...otp];
                newOtp[index - 1] = '';
                setOtp(newOtp);
            }
        }
    };

    return (
        <div className="flex gap-2 justify-between">
            {otp.map((digit, index) => (
                <div key={index} className="w-12">
                    <Input
                        type="text"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleChange(e, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        className="text-center text-xl h-12 w-full"
                    />
                </div>
            ))}
        </div>
    );
};

export default function LoginPage() {
    const [isOtpSent, setIsOtpSent] = useState(false);

    const handleSendOtp = () => {
        setIsOtpSent(true);
    };

    const handleVerifyOtp = (otp: string) => {
        console.log('Verifying OTP:', otp);
    };

    const handleSocialLogin = (provider: any) => {
        console.log('Social login with:', provider);
    };

return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex w-full max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Left side - Image and Branding */}
            <div className="hidden lg:flex lg:w-1/2 bg-blue-500 text-white p-12 flex-col justify-between">
                <div>
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
                        WriteOnce
                    </h1>
                    <p className="text-xl text-blue-100">Write once, reach everywhere.</p>
                </div>
                <div className="space-y-6">
                    <h2 className="text-3xl font-semibold">Amplify Your Blog's Reach</h2>
                    <p className="text-xl text-blue-100">
                        Create content once and automatically publish across multiple platforms.
                        Save time, maximize impact, and grow your audience effortlessly.
                    </p>
                </div>
                <div className="text-sm text-blue-200">
                    © 2025 writeOnce. All rights reserved.
                </div>
            </div>

            {/* Right side - Login Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
                <Card className="w-full max-w-lg bg-white shadow-xl border-0">
                    <CardHeader className="space-y-2">
                        <CardTitle className="text-2xl font-bold text-gray-900">
                            Welcome to{' '}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-black">
                                WriteOnce
                            </span>
                        </CardTitle>
                        <CardDescription className="text-lg text-gray-600">
                            Login or register to start publishing smarter
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-8">
                        <div className="space-y-6">
                            {!isOtpSent ? (
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-gray-700 text-lg">
                                            Email Address
                                        </Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="name@example.com"
                                            className="h-12 text-lg bg-gray-50 border-gray-200"
                                        />
                                    </div>
                                    <Button
                                        className="w-full h-12 text-lg bg-blue-500 hover:bg-blue-600 text-white"
                                        onClick={handleSendOtp}
                                    >
                                        Continue with Email
                                    </Button>
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    <div className="space-y-4">
                                        <Label className="text-gray-700 text-lg block text-center">
                                            Enter verification code
                                        </Label>
                                        <p className="text-sm text-gray-500 text-center">
                                            We've sent a 6-digit code to your email
                                        </p>
                                        <OTPInput onComplete={handleVerifyOtp} />
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t border-gray-200" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">
                                    Or continue with
                                </span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
                            <Button
                                className="h-12 flex items-center justify-center gap-2 border border-gray-200"
                                onClick={() => handleSocialLogin('google')}
                            >
                                <img src="/oauth/google-chrome.svg" alt="Google" className="h-5 w-5" />
                                <span>Google</span>
                            </Button>
                            <Button
                                className="h-12 flex items-center justify-center gap-2 border border-gray-200"
                                onClick={() => handleSocialLogin('linkedin')}
                            >
                                <img src="/oauth/linkedin.svg" alt="LinkedIn" className="h-5 w-5" />
                                <span>LinkedIn</span>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    </div>
);
}