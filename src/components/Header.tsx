
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Menu, X, Instagram, User, FileText, Calendar, Home, Users, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Dashboard", href: "/", icon: Home },
    { name: "Pacientes", href: "/pacientes", icon: Users },
    { name: "Programação", href: "/programacao", icon: Calendar },
    { name: "12 Passos", href: "/12-passos", icon: ClipboardList },
    { name: "Documentos", href: "/documentos", icon: FileText },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-maktub-yellow flex items-center justify-center">
                <span className="text-black font-bold text-sm">M</span>
              </div>
              <div className="ml-2">
                <h1 className="text-xl font-bold text-black">MAKTUB</h1>
                <p className="text-xs text-gray-600">INSTITUTO TERAPÊUTICO</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium ${
                  isActive(item.href)
                    ? "bg-maktub-yellow text-black"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <item.icon size={16} />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://www.instagram.com/institutomaktub/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-maktub-yellow transition-colors"
            >
              <Instagram size={20} />
            </a>
            <Button className="maktub-btn-primary">
              <User size={16} className="mr-2" />
              Login
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item.href)
                    ? "bg-maktub-yellow text-black"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <item.icon size={18} />
                <span>{item.name}</span>
              </Link>
            ))}
            <div className="flex items-center space-x-4 px-3 py-2">
              <a
                href="https://www.instagram.com/institutomaktub/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-maktub-yellow transition-colors"
              >
                <Instagram size={20} />
              </a>
              <Button className="maktub-btn-primary w-full">
                <User size={16} className="mr-2" />
                Login
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
