"use client";

import Link from "next/link";
import { Button } from "./ui/button";

const HeroSection = () => {
    return (
        <div className="pb-20 px-4">
            <div>
                <h1>Track, Analyze & Optimize <br /> Your Finances with Finlytics</h1>
                <p>
                    Gain real-time insights to track expenses, analyze spending patterns, and optimize your budget effortlessly with AI-driven financial intelligence.
                </p>
                <div>
                    <Link href={"/dashboard"}>
                        <Button size="lg" className="px-8">
                            Get Started
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
