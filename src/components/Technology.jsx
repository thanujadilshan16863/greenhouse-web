import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Technology() {
  const [counter, setCounter] = useState(0);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('technology');
      const { top, bottom } = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (top < windowHeight && bottom > 0) {
        setInView(true);
      } else {
        setInView(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setCounter((prev) => (prev < 100 ? prev + 1 : 100));
      }, 30);
      return () => clearInterval(interval);
    }
  }, [inView]);

  return (
    <section id="technology" className="h-screen py-20 bg-white bg-center flex items-center justify-center relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center"
        >
          Cutting-edge Technology
        </motion.h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-6xl font-bold text-green-500">{counter}%</h3>
            <p className="mt-2 text-gray-600">Increased Crop Yield</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-6xl font-bold text-red-500">30%</h3>
            <p className="mt-2 text-gray-600">Energy Efficiency</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-6xl font-bold text-blue-500">24/7</h3>
            <p className="mt-2 text-gray-600">Real-time Monitoring</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

