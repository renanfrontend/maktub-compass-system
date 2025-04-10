
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Menu, X, Instagram, User, FileText, Calendar, Home, Users, ClipboardList, Sun, Moon, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [language, setLanguage] = useState<"pt" | "en">("pt");
  const location = useLocation();

  const navigation = [
    { name: language === "pt" ? "Dashboard" : "Dashboard", href: "/", icon: Home },
    { name: language === "pt" ? "Pacientes" : "Patients", href: "/pacientes", icon: Users },
    { name: language === "pt" ? "Programação" : "Schedule", href: "/programacao", icon: Calendar },
    { name: language === "pt" ? "12 Passos" : "12 Steps", href: "/12-passos", icon: ClipboardList },
    { name: language === "pt" ? "Documentos" : "Documents", href: "/documentos", icon: FileText },
  ];

  // Effect for theme changes
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const changeLanguage = (newLanguage: "pt" | "en") => {
    setLanguage(newLanguage);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-maktub-yellow flex items-center justify-center">
                <span className="text-black font-bold text-sm">M</span>
              </div>
              <div className="ml-2">
                <h1 className="text-xl font-bold text-black dark:text-white">MAKTUB</h1>
                <p className="text-xs text-gray-600 dark:text-gray-300">INSTITUTO TERAPÊUTICO</p>
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
                    : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                <item.icon size={16} />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {/* Language Toggle */}
            <ToggleGroup 
              type="single" 
              value={language} 
              onValueChange={(value) => value && changeLanguage(value as "pt" | "en")}
              className="bg-gray-100 dark:bg-gray-800 rounded-md p-1"
            >
              <ToggleGroupItem value="pt" aria-label="Portuguese" className="text-xs font-medium">
                PT
              </ToggleGroupItem>
              <ToggleGroupItem value="en" aria-label="English" className="text-xs font-medium">
                EN
              </ToggleGroupItem>
            </ToggleGroup>

            {/* Theme Toggle */}
            <Toggle 
              pressed={theme === "dark"} 
              onPressedChange={toggleTheme}
              aria-label="Toggle theme"
              className="p-2"
            >
              {theme === "dark" ? <Moon size={18} /> : <Sun size={18} />}
            </Toggle>

            <a
              href="https://www.instagram.com/institutomaktub/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-maktub-yellow transition-colors"
            >
              <Instagram size={20} />
            </a>
            <Button asChild className="maktub-btn-primary">
              <Link to="/login">
                <User size={16} className="mr-2" />
                {language === "pt" ? "Entrar" : "Login"}
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Theme Toggle */}
            <Toggle 
              pressed={theme === "dark"} 
              onPressedChange={toggleTheme}
              aria-label="Toggle theme"
              size="sm"
              className="p-1"
            >
              {theme === "dark" ? <Moon size={16} /> : <Sun size={16} />}
            </Toggle>
            
            {/* Mobile Language Toggle */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Globe size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => changeLanguage("pt")}>
                  Português
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage("en")}>
                  English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item.href)
                    ? "bg-maktub-yellow text-black"
                    : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
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
                className="text-gray-700 dark:text-gray-300 hover:text-maktub-yellow transition-colors"
              >
                <Instagram size={20} />
              </a>
              <Button asChild className="maktub-btn-primary w-full">
                <Link to="/login">
                  <User size={16} className="mr-2" />
                  {language === "pt" ? "Entrar" : "Login"}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
