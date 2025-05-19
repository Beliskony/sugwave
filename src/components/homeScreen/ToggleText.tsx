import React, { useState } from "react";

interface ToggleTextProps {
    text: string;
}

const ToggleText: React.FC<ToggleTextProps> = ({ text }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-row w-full items-center justify-end">
                <button
                    className="flex flex-row items-center text-black hover:underline focus:outline-none"
                    onClick={() => setExpanded((prev) => !prev)}
                >
                    {expanded ? (
                        <>
                            Lire moins
                            <svg className="w-4 h-4 ml-1 transform rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </>
                    ) : (
                        <>
                            Lire plus
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </>
                    )}
                </button>
            </div>
            {expanded && (
                <p className="text-black w-full mt-2">{text}</p>
            )}
        </div>
    );
};

export default ToggleText;