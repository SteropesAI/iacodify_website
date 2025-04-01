import React from 'react';
import Link from 'next/link';
import { ArrowRight, BrainCircuit, Database, Server, Globe, Smartphone, CheckCircle, Shield, Terminal, Settings, LineChart } from 'lucide-react';

export const metadata = {
  title: 'Nos Services | IAcodify',
  description: 'Découvrez nos services de développement assistés par l\'IA pour transformer votre stratégie digitale',
};

// Données des services
const services = [
  {
    id: 'sites-web',
    title: 'Sites Web',
    icon: <Globe className="w-12 h-12 text-[#00E8FF]" />,
    description: 'Développement de sites web rapides, modernes et optimisés',
    details: 'Notre approche combine l\'intelligence artificielle et l\'expertise technique pour créer des sites web performants, SEO-friendly et parfaitement adaptés aux besoins de votre entreprise.',
    features: [
      'Sites vitrine et corporate',
      'Plateformes e-commerce',
      'Landing pages conversion-ready',
      'Intégration CMS (WordPress, etc.)',
      'Optimisation SEO et performance'
    ],
    cta: 'Créer votre site'
  },
  {
    id: 'applications-web',
    title: 'Applications Web',
    icon: <Terminal className="w-12 h-12 text-[#00E8FF]" />,
    description: 'Développement d\'applications web sur mesure pour vos besoins métier',
    details: 'Nos Neural Creative Officers conçoivent des applications web robustes et évolutives qui automatisent vos processus et améliorent l\'efficacité de votre entreprise.',
    features: [
      'Applications métier sur mesure',
      'Tableaux de bord et outils de reporting',
      'Intranets et portails collaboratifs',
      'Interfaces administrateur intuitives',
      'Intégration avec vos systèmes existants'
    ],
    cta: 'Développer votre application'
  },
  {
    id: 'applications-mobiles',
    title: 'Applications Mobiles',
    icon: <Smartphone className="w-12 h-12 text-[#00E8FF]" />,
    description: 'Création d\'applications mobiles natives et hybrides',
    details: 'Nous concevons des applications mobiles performantes qui offrent une expérience utilisateur exceptionnelle tout en atteignant vos objectifs business.',
    features: [
      'Applications iOS et Android',
      'Apps hybrides multi-plateformes',
      'UX/UI mobile optimisée',
      'Fonctionnalités offline',
      'Intégration de services cloud'
    ],
    cta: 'Créer votre app mobile'
  },
  {
    id: 'ecommerce',
    title: 'Solutions E-commerce',
    icon: <LineChart className="w-12 h-12 text-[#00E8FF]" />,
    description: 'Boutiques en ligne performantes et optimisées pour la conversion',
    details: 'Notre équipe développe des plateformes e-commerce complètes intégrant les meilleures pratiques en matière d\'expérience utilisateur et d\'optimisation des conversions.',
    features: [
      'Boutiques en ligne sur mesure',
      'Intégration des passerelles de paiement',
      'Gestion d\'inventaire automatisée',
      'Optimisation du tunnel d\'achat',
      'Analyses des ventes et recommandations'
    ],
    cta: 'Lancer votre e-commerce'
  },
  {
    id: 'api-integration',
    title: 'API & Intégration',
    icon: <Server className="w-12 h-12 text-[#00E8FF]" />,
    description: 'Développement d\'API et services d\'intégration',
    details: 'Nous créons des API robustes et évolutives qui permettent à vos systèmes de communiquer efficacement, facilitant l\'échange de données et l\'automatisation des processus.',
    features: [
      'Conception d\'API RESTful',
      'Développement de microservices',
      'Intégrations avec services tiers',
      'Automatisation des flux de données',
      'Documentation technique complète'
    ],
    cta: 'Connecter vos systèmes'
  },
  {
    id: 'bases-donnees',
    title: 'Bases de Données & Cloud',
    icon: <Database className="w-12 h-12 text-[#00E8FF]" />,
    description: 'Conception et optimisation d\'infrastructures de données',
    details: 'Notre expertise en bases de données et solutions cloud vous permet d\'optimiser le stockage, l\'accès et la sécurité de vos données critiques.',
    features: [
      'Conception d\'architecture de données',
      'Migration vers le cloud',
      'Optimisation des performances',
      'Sécurisation des données',
      'Solutions de sauvegarde automatisées'
    ],
    cta: 'Optimiser vos données'
  },
  {
    id: 'automatisation',
    title: 'Automatisation & Processus',
    icon: <Settings className="w-12 h-12 text-[#00E8FF]" />,
    description: 'Automatisation de vos processus métier pour plus d\'efficacité',
    details: 'Nous concevons des solutions d\'automatisation sur mesure qui réduisent les tâches manuelles, minimisent les erreurs et augmentent la productivité de votre entreprise.',
    features: [
      'Workflows automatisés',
      'Intégration RPA (Robotic Process Automation)',
      'Automatisation des tâches récurrentes',
      'Optimisation des processus métier',
      'Tableaux de bord de suivi'
    ],
    cta: 'Automatiser vos processus'
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Support',
    icon: <Shield className="w-12 h-12 text-[#00E8FF]" />,
    description: 'Services de maintenance et support pour vos solutions digitales',
    details: 'Notre équipe assure la pérennité et l\'évolution de vos applications avec des services de maintenance proactive, de mise à jour et de support technique.',
    features: [
      'Maintenance préventive et corrective',
      'Mises à jour de sécurité',
      'Évolution fonctionnelle',
      'Optimisation des performances',
      'Support technique réactif'
    ],
    cta: 'Assurer votre maintenance'
  }
];

// L'approche IAcodify
const approach = [
  {
    title: 'Discussion & Analyse',
    description: 'Votre Neural Creative Officer analyse vos besoins, votre marché et vos objectifs pour définir précisément la solution technique adaptée.'
  },
  {
    title: 'Développement IA',
    description: 'Nos modèles d\'IA génèrent rapidement le code et l\'architecture de votre solution en s\'appuyant sur les meilleures pratiques de développement.'
  },
  {
    title: 'Optimisation humaine',
    description: 'Nos experts affinent et optimisent le code généré pour garantir sa qualité, sa sécurité et sa performance.'
  },
  {
    title: 'Tests & Validation',
    description: 'Nous effectuons des tests rigoureux pour assurer la fiabilité, la sécurité et les performances de votre solution.'
  },
  {
    title: 'Déploiement & Support',
    description: 'Après validation, nous déployons votre solution et assurons un suivi pour garantir son bon fonctionnement dans le temps.'
  }
];

// Avantages de notre approche
const benefits = [
  {
    title: 'Développement ultra-rapide',
    description: 'Des délais de livraison jusqu\'à 10 fois plus rapides que les méthodes traditionnelles.'
  },
  {
    title: 'Code optimisé',
    description: 'L\'IA génère un code propre et optimisé, suivant les meilleures pratiques de développement.'
  },
  {
    title: 'Coûts maîtrisés',
    description: 'Réduction significative des coûts grâce à l\'automatisation des tâches de programmation.'
  },
  {
    title: 'Solutions évolutives',
    description: 'Architecture pensée pour évoluer avec vos besoins et s\'adapter à votre croissance.'
  },
  {
    title: 'Sécurité renforcée',
    description: 'Tests de sécurité automatisés et validation humaine pour des applications robustes.'
  },
  {
    title: 'Qualité garantie',
    description: 'Processus itératif avec cycles de test rigoureux pour garantir la fiabilité de vos solutions.'
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white pt-24">
      {/* Hero section */}
      <section className="relative py-16 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0B4D7A]/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0B4D7A]/10 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 text-[#FFD700]">
              Nos services
            </h1>
            <p className="max-w-2xl mx-auto text-gray-400 text-lg">
              Des solutions de développement assistées par l&apos;IA,
              alliant expertise technique, rapidité et innovation.
            </p>
          </div>
          
          {/* Intro IA + Développement */}
          <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
            <div className="flex-1">
              <BrainCircuit className="w-16 h-16 text-[#00E8FF] mb-6" />
              <h2 className="text-3xl font-bold mb-4">L&apos;IA au service de votre transformation digitale</h2>
              <p className="text-gray-400 mb-6">
                IAcodify révolutionne l&apos;approche traditionnelle du développement en combinant l&apos;intelligence artificielle 
                avec l&apos;expertise technique humaine. Cette synergie nous permet de produire des solutions digitales de haute qualité, 
                en un temps record et à des tarifs compétitifs.
              </p>
              <p className="text-gray-400">
                Chaque projet est supervisé par un Neural Creative Officer qui garantit la pertinence technique 
                et la qualité du code, tout en exploitant la puissance des algorithmes les plus avancés pour créer des solutions
                parfaitement adaptées à vos besoins.
              </p>
            </div>
            
            <div className="flex-1 bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-semibold mb-4">Notre promesse</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00E8FF] mt-1" />
                  <span className="text-gray-300">Des solutions digitales robustes et évolutives</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00E8FF] mt-1" />
                  <span className="text-gray-300">Des délais de développement ultra-rapides, à partir de 72h</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00E8FF] mt-1" />
                  <span className="text-gray-300">Des tarifs jusqu&apos;à 70% inférieurs aux agences traditionnelles</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00E8FF] mt-1" />
                  <span className="text-gray-300">Un accompagnement personnalisé par des experts en développement</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00E8FF] mt-1" />
                  <span className="text-gray-300">Des solutions sur mesure et sécurisées pour votre entreprise</span>
                </li>
              </ul>
              
              <div className="mt-6">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-[#008b9e] to-[#00E8FF] hover:opacity-90 transition-all"
                >
                  Discuter de votre projet
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
          
          {/* Liste des services */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-center mb-14 text-[#FFD700]">
              Nos expertises
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service) => (
                <div key={service.id} className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/30 transition-all">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-2 text-white">{service.title}</h3>
                  <p className="text-lg text-[#FFD700] mb-4">{service.description}</p>
                  <p className="text-gray-400 mb-6">{service.details}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#00E8FF] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    href={`/contact?service=${service.id}`}
                    className="inline-flex items-center text-[#00E8FF] hover:text-[#FFD700] transition-colors font-medium"
                  >
                    {service.cta}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
          
          {/* Notre approche */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-center mb-4 text-[#FFD700]">
              Notre approche
            </h2>
            <p className="max-w-2xl mx-auto text-center text-gray-400 mb-14">
              Un processus transparent et efficace qui combine intelligence artificielle et expertise technique
              pour des résultats optimaux.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {approach.map((step, index) => (
                <div key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 relative">
                  {/* Numéro d'étape */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#00E8FF] w-8 h-8 rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  
                  {/* Contenu */}
                  <div className="pt-4">
                    <h3 className="text-lg font-bold mb-2 text-white text-center">{step.title}</h3>
                    <p className="text-gray-400 text-center text-sm">{step.description}</p>
                  </div>
                  
                  {/* Ligne de connexion (sauf pour le dernier) */}
                  {index < approach.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#00E8FF]"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Avantages */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-center mb-4 text-[#FFD700]">
              Les avantages de notre approche
            </h2>
            <p className="max-w-2xl mx-auto text-center text-gray-400 mb-14">
              Découvrez pourquoi notre modèle révolutionne l&apos;industrie du développement logiciel
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                  <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA */}
          <div className="text-center mt-20 mb-10">
            <h2 className="text-2xl font-bold mb-4 text-white">Prêt à transformer votre entreprise ?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Discutons de vos objectifs et de la façon dont notre approche IA peut vous aider à digitaliser vos processus.
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