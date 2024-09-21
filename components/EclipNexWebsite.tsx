import React, { useState } from 'react';
import { Moon, Users, Gamepad2, Zap, Menu } from 'lucide-react';

const EclipNexLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="w-full h-full">
    <defs>
      <linearGradient id="orbitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#4A00E0" }} />
        <stop offset="100%" style={{ stopColor: "#8E2DE2" }} />
      </linearGradient>
    </defs>
    <circle cx="100" cy="100" r="90" fill="url(#orbitGradient)" />
    <g className="orbit">
      <circle cx="100" cy="20" r="8" fill="#FFD700" />
      <circle cx="180" cy="100" r="8" fill="#4CAF50" />
      <circle cx="100" cy="180" r="8" fill="#2196F3" />
      <circle cx="20" cy="100" r="8" fill="#FF4081" />
    </g>
    <circle cx="100" cy="100" r="40" fill="#1a0933" />
    <path d="M100 60a40 40 0 0 1 0 80" fill="#f0f0f0">
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 100 100"
        to="360 100 100"
        dur="10s"
        repeatCount="indefinite"
      />
    </path>
  </svg>
);

const Feature = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
    <Icon className="w-12 h-12 mb-4 text-yellow-500" />
    <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
    <p className="text-gray-300 text-center">{description}</p>
  </div>
);

const TeamMember = ({ name, role, quote }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
    <h3 className="text-xl font-bold mb-2 text-white">{name}</h3>
    <p className="text-yellow-500 mb-4">{role}</p>
    <blockquote className="italic text-gray-300">"{quote}"</blockquote>
  </div>
);

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <div
        className="w-12 h-12 flex items-center justify-center bg-yellow-500 text-white cursor-pointer rounded-full"
        onClick={() => setOpen(!open)}
      >
        <Menu className="w-8 h-8" />
      </div>

      {open && (
        <ul className="absolute top-16 right-0 bg-gray-800 text-white rounded-lg p-4 shadow-lg">
          <li className="mb-2"><a href="#our-games">Our Games</a></li>
          <li className="mb-2"><a href="#latest-news">Latest News</a></li>
          <li className="mb-2"><a href="#team">Meet the Team</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      )}
    </div>
  );
};

const EclipNexWebsite = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="p-4 bg-gray-800 flex items-center justify-between">
        <div className="w-12 h-12">
          <EclipNexLogo />
        </div>
        <h1 className="text-3xl font-bold">EclipNex Studios</h1>
        <HamburgerMenu />
      </header>
      
      <main className="container mx-auto px-4 py-8">
        {/* Add content here */}
      </main>
    </div>
  );
};

export default EclipNexWebsite;
