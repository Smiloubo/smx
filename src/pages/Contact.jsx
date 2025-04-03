
import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8">Contactez-nous</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            <img 
              src="https://storage.googleapis.com/hostinger-horizons-assets-prod/bc6ce70b-abee-412e-af34-65520d34c64b/437a17e713bb883fb471f7527d6b1099.png"
              className="w-full h-64 object-cover"
              alt="SMX Transport fleet"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            <img 
              src="https://storage.googleapis.com/hostinger-horizons-assets-prod/bc6ce70b-abee-412e-af34-65520d34c64b/74e553506e6d6fd72e3ad3f98e0eaa4c.png"
              className="w-full h-64 object-cover"
              alt="SMX Transport trucks"
            />
          </motion.div>
        </div>

        <div className="text-center">
          <a 
            href="https://discord.gg/vFkFBBDHwS"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Rejoignez-nous sur Discord
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            <img 
              src="https://storage.googleapis.com/hostinger-horizons-assets-prod/bc6ce70b-abee-412e-af34-65520d34c64b/f2bb86a5f4804c725a3abf7cc59ec375.png"
              className="w-full h-64 object-cover"
              alt="SMX Transport in action"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            <img 
              src="https://storage.googleapis.com/hostinger-horizons-assets-prod/bc6ce70b-abee-412e-af34-65520d34c64b/f1d79835424cf8c8b5fae27b072e5a97.jpg"
              className="w-full h-64 object-cover"
              alt="SMX Transport convoy"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
