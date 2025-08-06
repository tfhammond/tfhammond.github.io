import Image from 'next/image';
import SocialLinks from './SocialLinks';


export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center">
    <div className="relative w-64 h-64 mb-6">
        <Image
          src="/profile.jpg"
          alt="name"
          fill
          className="rounded-full object-cover border-4 border-teal-400"
    />
    </div>

    <h1 className="text-5xl font-bold mb-2">
        Hi, I&apos;m <span className="text-teal-500">Thomas Hammond</span>
    </h1>

    <p className="text-xl text-gray-700 mb-6">CS Student and Aspiring Engineer.</p>

    <SocialLinks />
    </section>
  );
}
