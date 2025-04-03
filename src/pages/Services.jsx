
import React from "react";
import { motion } from "framer-motion";

function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8">Nos Services</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <img 
              src="https://storage.googleapis.com/hostinger-horizons-assets-prod/bc6ce70b-abee-412e-af34-65520d34c64b/f2bb86a5f4804c725a3abf7cc59ec375.png"
              className="rounded-lg shadow-lg w-full h-[300px] object-cover"
              alt="Transport routier"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Transport Routier</h2>
            <p className="text-gray-600 mb-6">
              Notre service de transport routier offre des solutions flexibles et fiables pour tous vos besoins logistiques. Nous disposons d'une flotte moderne et bien entretenue pour assurer la sécurité de vos marchandises.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Transport national et international</li>
              <li>Suivi en temps réel</li>
              <li>Véhicules adaptés à tous types de marchandises</li>
              <li>Livraison express disponible</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="md:order-2">
            <img 
              src="https://storage.googleapis.com/hostinger-horizons-assets-prod/bc6ce70b-abee-412e-af34-65520d34c64b/f1d79835424cf8c8b5fae27b072e5a97.jpg"
              className="rounded-lg shadow-lg w-full h-[300px] object-cover"
              alt="Logistique"
            />
          </div>
          <div className="md:order-1">
            <h2 className="text-2xl font-bold mb-4">Solutions Logistiques</h2>
            <p className="text-gray-600 mb-6">
              Nos solutions logistiques complètes vous permettent d'optimiser votre chaîne d'approvisionnement. Nous prenons en charge l'ensemble de vos besoins logistiques.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Stockage et entreposage</li>
              <li>Gestion des stocks</li>
              <li>Préparation de commandes</li>
              <li>Distribution</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <img 
              src="https://storage.googleapis.com/hostinger-horizons-assets-prod/bc6ce70b-abee-412e-af34-65520d34c64b/437a17e713bb883fb471f7527d6b1099.png"
              className="rounded-lg shadow-lg w-full h-[300px] object-cover"
              alt="Express delivery"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Service Express</h2>
            <p className="text-gray-600 mb-6">
              Notre service express garantit une livraison rapide et sûre pour vos envois urgents. Nous comprenons l'importance des délais serrés.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Livraison le jour même</li>
              <li>Service prioritaire</li>
              <li>Couverture nationale</li>
              <li>Disponible 24/7</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Services;
