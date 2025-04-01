import React from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, User, Tag, Code, Server, Database, Globe, Smartphone } from 'lucide-react';

export const metadata = {
  title: 'Nos Projets | IAcodify',
  description: 'Découvrez nos projets de développement réalisés avec l\'IA pour diverses entreprises et secteurs',
};

// Données des projets (à remplacer par des données dynamiques avec une API)
const projects = [
  {
    id: 'ecommerce-marketplace',
    title: 'Marketplace e-commerce pour LocalMarket',
    category: 'E-commerce',
    client: 'LocalMarket',
    date: 'Mars 2025',
    image: '/images/projects/project1.jpg', // À remplacer par vos images
    status: 'Terminé',
    description: 'Développement d\'une plateforme marketplace permettant à des commerçants locaux de vendre leurs produits en ligne avec système de paiement sécurisé et gestion des vendeurs.',
    deliveryTime: '10 jours'
  },
  {
    id: 'fintech-dashboard',
    title: 'Dashboard analytics pour FinTech',
    category: 'Application Web',
    client: 'FinanceVision',
    date: 'Février 2025',
    image: '/images/projects/project2.jpg',
    status: 'En cours',
    description: 'Création d\'un tableau de bord financier interactif permettant de visualiser et analyser des données financières complexes avec graphiques en temps réel et alertes personnalisées.',
    deliveryTime: '14 jours'
  },
  {
    id: 'delivery-app',
    title: 'Application mobile de livraison ExpressFood',
    category: 'Application Mobile',
    client: 'ExpressFood',
    date: 'Janvier 2025',
    image: '/images/projects/project3.jpg',
    status: 'Terminé',
    description: 'Développement d\'une application de livraison de repas pour iOS et Android avec géolocalisation, suivi en temps réel et système de notation des livreurs.',
    deliveryTime: '21 jours'
  },
  {
    id: 'real-estate-platform',
    title: 'Plateforme immobilière pour ImmoConnect',
    category: 'Site Web',
    client: 'ImmoConnect',
    date: 'Janvier 2025',
    image: '/images/projects/project4.jpg',
    status: 'Terminé',
    description: 'Création d\'un site web immobilier avec recherche avancée, visites virtuelles, estimation automatisée et espace client personnalisé pour une agence nationale.',
    deliveryTime: '15 jours'
  },
  {
    id: 'inventory-management',
    title: 'Système de gestion d\'inventaire pour RetailPro',
    category: 'ERP',
    client: 'RetailPro',
    date: 'Décembre 2024',
    image: '/images/projects/project5.jpg',
    status: 'Terminé',
    description: 'Développement d\'un système complet de gestion d\'inventaire avec code-barres, prévisions des stocks et intégration avec la plateforme e-commerce existante.',
    deliveryTime: '12 jours'
  },
  {
    id: 'healthcare-api',
    title: 'API sécurisée pour HealthConnect',
    category: 'API & Backend',
    client: 'HealthConnect',
    date: 'Mars 2025',
    image: '/images/projects/project6.jpg',
    status: 'En cours',
    description: 'Conception d\'une API sécurisée conforme RGPD permettant l\'échange de données médicales entre différentes plateformes de santé tout en préservant la confidentialité des patients.',
    deliveryTime: 'En cours'
  }
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white pt-24">
      {/* Hero section */}
      <section className="relative py-16 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0B4D7A]/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0B4D7A]/10 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 text-[#FFD700]">
              Nos projets
            </h1>
            <p className="max-w-2xl mx-auto text-gray-400 text-lg">
              Découvrez comment l&apos;IA révolutionne le développement numérique pour nos clients à travers différents secteurs.
            </p>
          </div>
          
          {/* Filtres de projets - peut être rendu fonctionnel avec JavaScript */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              Tous
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-4 py-2 rounded-full text-sm font-medium transition-colors">
              E-commerce
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-4 py-2 rounded-full text-sm font-medium transition-colors">
              Application Web
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-4 py-2 rounded-full text-sm font-medium transition-colors">
              Application Mobile
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-4 py-2 rounded-full text-sm font-medium transition-colors">
              Site Web
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-4 py-2 rounded-full text-sm font-medium transition-colors">
              API & Backend
            </button>
          </div>
          
          {/* Grille de projets */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-500/30 transition-all">
                <div className="relative h-48 overflow-hidden">
                  {/* Remplacer par votre propre système de gestion d'images */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
                    {project.category === 'E-commerce' && <Globe className="text-gray-400 w-12 h-12" />}
                    {project.category === 'Application Web' && <Code className="text-gray-400 w-12 h-12" />}
                    {project.category === 'Application Mobile' && <Smartphone className="text-gray-400 w-12 h-12" />}
                    {project.category === 'Site Web' && <Globe className="text-gray-400 w-12 h-12" />}
                    {project.category === 'ERP' && <Database className="text-gray-400 w-12 h-12" />}
                    {project.category === 'API & Backend' && <Server className="text-gray-400 w-12 h-12" />}
                  </div>
                  
                  {/* Badge de statut */}
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'En cours' 
                      ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30' 
                      : 'bg-green-500/20 text-green-300 border border-green-500/30'
                  }`}>
                    {project.status}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-400 mb-2">
                    <Tag className="w-4 h-4 mr-1" />
                    <span>{project.category}</span>
                    <span className="mx-2">•</span>
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{project.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 text-white hover:text-[#00E8FF] transition-colors">
                    <Link href={`/projets/${project.id}`}>
                      {project.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center text-sm text-gray-400 mb-4">
                    <User className="w-4 h-4 mr-1" />
                    <span>Client: {project.client}</span>
                    <span className="mx-2">•</span>
                    <Clock className="w-4 h-4 mr-1" />
                    <span>Livraison: {project.deliveryTime}</span>
                  </div>
                  
                  <Link 
                    href={`/projets/${project.id}`}
                    className="flex items-center text-[#00E8FF] hover:text-[#FFD700] transition-colors font-medium text-sm"
                  >
                    Voir le projet
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA à la fin de la page */}
          <div className="text-center mt-20 mb-10">
            <h2 className="text-2xl font-bold mb-4 text-white">Prêt à développer votre prochain projet avec nous ?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Découvrez comment notre approche assistée par l&apos;IA peut transformer vos idées en solutions digitales performantes. 
              Nos Neural Creative Officers sont prêts à vous accompagner.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-[#008b9e] to-[#00E8FF] hover:opacity-90 transition-all"
            >
              Démarrer un projet
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}