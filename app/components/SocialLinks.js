"use client";

import { FaGithub, FaLinkedin, FaEnvelope} from 'react-icons/fa';
import EmailCopyButton from './EmailCopyButton';


export default function SocialLinks() {
    return (
    // Container for social icons with horizontal spacing
        <div className="flex space-x-6 mt-8">
        <a
            href="https://github.com/tfhammond"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
        >
            <FaGithub className="w-8 h-8" />
        </a>

        <a
            href="https://www.linkedin.com/in/thomas-hammond42/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
        >
            <FaLinkedin className="w-8 h-8" />
        </a>
        <EmailCopyButton />
    </div>
    );
}
