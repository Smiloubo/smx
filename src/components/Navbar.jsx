
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const navItems = [
    { name: "Accueil", path: "/" },
    { name: "À propos", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const authenticatedItems = [
    { name: "Candidatures", path: "/applications" }
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-orange-500">SMX Transport</h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button variant="ghost" className="text-gray-600 hover:text-orange-500">
                  {item.name}
                </Button>
              </Link>
            ))}
            <Link to="/careers">
              <Button variant="ghost" className="text-gray-600 hover:text-orange-500">
                Postuler
              </Button>
            </Link>
            {isAuthenticated && authenticatedItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button variant="ghost" className="text-gray-600 hover:text-orange-500">
                  {item.name}
                </Button>
              </Link>
            ))}
            {isAuthenticated ? (
              <Button
                variant="outline"
                className="text-orange-500 hover:text-orange-600 border-orange-500 hover:border-orange-600"
                onClick={handleLogout}
              >
                Déconnexion
              </Button>
            ) : null}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/careers"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Postuler
            </Link>
            {isAuthenticated && authenticatedItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {isAuthenticated && (
              <button
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-orange-500 hover:text-orange-600 hover:bg-gray-50"
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
              >
                Déconnexion
              </button>
            )}
          </div>
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;
