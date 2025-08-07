import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Hero from './components/Hero';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Your Name • Software Engineering Portfolio',
  description: 'Portfolio site of Thomas Hammond, CS student and aspiring software engineer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 antialiased">
        <Hero/>
      </body>
    </html>
  );
}
