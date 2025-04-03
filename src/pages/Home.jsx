
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <img 
          src="https://storage.googleapis.com/hostinger-horizons-assets-prod/bc6ce70b-abee-412e-af34-65520d34c64b/2c5911174dbeac01f1419cc9d207d746.png"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Transport truck on highway"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-orange-500">
              SMX Transport
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Votre partenaire de confiance pour tous vos besoins en transport
            </p>
            <a href="https://discord.gg/vFkFBBDHwS" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                Contactez-nous
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-orange-500">Notre Flotte</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
      </section>

      {/* Additional Images Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Rejoignez notre équipe
          </h2>
          <p className="text-xl mb-8">
            Nous recherchons des talents passionnés pour grandir ensemble
          </p>
          <Link to="/careers">
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-orange-500">
              Postuler maintenant
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
