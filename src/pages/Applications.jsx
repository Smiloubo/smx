
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

function Applications() {
  const [applications, setApplications] = React.useState([]);
  const [selectedApplication, setSelectedApplication] = React.useState(null);
  const [filter, setFilter] = React.useState("all");

  React.useEffect(() => {
    const storedApplications = JSON.parse(localStorage.getItem("globalApplications") || "[]");
    setApplications(storedApplications);

    // Mettre à jour les candidatures toutes les 5 secondes
    const interval = setInterval(() => {
      const updatedApplications = JSON.parse(localStorage.getItem("globalApplications") || "[]");
      setApplications(updatedApplications);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const filteredApplications = React.useMemo(() => {
    if (filter === "all") return applications;
    return applications.filter(app => app.playStyle === filter);
  }, [applications, filter]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Candidatures</h1>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">
              Candidatures reçues ({filteredApplications.length})
            </h2>
            <div className="flex gap-2">
              <select
                className="px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="all">Tous les styles</option>
                <option value="convoi">Convoi</option>
                <option value="solo">Solo</option>
                <option value="mixte">Mixte</option>
              </select>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Discord
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    TruckersMP
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Heures de jeu
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Style de jeu
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredApplications.map((application) => (
                  <tr key={application.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      {new Date(application.date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {application.discordUsername}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {application.truckersmpUsername}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {application.gameHours} heures
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 rounded-full text-sm ${
                        application.playStyle === 'convoi' ? 'bg-green-100 text-green-800' :
                        application.playStyle === 'solo' ? 'bg-blue-100 text-blue-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {application.playStyle}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedApplication(application)}
                      >
                        Voir détails
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Modal pour afficher les détails */}
          {selectedApplication && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold">Détails de la candidature</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedApplication(null)}
                  >
                    ✕
                  </Button>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-700">Date</h4>
                    <p>{new Date(selectedApplication.date).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Discord</h4>
                    <p>{selectedApplication.discordUsername}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">TruckersMP</h4>
                    <p>{selectedApplication.truckersmpUsername}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Heures de jeu</h4>
                    <p>{selectedApplication.gameHours} heures</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">DLC possédés</h4>
                    <p>{selectedApplication.dlcOwned}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Expérience VTC</h4>
                    <p>{selectedApplication.previousVTC}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Camion préféré</h4>
                    <p>{selectedApplication.preferredTruck}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Style de jeu</h4>
                    <p>{selectedApplication.playStyle}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Disponibilités</h4>
                    <p>{selectedApplication.availability}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700">Motivation</h4>
                    <p className="whitespace-pre-wrap">{selectedApplication.whyUs}</p>
                  </div>
                </div>

                <div className="mt-8 flex justify-end space-x-4">
                  <Button
                    variant="outline"
                    onClick={() => setSelectedApplication(null)}
                  >
                    Fermer
                  </Button>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default Applications;
