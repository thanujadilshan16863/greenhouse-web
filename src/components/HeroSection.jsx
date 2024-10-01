import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Define the scale based on scroll position
  const scale = 1 - scrollY * 0.0005;

  return (
    <section
      id="home"
      className="h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{
        backgroundImage: "url('src/images/greenhouse.jpg')", // Set the background image
        backgroundPositionY: `${scrollY * 0.2}px`, // Parallax effect
      }}
    >
      <motion.div
        className="text-center z-10 bg-white bg-opacity-80 p-8 rounded-lg shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, scale }} // Animate scale along with opacity and position
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h1 className="text-5xl font-bold text-gray-800">
          Smart Greenhouse Technology
        </h1>
        <p className="mt-5 mb-9 text-xl text-gray-600">
          Revolutionize agriculture with AI-powered automation.
        </p>
        <a
          href="#features"
          className="mt-8 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200"
        >
          Explore Features
        </a>
      </motion.div>
    </section>
  );
}
