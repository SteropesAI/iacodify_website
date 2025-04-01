import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Database, Globe, Server, ShoppingCart, Smartphone, CheckCircle, Zap, Settings, Laptop, Bot } from 'lucide-react';

export const metadata = {
  title: 'Nos Produits | IAcodify',
  description: 'Découvrez notre gamme de produits de développement propulsés par l\'IA',
};

// Données des produits (à remplacer par des données dynamiques)
const products = [
  {
    id: 'site-web',
    title: 'Site Web Professionnel',
    icon: <Globe className="w-10 h-10 text-[#00E8FF]" />,
    description: 'Des sites web rapides, modernes et optimisés pour la conversion',
    features: [
      'Design responsive personnalisé',
      'Optimisation SEO intégrée',
      'Interface utilisateur intuitive',
      'Temps de chargement optimisé',
      'Intégration CMS facile à gérer'
    ],
    price: 'À partir de 999€',
    deliveryTime: '72 heures',
    popular: true
  },  
  {
    id: 'e-commerce',
    title: 'Boutique E-commerce',
    icon: <ShoppingCart className="w-10 h-10 text-[#00E8FF]" />,
    description: 'Plateforme de vente en ligne complète avec gestion des produits et paiements',
    features: [
      'Intégration des passerelles de paiement',
      'Gestion d\'inventaire automatisée',
      'Expérience d\'achat optimisée',
      'Tableau de bord administrateur',
      'Analyses des ventes en temps réel'
    ],
    price: 'À partir de 1499€',
    deliveryTime: '7 jours',
    popular: true
  },
  {
    id: 'application-mobile',
    title: 'Application Mobile',
    icon: <Smartphone className="w-10 h-10 text-[#00E8FF]" />,
    description: 'Applications natives et hybrides pour iOS et Android',
    features: [
      'Interfaces intuitives et fluides',
      'Compatibilité multi-plateformes',
      'Optimisation des performances',
      'Intégration API sécurisée',
      'Publication sur les stores'
    ],
    price: 'À partir de 2499€',
    deliveryTime: '10 jours',
    popular: false
  },
  {
    id: 'webapp',
    title: 'Application Web',
    icon: <Laptop className="w-10 h-10 text-[#00E8FF]" />,
    description: 'Applications web progressives pour digitaliser vos processus internes',
    features: [
      'Fonctionnalités sur mesure',
      'Interface adaptative et moderne',
      'Accessibilité multi-appareils',
      'Intégration avec vos systèmes existants',
      'Sécurité des données renforcée'
    ],
    price: 'À partir de 1999€',
    deliveryTime: '7 jours',
    popular: true
  },
  {
    id: 'api',
    title: 'Développement API',
    icon: <Server className="w-10 h-10 text-[#00E8FF]" />,
    description: 'API RESTful performantes et robustes pour connecter vos systèmes',
    features: [
      'Architecture optimisée',
      'Documentation complète',
      'Tests automatisés',
      'Sécurité renforcée',
      'Compatibilité multi-plateformes'
    ],
    price: 'À partir de 1299€',
    deliveryTime: '5 jours',
    popular: false
  },
  {
    id: 'database',
    title: 'Optimisation Base de Données',
    icon: <Database className="w-10 h-10 text-[#00E8FF]" />,
    description: 'Conception et optimisation de votre infrastructure de données',
    features: [
      'Modélisation de données efficiente',
      'Optimisation des requêtes',
      'Migration et nettoyage de données',
      'Sécurisation des accès',
      'Scaling pour hautes performances'
    ],
    price: 'À partir de 999€',
    deliveryTime: '5 jours',
    popular: false
  },
  {
    id: 'chatbot',
    title: 'Chatbot Intelligent',
    icon: <Bot className="w-10 h-10 text-[#00E8FF]" />,
    description: 'Assistants virtuels IA pour automatiser le service client',
    features: [
      'IA conversationnelle avancée',
      'Intégration à votre site web',
      'Apprentissage continu',
      'Support client 24/7',
      'Rapports d\'interactions détaillés'
    ],
    price: 'À partir de 899€ + 29€/mois',
    deliveryTime: '72 heures',
    popular: true
  },
  {
    id: 'erp',
    title: 'ERP & CRM Personnalisés',
    icon: <Settings className="w-10 h-10 text-[#00E8FF]" />,
    description: 'Solutions de gestion d\'entreprise adaptées à vos processus',
    features: [
      'Modules personnalisés selon vos besoins',
      'Automatisation des flux de travail',
      'Tableau de bord analytique',
      'Gestion des relations clients',
      'Intégration avec vos outils existants'
    ],
    price: 'À partir de 2999€',
    deliveryTime: '10 jours',
    popular: false
  },
  {
    id: 'express',
    title: 'Services Express',
    icon: <Zap className="w-10 h-10 text-[#00E8FF]" />,
    description: 'Solutions rapides pour vos besoins urgents en développement',
    features: [
      'Livraison en 24h garantie',
      'Processus accéléré et prioritaire',
      'Révisions accélérées',
      'Suivi en temps réel',
      'Support dédié'
    ],
    price: '+50% sur le tarif standard',
    deliveryTime: '24 heures',
    popular: false
  }
];

// Abonnements mensuels
const subscriptions = [
  {
    id: 'standard',
    title: 'Standard',
    price: 'SMIC brut ',
    description: 'Pour les TPE et entrepreneurs individuels',
    features: [
      'Accès à tous les services',
      'Un projet actif à la fois',
      'Livraison 72h garantie',
      'Révisions illimitées',
      'Neural Creative Officer dédié'
    ],
    featured: false
  },
  {
    id: 'business',
    title: 'Business',
    price: '2x SMIC brut',
    description: 'Pour les PME avec des besoins réguliers',
    features: [
      'Tout ce qu\'inclut Standard',
      'Trois projets actifs à la fois',
      'Livraison 48h garantie',
      'Analyse technique incluse',
      'Maintenance prioritaire'
    ],
    featured: true
  },
  {
    id: 'enterprise',
    title: 'Enterprise',
    price: 'Sur mesure',
    description: 'Pour les grandes entreprises avec des besoins complexes',
    features: [
      'Tout ce qu\'inclut Business',
      'Projets illimités',
      'Livraison 24h disponible',
      'Équipe dédiée',
      'Intégration avec vos systèmes existants'
    ],
    featured: false
  }
];

export default function ProductsPage() {
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
            <div className="inline-block mb-4 px-4 py-1 rounded-full border border-blue-500/30 bg-blue-500/10">
              <Sparkles className="w-4 h-4 text-[#00E8FF] inline mr-2" />
              <span className="text-[#FFD700] text-sm">Propulsé par l&apos;intelligence artificielle</span>
            </div>
            <h1 className="text-4xl font-bold mb-4 text-[#FFD700]">
              Nos produits et services
            </h1>
            <p className="max-w-2xl mx-auto text-gray-400 text-lg">
              Des solutions digitales accélérées par l&apos;IA pour tous vos besoins en développement.
              Du concept au déploiement en un temps record.
            </p>
          </div>
          
          {/* Grille de produits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {products.map((product) => (
              <div key={product.id} className="bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-500/30 transition-all">
                {product.popular && (
                  <div className="bg-gradient-to-r from-[#008b9e] to-[#00E8FF] text-center py-2 text-white text-sm font-medium">
                    Populaire
                  </div>
                )}
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-4">{product.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-white">{product.title}</h3>
                  <p className="text-gray-400 mb-4">{product.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-gray-300 font-medium">Prix:</span>
                      <span className="text-white">{product.price}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-300 font-medium">Délai:</span>
                      <span className="text-white">{product.deliveryTime}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#00E8FF] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href={`/contact?service=${product.id}`}
                    className="inline-flex items-center text-[#00E8FF] hover:text-[#FFD700] transition-colors font-medium mt-auto"
                  >
                    Demander un devis
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* Section abonnements */}
          <div className="mb-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">Abonnements mensuels</h2>
              <p className="max-w-2xl mx-auto text-gray-400">
                Profitez de nos services en continu avec nos formules d&apos;abonnement mensuel sans engagement.
                Un Neural Creative Officer dédié pour tous vos besoins en développement numérique.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {subscriptions.map((sub) => (
                <div 
                  key={sub.id} 
                  className={`rounded-xl overflow-hidden border ${
                    sub.featured 
                      ? 'border-blue-500/50 bg-blue-900/20 relative' 
                      : 'border-gray-700/50 bg-gray-800/30'
                  }`}
                >
                  {sub.featured && (
                    <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[#008b9e] to-[#00E8FF]"></div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-white">{sub.title}</h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-white">{sub.price}</span>
                      <span className="text-gray-400">/mois</span>
                    </div>
                    
                    <p className="text-gray-400 mb-6">{sub.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {sub.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#00E8FF] mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link 
                      href={`/contact?abonnement=${sub.id}`}
                      className={`inline-flex w-full items-center justify-center px-4 py-2 border rounded-md shadow-sm text-base font-medium ${
                        sub.featured 
                          ? 'bg-gradient-to-r from-[#008b9e] to-[#00E8FF] text-white border-transparent hover:opacity-90' 
                          : 'bg-gray-800 text-white border-gray-600 hover:bg-gray-700'
                      } transition-all`}
                    >
                      Commencer maintenant
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="my-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#FFD700]">
              Questions fréquentes
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                <h3 className="text-xl font-medium text-white mb-2">Comment fonctionne le processus de développement ?</h3>
                <p className="text-gray-300">Après votre commande, un Neural Creative Officer analyse votre cahier des charges, supervise la génération du code par IA et affine la solution selon vos besoins spécifiques. Vous recevez ensuite une version fonctionnelle pour validation.</p>
              </div>
              
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                <h3 className="text-xl font-medium text-white mb-2">Quels sont les délais de livraison ?</h3>
                <p className="text-gray-300">Nos délais standard varient de 24h à 10 jours selon la complexité du projet. L&apos;option Express garantit une livraison en 24h pour les projets éligibles moyennant un supplément.</p>
              </div>
              
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                <h3 className="text-xl font-medium text-white mb-2">La maintenance est-elle incluse ?</h3>
                <p className="text-gray-300">Tous nos produits incluent 3 mois de support et maintenance après livraison. Les abonnements mensuels bénéficient d&apos;une maintenance continue et de mises à jour pendant toute la durée de l&apos;abonnement.</p>
              </div>
              
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                <h3 className="text-xl font-medium text-white mb-2">Comment assurez-vous la qualité du code ?</h3>
                <p className="text-gray-300">Notre processus combine l&apos;IA pour la génération rapide et l&apos;expertise humaine pour la validation. Chaque solution passe par des tests rigoureux de qualité, de performance et de sécurité avant d&apos;être livrée.</p>
              </div>
            </div>
          </div>
          
          {/* CTA à la fin de la page */}
          <div className="text-center mt-20 mb-10">
            <h2 className="text-2xl font-bold mb-4 text-white">Besoin d&apos;une solution personnalisée ?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Nos experts sont disponibles pour étudier vos besoins spécifiques et vous proposer une solution digitale sur mesure.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-[#008b9e] to-[#00E8FF] hover:opacity-90 transition-all"
            >
              Nous contacter
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}