import { FaSeedling, FaTemperatureHigh, FaWater } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Features() {
  const [inView, setInView] = useState(false);

  // Detect when the section is in view
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('features');
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="features" className="h-screen py-20 bg-gray-100 bg-center flex items-center justify-center relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center">Why Our Smart Greenhouse?</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <motion.div
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0.1 }}
            variants={cardVariants}
          >
            <FaSeedling className="mx-auto text-green-500 text-6xl" />
            <h3 className="text-xl font-semibold mt-4">Smart Irrigation</h3>
            <p className="mt-2 text-gray-600">Automate water usage to ensure optimal growth conditions.</p>
          </motion.div>
          
          <motion.div
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={cardVariants}
          >
            <FaTemperatureHigh className="mx-auto text-red-500 text-6xl" />
            <h3 className="text-xl font-semibold mt-4">Climate Control</h3>
            <p className="mt-2 text-gray-600">AI-powered temperature control for perfect growing conditions.</p>
          </motion.div>
          
          <motion.div
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={cardVariants}
          >
            <FaWater className="mx-auto text-blue-500 text-6xl" />
            <h3 className="text-xl font-semibold mt-4">Humidity Regulation</h3>
            <p className="mt-2 text-gray-600">Maintain perfect humidity for a thriving greenhouse.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
