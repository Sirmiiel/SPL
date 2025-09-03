import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // Get the current location

  const changeLang = (lng) => {
    if (i18n.language !== lng) i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // activate after 50px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Company Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/images/logo.png"
              alt="Company Logo"
              className="h-20 w-auto"
            />
            <span className="text-2xl font-bold text-lightblue hover:text-blue-600 transition-colors">
              {t('appName')}
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-4 items-center">
            {[
              { to: "/", label: t('nav.home') },
              { to: "/about", label: t('nav.about') },
              { to: "/services", label: t('nav.services') },
              { to: "/quote", label: t('nav.quote') ?? 'Quote' },
              { to: "/contact", label: t('nav.contact') },
            ].map((link, i) => (
              <Link
                key={i}
                to={link.to}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  location.pathname === link.to // Check if the current route matches the link
                    ? "bg-lightblue text-white" // Active link styles
                    : scrolled
                    ? "bg-gray-100 text-gray-800 hover:bg-blue-100"
                    : "bg-black/40 text-white hover:bg-black/60"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Language Switch */}
            <div className="ml-4 flex items-center space-x-2">
              <button
                onClick={() => changeLang('fi')}
                className={`px-3 py-1 rounded-lg font-medium transition-colors ${
                  i18n.language === 'fi'
                    ? 'bg-lightblue text-white'
                    : scrolled
                    ? 'bg-gray-100 text-gray-800 hover:bg-blue-100'
                    : 'bg-black/40 text-white hover:bg-black/60'
                }`}
              >
                {t('nav.fi')}
              </button>
              <span className={scrolled ? "text-gray-400" : "text-white"}>|</span>
              <button
                onClick={() => changeLang('en')}
                className={`px-3 py-1 rounded-lg font-medium transition-colors ${
                  i18n.language === 'en'
                    ? 'bg-lightblue text-white'
                    : scrolled
                    ? 'bg-gray-100 text-gray-800 hover:bg-blue-100'
                    : 'bg-black/40 text-white hover:bg-black/60'
                }`}
              >
                {t('nav.en')}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} mt-4 pb-4`}>
          <div className="flex flex-col space-y-3">
            {[
              { to: "/", label: t('nav.home') },
              { to: "/about", label: t('nav.about') },
              { to: "/services", label: t('nav.services') },
              { to: "/quote", label: t('nav.quote') ?? 'Quote' },
              { to: "/contact", label: t('nav.contact') },
            ].map((link, i) => (
              <Link
                key={i}
                to={link.to}
                className={`hover:bg-blue-600 transition-colors py-2 px-4 rounded-lg ${
                  location.pathname === link.to ? "bg-lightblue text-white" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Language Switch */}
            <div className="flex items-center space-x-4 pt-2">
              <button
                onClick={() => {
                  changeLang('fi');
                  setIsOpen(false);
                }}
                className={`px-3 py-1 rounded-lg font-medium transition-colors ${
                  i18n.language === 'fi'
                    ? 'bg-lightblue text-white'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {t('nav.fi')}
              </button>
              <button
                onClick={() => {
                  changeLang('en');
                  setIsOpen(false);
                }}
                className={`px-3 py-1 rounded-lg font-medium transition-colors ${
                  i18n.language === 'en'
                    ? 'bg-lightblue text-white'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {t('nav.en')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
