import './Home.css';

import { ChevronDown, Facebook, Github, Instagram, Linkedin } from 'lucide-react';
import { useEffect, useState } from 'react';

import avatarPic from '../../assets/avatar.png';
import profilePic from '../../assets/profile.jpeg';

const images = [profilePic, avatarPic /* add more images if you want */];

export default function Home() {
  const [typedText, setTypedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [current, setCurrent]     = useState(0);
  const [flipping, setFlipping]   = useState(false);

  const handleHover = () => {
    if (flipping) return; // prevent double flip
    setFlipping(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
      setFlipping(false);
    }, 600); // match animation duration
  };

  // Typing effect
  useEffect(() => {
    const roles = [
      'Software Engineer',
      'Full Stack Developer',
      'Problem Solver',
    ];

    const timeout = setTimeout(() => {
      setTypedText(roles[roleIndex].slice(0, charIndex + 1));
      setCharIndex(charIndex + 1);

      if (charIndex + 1 === roles[roleIndex].length) {
        setTimeout(() => {
          setCharIndex(0);
          setRoleIndex((roleIndex + 1) % roles.length);
        }, 1500);
      }
    }, 150);

    return () => clearTimeout(timeout);
  }, [charIndex, roleIndex]);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 overflow-hidden">
      {/* Profile image */}
      <div
        className="perspective relative w-48 h-48 m-6 md:w-64 md:h-64 md:m-10 cursor-pointer"
        onMouseEnter={handleHover}
        onClick={handleHover}
      >
        <div
          className={`relative w-full h-full rounded-full transition-transform duration-600 transform-style preserve-3d ${
            flipping ? 'rotate-y-180' : ''
          }`}
        >
          {/* Current image */}
          <img
            src={images[current]}
            alt="Profile"
            className="absolute w-full h-full rounded-full backface-hidden"
          />

          {/* Next image */}
          <img
            src={images[(current + 1) % images.length]}
            alt="Next"
            className="absolute w-full h-full rounded-full backface-hidden rotate-y-180"
          />

          {/* Glowing border */}
          <span className="absolute inset-0 rounded-full shadow-lg animate-glow pointer-events-none"></span>
        </div>
      </div>

      {/* Heading */}
      <h1 className="text-5xl md:text-6xl font-heading font-bold animate-fade-in-up">
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Hi, I’m Gerald
        </span>{' '}
        <span className="wave">👋</span>
      </h1>

      {/* Typed role */}
      <p className="text-2xl md:text-3xl text-neutral m-6 h-6 md:h-8">
        <span>I am a </span>
        <span className="font-semibold text-secondary">
          {typedText}
          <span className="animate-blink">|</span>
        </span>
      </p>

      {/* Tech stack */}
      {/* <div className="flex gap-3 md:gap-6 justify-center flex-wrap my-6">
          {[
            'React',
            'TypeScript',
            'Tailwind',
            'Java',
            'Spring Boot',
            'MySQL',
          ].map((tech) => (
            <span
              key={tech}
              className="px-5 py-2 rounded-2xl text-primary border border-primary text-sm md:text-md md:font-semibold hover:scale-110 hover:shadow-lg transition"
            >
              {tech}
            </span>
          ))}
        </div> */}

      {/* View CV Button */}
        <a
          href="/Gerald_Pamintuan_CV.pdf" // <-- Put your CV file in /public folder
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-xl shadow-md hover:bg-primary/90 transition"
        >
          View CV
        </a>

      {/* Social links */}
      <div className="flex gap-4 justify-center mt-4">
        <a
          href="https://github.com/GeraldPamintuan"
          target="_blank"
          className="text-gray-500 hover:text-secondary hover:scale-110 transition rounded-xl border p-1.5 border-gray-500"
        >
          <Github size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/geraldpamintuan/"
          target="_blank"
          className="text-gray-500 hover:text-secondary hover:scale-110 transition rounded-xl border p-1.5 border-gray-500"
        >
          <Linkedin size={24} />
        </a>
        <a
          href="https://www.facebook.com/geraldpamintuan.19"
          target="_blank"
          className="text-gray-500 hover:text-secondary hover:scale-110 transition rounded-xl border p-1.5 border-gray-500"
        >
          <Facebook size={24} />
        </a>
        <a
          href="https://www.instagram.com/grldpmntn/"
          target="_blank"
          className="text-gray-500 hover:text-secondary hover:scale-110 transition rounded-xl border p-1.5 border-gray-500"
        >
          <Instagram size={24} />
        </a>
      </div>

      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
        <a href="#about">
          <ChevronDown className="w-8 h-8 text-primary animate-bounce cursor-pointer" />
        </a>
      </div>
    </section>
  );
}
