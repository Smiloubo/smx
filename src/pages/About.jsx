
import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8">À propos de SMX Transport</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Notre Histoire</h2>
            <p className="text-gray-600 mb-6">
              Depuis notre création, SMX Transport s'est engagé à fournir des services de transport de qualité supérieure. Notre expertise et notre dévouement nous ont permis de devenir un leader dans le secteur du transport.
            </p>
            <p className="text-gray-600 mb-6">
              Nous nous efforçons constamment d'améliorer nos services et d'innover pour répondre aux besoins changeants de nos clients.
            </p>
          </div>
          <div>
            <img 
              src="https://storage.googleapis.com/hostinger-horizons-assets-prod/bc6ce70b-abee-412e-af34-65520d34c64b/2c5911174dbeac01f1419cc9d207d746.png"
              className="rounded-lg shadow-lg w-full h-[300px] object-cover"
              alt="SMX Transport headquarters"
            />
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Notre Flotte</h2>
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
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4">Fiabilité</h3>
              <p className="text-gray-600">
                Nous tenons nos promesses et livrons toujours à temps.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4">Qualité</h3>
              <p className="text-gray-600">
                Nous maintenons les plus hauts standards de qualité dans tous nos services.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-600">
                Nous adoptons les dernières technologies pour améliorer nos services.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
