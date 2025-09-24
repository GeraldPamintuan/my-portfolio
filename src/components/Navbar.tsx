import { Menu, Moon, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Dark mode toggle
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Scroll to section
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  // Scrollspy to track active section
  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveSection(link.id);
          }
        }
      });
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50
  bg-[rgba(255,255,255,0.25)] dark:bg-[rgba(26,26,26,0.25)]
  backdrop-blur-lg border-b border-white/10 dark:border-gray-700/30
  shadow-lg transition-colors duration-300"
    >
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="text-2xl font-bold text-white dark:text-gray-200 cursor-pointer hover:text-secondary dark:hover:text-secondary-dark hover:drop-shadow-[0_0_10px_#2dd4bf] dark:hover:drop-shadow-[0_0_10px_#5eead4] hover:scale-105 transform transition duration-300"
            onClick={() => handleScroll('home')}
          >
            <span
              className={
                darkMode
                  ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'
                  : 'bg-gradient-to-r from-white via-pink-300 to-pink-500 bg-clip-text text-transparent'
              }
            >
              GP
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScroll(link.id)}
                className="relative text-white dark:text-gray-200 font-medium group transition duration-300 transform hover:scale-110 hover:cursor-pointer"
              >
                <span
                  className={`transition duration-300 ${
                    activeSection === link.id
                      ? 'text-secondary dark:text-secondary-dark drop-shadow-[0_0_8px_#2dd4bf] dark:drop-shadow-[0_0_8px_#5eead4]'
                      : ''
                  }`}
                >
                  {link.name}
                </span>
                {/* Animated underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-secondary dark:bg-secondary-dark transition-all duration-300 ${
                    activeSection === link.id
                      ? 'w-full shadow-[0_0_8px_#2dd4bf] dark:shadow-[0_0_8px_#5eead4]'
                      : 'w-0 group-hover:w-full group-hover:shadow-[0_0_8px_#2dd4bf] dark:group-hover:shadow-[0_0_8px_#5eead4]'
                  }`}
                ></span>
              </button>
            ))}

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="ml-4 text-white dark:text-gray-200 transition hover:cursor-pointer"
            >
              {darkMode ? (
                <Sun size={22} className="hover:text-accent" />
              ) : (
                <Moon size={22} className="hover:text-black" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-2">
            {/* Dark Mode */}
            <button
              onClick={toggleDarkMode}
              className="text-white dark:text-gray-200 hover:text-secondary dark:hover:text-secondary-dark transition hover:cursor-pointer"
            >
              {darkMode ? (
                <Sun size={22} className="hover:text-accent" />
              ) : (
                <Moon size={22} className="hover:text-black" />
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white dark:text-gray-200 hover:cursor-pointer"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden mobile-dropdown ${
          isOpen ? 'open' : ''
        } shadow-md`}
      >
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => handleScroll(link.id)}
            className="block px-6 py-2.5 w-full text-left text-white dark:text-gray-200 hover:text-secondary dark:hover:text-secondary-dark hover:drop-shadow-[0_0_8px_#2dd4bf] dark:hover:drop-shadow-[0_0_8px_#5eead4] transform transition duration-300 hover:cursor-pointer"
          >
            {link.name}
          </button>
        ))}
      </div>
    </nav>
  );
}
