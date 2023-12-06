'use client'
import React, { useState, useEffect } from 'react';

interface Feature {
    id: number;
    title: string;
    description: string;
}

interface TypewriterProps {
    features: Feature[];
}

const Typewriter: React.FC<TypewriterProps> = ({ features }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showCircle, setShowCircle] = useState(true);

    useEffect(() => {
        const currentDescription = features[currentIndex].description;
        if (displayText.length < currentDescription.length) {
            const typingDelay = setTimeout(() => {
                setDisplayText((prevText) => prevText + currentDescription.charAt(displayText.length));
            }, 50); // Adjust typing speed (milliseconds per character)

            return () => clearTimeout(typingDelay);
        } else {
            setShowCircle(false); // Hide the circle after typing finishes
            const nextIndex = (currentIndex + 1) % features.length; // Loop to the next feature
            const loopDelay = setTimeout(() => {
                setCurrentIndex(nextIndex);
                setDisplayText(''); // Reset text for next iteration
                setShowCircle(true); // Show circle for next iteration
            }, 2000); // Delay before starting the next iteration (adjust as needed)

            return () => clearTimeout(loopDelay);
        }
    }, [currentIndex, displayText, features]);


    return (
        <div className="typewriter-container absolute left-0 top-1/2 flex w-full flex-col px-5 transition-[transform,opacity] duration-500 md:pl-6 md:pr-8 lg:pl-8 lg:pr-10 opacity-100 translate-y-[calc(-50%-1em)]">
            <div className="relative font-bold">
                {features[currentIndex]?.title}
            </div>
            <div className="relative description">
                <div className="absolute left-0 top-0 max-w-[650px] transition-opacity duration-300">
                    <span className="transition-opacity duration-500">{displayText}</span>
                    <span className={`inline-block text-amber-500 font-circle delay-[300ms] transition-transform duration-300 ${showCircle ? 'scale-1' : 'scale-0'}`}>
                        <span>●</span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Typewriter;
