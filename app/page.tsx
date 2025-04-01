import Image from 'next/image'
import { Brain, Clock, Target, Rocket, ChartBar, Coins, X, Store, Briefcase, ShoppingCart, Check, User, TrendingUp, Sparkles, Code, Database, Wrench } from "lucide-react";

export default function Home() {
  const avantages = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Création rapide & efficace",
      description: "Sites web, e-commerce, applications, ERP, automatisations en un temps record."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Solutions sur mesure",
      description: "Personnalisation avancée selon votre activité et vos processus."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Accompagnement expert",
      description: "Un Neural Creative Officer pour piloter et affiner chaque projet."
    },
    {
      icon: <ChartBar className="w-8 h-8" />,
      title: "Automatisation & optimisation",
      description: "Améliorez votre productivité avec l'IA."
    },
    {
      icon: <Coins className="w-8 h-8" />,
      title: "Prix compétitifs",
      description: "Innovation et qualité premium sans exploser votre budget."
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Maintenance et suivi",
      description: "Assistance et mises à jour simplifiées."
    }
  ];

  const cibles = [
    {
      titre: "TPE & PME",
      icon: <Briefcase className="w-6 h-6" />,
      description: "Digitalisation et optimisation des processus internes."
    },
    {
      titre: "Commerçants & artisans",
      icon: <Store className="w-6 h-6" />,
      description: "Création de sites e-commerce et outils de gestion."
    },
    {
      titre: "Startups & entreprises en croissance",
      icon: <Rocket className="w-6 h-6" />,
      description: "Développement rapide d'apps et plateformes."
    },
    {
      titre: "Agences & équipes IT",
      icon: <Code className="w-6 h-6" />,
      description: "Accélération des développements et automatisation de tâches répétitives."
    },
    {
      titre: "Entreprises en transformation digitale",
      icon: <TrendingUp className="w-6 h-6" />,
      description: "Solutions pour accompagner votre transition numérique."
    },
    {
      titre: "E-commerce",
      icon: <ShoppingCart className="w-6 h-6" />,
      description: "Développement de plateformes de vente en ligne optimisées et évolutives."
    },
    {
      titre: "Services financiers",
      icon: <Database className="w-6 h-6" />,
      description: "Automatisation et sécurisation des processus financiers."
    },
    {
      titre: "Entrepreneurs individuels",
      icon: <User className="w-6 h-6" />,
      description: "Solutions web abordables pour développer votre activité."
    }
  ];

  return (
    <main className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section avec background et overlay */}
      <section className="relative h-screen flex items-end justify-center overflow-hidden">
        {/* Image de fond */}
          <div className="absolute inset-0 z-0">
            <Image 
              src="/ui/heroB.png"
              alt="AI Background"
              fill
              priority
              className="object-cover"
            />
            {/* Overlay pour améliorer la lisibilité */}
            
          </div>

        {/* Contenu Hero */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <div className="inline-block mb-6 p-2 bg-black/30 backdrop-blur-sm rounded-full border border-blue-800/30">
            <Sparkles className="w-6 h-6 text-[#00E8FF] inline mr-2" />
            <span className="text-[#FFD700]">La première agence de développement IA assistée par l&apos;homme</span>
          </div>
          <div className="relative text-center mt-5 mb-12 text-5xl font-medium">
            <h1 className="relative text-white pb-3 leading-[65px] z-10 isolate">
              <span className="text-[#FFD700] typing-effect"> &gt; Codez Demain !? </span>
            </h1> 
          </div>          
{/*<p className="inline-block mb-6 p-2 bg-black/30 backdrop-blur-sm rounded-full border border-blue-800/30 text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            La première agence où l&apos;intelligence artificielle et l&apos;expertise humaine travaillent ensemble pour créer des sites web, applications et solutions digitales sur mesure.
          </p>*/}
        </div>
      </section>

      {/* Section IA + Humain avec effet de fond subtil */}
      <section className="relative py-24 overflow-hidden">
        {/* Fond avec effet de gradient et formes */}
        <div className="absolute inset-0 bg-[#0A0A0F]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B4D7A]/10 to-transparent"></div>
          {/* Cercles décoratifs flous */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#00E8FF]/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#0B4D7A]/5 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Partie gauche avec les icônes */}
            <div className="flex-1 flex justify-center">
              <div className="relative">
                {/* Cercle IA */}
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-[#008b9e] to-[#00E8FF] flex items-center justify-center">
                  <Brain className="w-16 h-16 text-white" />
                </div>
                {/* Ligne de connexion */}
                <div className="absolute top-1/2 left-full w-12 h-0.5 bg-gradient-to-r from-[#00E8FF] to-[#FFD700]"></div>
                {/* Cercle Humain */}
                <div className="absolute -right-24 top-0 w-32 h-32 rounded-full bg-gradient-to-r from-[#b59b00] to-[#FFD700] flex items-center justify-center">
                  <Code className="w-16 h-16 text-white" />
                </div>
                {/* Effet de brillance */}
                <div className="absolute -inset-4 bg-[#0B4D7A]/20 blur-2xl rounded-full"></div>
              </div>
            </div>

            {/* Partie droite avec le texte */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl font-bold mb-6 bg-clip-text text-[#FFD700]">
                L&apos;IA boostée par l&apos;expertise humaine
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Nos <span className="text-[#00E8FF] font-semibold">Neural Creative Officers</span> vous accompagnent à chaque étape pour comprendre vos besoins, guider l&apos;IA et affiner les solutions afin qu&apos;elles soient parfaitement adaptées à votre entreprise.
              </p>
              
              {/* Points clés */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00E8FF]"></div>
                  <span className="text-gray-300">Développement accéléré par &apos;IA</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00E8FF]"></div>
                  <span className="text-gray-300">Solutions personnalisées</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00E8FF]"></div>
                  <span className="text-gray-300">Qualité et fiabilité garanties</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comment ça marche Section */}
      <section className="py-20 px-4 bg-gray-800/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#FFD700]">
            Comment ça marche ?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-[#00E8FF] flex items-center justify-center text-white font-bold">1</div>
              <h3 className="text-xl font-semibold mb-4 pt-2 text-gray-100">Discussion avec votre NCO</h3>
              <p className="text-gray-400">Identification de vos besoins et stratégie digitale.</p>
            </div>
            
            <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-[#00E8FF] flex items-center justify-center text-white font-bold">2</div>
              <h3 className="text-xl font-semibold mb-4 pt-2 text-gray-100">Développement IA accéléré</h3>
              <p className="text-gray-400">Code généré et optimisé en un temps record.</p>
            </div>
            
            <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-[#00E8FF] flex items-center justify-center text-white font-bold">3</div>
              <h3 className="text-xl font-semibold mb-4 pt-2 text-gray-100">Personnalisation & test</h3>
              <p className="text-gray-400">Ajustements humains pour garantir performance et fiabilité.</p>
            </div>
            
            <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-[#00E8FF] flex items-center justify-center text-white font-bold">4</div>
              <h3 className="text-xl font-semibold mb-4 pt-2 text-gray-100">Livraison & support</h3>
              <p className="text-gray-400">Votre solution est prête, avec un suivi sur mesure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800 z-0"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#FFD700]">
            Pourquoi choisir IAcodify ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {avantages.map((avantage, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-[#00E8FF]/50 transition-all">
                <div className="text-[#00E8FF] mb-4">{avantage.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-100">{avantage.title}</h3>
                <p className="text-gray-400">{avantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pour qui Section */}
      <section className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#FFD700]">
            Pour qui ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cibles.map((cible, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-gray-800/50 rounded-xl border border-gray-700/50">
                <div className="text-[#00E8FF]">{cible.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-100">{cible.titre}</h3>
                  <p className="text-gray-400">{cible.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Tarification */}
      <section className="relative py-24 bg-[#0A0A0F]">
        {/* Effet de fond */}
        <div className="absolute inset-0">
          <div className="absolute right-0 top-0 w-96 h-96 bg-[#00E8FF]/10 rounded-full blur-[120px]"></div>
          <div className="absolute left-0 bottom-0 w-96 h-96 bg-[#0B4D7A]/5 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4">
          {/* En-tête */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#FFD700]">
              Comparez et choisissez votre solution
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Un investissement rentable pour votre développement numérique
            </p>
            <p className="text-center text-gray-400 mt-12">
              Comparatif entre une solution de développement traditionnelle et l&apos;abonnement mensuel IAcodify<br></br>
              Vous trouverez tous les produits sur la page Produits.
            </p>
          </div>

          {/* Grille de prix */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Option Développement traditionnel */}
            <div className="relative p-8 rounded-2xl border border-gray-800 bg-black/40 backdrop-blur-sm">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl blur opacity-30"></div>
              <div className="relative">
                <h3 className="text-2xl font-bold text-gray-200 mb-2">Développement traditionnel</h3>
                <p className="text-gray-400 mb-6">Embauche ou prestataires</p>
                
                <div className="mb-8">
                  <div className="text-3xl font-bold text-white">
                    4 000 à 8 000€ / mois
                  </div>
                  <p className="text-sm text-gray-500">(salaire développeur + charges)</p>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-400 mt-1" />
                    <span className="text-gray-300">Disponibilité limitée aux heures de travail</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-400 mt-1" />
                    <span className="text-gray-300">Compétences limitées à l&apos;expertise individuelle</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-400 mt-1" />
                    <span className="text-gray-300">Délais de développement étendus</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-400 mt-1" />
                    <span className="text-gray-300">Coûts élevés pour les technologies spécialisées</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-400 mt-1" />
                    <span className="text-gray-300">Capacité limitée par les ressources humaines</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-400 mt-1" />
                    <span className="text-gray-300">Difficulté à s&apos;adapter rapidement aux nouvelles technologies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-400 mt-1" />
                    <span className="text-gray-300">Coûts de recrutement et de formation élevés</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-400 mt-1" />
                    <span className="text-gray-300">Maintenance et mises à jour souvent coûteuses</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Option IAcodify */}
            <div className="relative p-8 rounded-2xl border border-blue-800/30 bg-[#00E8FF]/10 backdrop-blur-sm">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#008b9e] to-[#00E8FF] rounded-2xl blur opacity-30"></div>
              <div className="relative">          
                <h3 className="text-2xl font-bold text-gray-200 mb-2">Solution IAcodify</h3>
                <p className="text-gray-400 mb-6">IA + Expertise humaine</p>
                
                <div className="mb-8">
                  <div className="text-3xl font-bold text-white">
                    SMIC brut <span className="text-lg font-normal text-gray-400">/mois</span>
                  </div>
                  <p className="text-sm text-gray-500">Sans engagement</p>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#00E8FF] mt-1" />
                    <span className="text-gray-300">Développement accéléré par l&apos;IA 24/7</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#00E8FF] mt-1" />
                    <span className="text-gray-300">Accès à une multitude de technologies et frameworks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#00E8FF] mt-1" />
                    <span className="text-gray-300">Livraison en 72h garanti (option express 24h)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#00E8FF] mt-1" />
                    <span className="text-gray-300">Solutions optimisées et sécurisées</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#00E8FF] mt-1" />
                    <span className="text-gray-300">Capacité illimitée (1 projet actif à la fois)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#00E8FF] mt-1" />
                    <span className="text-gray-300">Toujours à jour avec les dernières technologies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#00E8FF] mt-1" />
                    <span className="text-gray-300">Scalabilité immédiate selon les besoins</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#00E8FF] mt-1" />
                    <span className="text-gray-300">Maintenance et support inclus</span>
                  </li>
                </ul>

                <button className="w-full bg-gradient-to-r from-[#008b9e] to-[#00E8FF] hover:opacity-90 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all">
                  Commencer maintenant
                </button>
              </div>
            </div>
          </div>

          {/* Note en bas */}
          <p className="text-center text-gray-400 mt-12">
            Tous nos produits incluent un accompagnement personnalisé et un accès à notre plateforme IA pour les abonnements.
          </p>
        </div>
      </section>
    </main>
  );
}