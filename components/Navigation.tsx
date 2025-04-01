'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Gestion du scroll pour changer l'apparence du menu
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // Dans Navigation.tsx
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/90 backdrop-blur-md shadow-lg' : 'bg-black/50 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          {/* Logo et nom du site */}
          <div className="flex justify-start items-center lg:w-0 lg:flex-1">
            <Link href="/" className="flex items-center">
              <Image 
                src="/images/logo.png" 
                alt="IAcodify Logo"
                width={50}  // Ajustez selon la taille souhaitée
                height={50}  // Ajustez selon la taille souhaitée
                priority     // Charge l'image en priorité (bon pour le logo)
              />
              
              <span className="ml-2 font-bold text-xl hidden sm:inline group">
                <span className="text-[#FFD700] group-hover:text-[#FFFFFF] group-hover:drop-shadow-[0_0_5px_rgba(255,215,0,0.7)] transition-all duration-300">IAcodify</span>
              </span>
            </Link>
          </div>
          
          {/* Menu mobile */}
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-white"
              onClick={() => setIsMenuOpen(true)}
            >
              <span className="sr-only">Ouvrir le menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          
          {/* Menu de navigation - Desktop */}
          <nav className="hidden md:flex space-x-10">
            <Link href="/services" className="text-gray-300 hover:text-white">
              Services
            </Link>
            <Link href="/projets" className="text-gray-300 hover:text-white">
              Projets
            </Link>
            <Link href="/produits" className="text-gray-300 hover:text-white">
              Produits
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white">
              Contact
            </Link>
          </nav>
          
          {/* Bouton action - Desktop */}
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-[#008b9e] to-[#00E8FF] hover:opacity-90 transition-all"
            >
              Démarrer un projet
            </Link>
          </div>
        </div>
      </div>

      {/* Menu mobile - Panel */}
      {isMenuOpen && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-gray-900 divide-y-2 divide-gray-800">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[#FFD700] font-bold text-xl">IAcodify</span>
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="sr-only">Fermer le menu</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <Link
                    href="/services"
                    className="text-gray-300 hover:text-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Services
                  </Link>
                  <Link
                    href="/projets"
                    className="text-gray-300 hover:text-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Projets
                  </Link>
                  <Link
                    href="/produits"
                    className="text-gray-300 hover:text-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Produits
                  </Link>
                  <Link
                    href="/contact"
                    className="text-gray-300 hover:text-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <Link
                href="/contact"
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-[#008b9e] to-[#00E8FF] hover:opacity-90"
                onClick={() => setIsMenuOpen(false)}
              >
                Démarrer un projet
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}