// "use client"; 

import { useState } from 'react';
import { FaEnvelope, FaCheck } from 'react-icons/fa';


export default function EmailCopyButton({ email = 'tommyfhammond@gmail.com' }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };
 
    return (
        <button 
        onClick={handleCopy}
        className="relative focus:outline-none"
        aria-label="Copy email to clipboard"
        >
            {copied ? (
                <span className="flex items-center space-x-2 text-green-500 animate-pulse">
                    <FaCheck className="w-6 h-6" />
                    <span className="text-sm">Copied!</span>
                </span>
            ) : (
                <FaEnvelope className="w-8 h-8 text-gray-600 hover:text-gray-900" />
            )}
        </button>
    );
}