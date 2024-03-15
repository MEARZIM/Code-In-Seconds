"use client"

import { useState } from "react";
import { MdSignalCellularAlt } from "react-icons/md";

import { Button } from "@/components/ui/button";

const topics = [
    "Programming",
    "Data Science",
    "Technology",
    "Writing",
    "Relationships",
    "Machine Learning",
    "Productivity",
    "Cryptocurrency",
    "Psychology",
    "React",
    "UX",
    "Education",
    "Web Development",
    "Deep Learning",
    "Social media",
    "Android",
    "Apple",
    "Women",
];

export const CategoryModal = () => {

    const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

    const handleTopicSelect = (topic: string) => {
        if (selectedTopics.includes(topic)) {
            setSelectedTopics(selectedTopics.filter((item: string) => item !== topic));
        } else {
            setSelectedTopics([...selectedTopics, topic]);
        }
    };

    console.log(selectedTopics)


    return (
        <div className="bg-white py-8 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center mb-6">
                <MdSignalCellularAlt  className="h-10 w-10" />
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-2">What are you interested in?</h1>
            <p className="text-lg sm:text-xl lg:text-lg text-center mb-6">Choose three or more.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
                {topics.map((topic) => (
                    <Button
                        variant="outline"
                        key={topic}
                        onClick={() => handleTopicSelect(topic)}
                        className={selectedTopics.includes(topic ) ? 'bg-blue-500 text-white' : ''}
                    >
                        {topic} +
                    </Button>
                ))}
            </div>
            <div className="flex justify-center">
                <Button className="w-full max-w-xs">Continue</Button>
            </div>
        </div>
    );
};

