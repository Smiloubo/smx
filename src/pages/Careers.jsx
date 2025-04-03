
import React from "react";
import { motion } from "framer-motion";

function Careers() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8">Rejoignez notre équipe</h1>
        
        <div className="w-full h-[800px] rounded-lg overflow-hidden shadow-lg bg-white">
          <iframe
            src="https://forms.fillout.com/t/uXwsXNUHjWus"
            className="w-full h-full border-0"
            title="Formulaire de candidature"
            allow="camera; microphone"
          />
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

export default Careers;
