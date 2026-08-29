import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ProjectsGrid from '@/components/ProjectsGrid';

export const metadata = {
  title: 'Nos Projets | IAcodify',
  description: 'Découvrez nos projets de développement réalisés avec l\'IA pour diverses entreprises et secteurs',
};

const cardImages: Record<string, string> = {
  inkia: '/images/projects/inkia.png',
  'inkia-pro': '/images/projects/inkia-pro.png',
  bulles: '/images/projects/bulles.png',
  littlehenri: '/images/projects/littlehenri.png',
  neurone21: '/images/projects/neurone21.png',
  vientdici: '/images/projects/vientdici.png',
  iagencify: '/images/projects/iagencify-live.png',
  iashieldify: '/images/projects/iashieldify.webp',
  iadatafy: '/images/projects/iadatafy.webp',
};

const projects = [
  {
    id: 'inkia',
    title: 'Inkia',
    url: 'https://www.inkia.art',
    status: 'Live',
    tag: 'Sites' as const,
    kind: 'site' as const,
  },
  {
    id: 'inkia-pro',
    title: 'Inkia Pro',
    url: 'https://pro.inkia.art',
    status: 'Live',
    tag: 'Sites' as const,
    kind: 'site' as const,
  },
  {
    id: 'bulles',
    title: 'Bulles d Inkia',
    url: 'https://bulles.inkia.art',
    status: 'Live',
    tag: 'Sites' as const,
    kind: 'site' as const,
  },
  {
    id: 'littlehenri',
    title: 'Little Henri',
    url: 'https://littlehenri.inkia.art',
    status: 'Live',
    tag: 'Sites' as const,
    kind: 'site' as const,
  },
  {
    id: 'neurone21',
    title: 'Neurone21',
    url: 'https://neurone21.com',
    status: 'Live',
    tag: 'Sites' as const,
    kind: 'site' as const,
  },
  {
    id: 'neodisciplina',
    title: 'Neodisciplina',
    url: 'https://neodisciplina.com',
    status: 'Live',
    tag: 'Sites' as const,
    kind: 'site' as const,
  },
  {
    id: 'iagencify',
    title: 'IAgencify',
    url: 'https://iagencify.com',
    status: 'Live',
    tag: 'Sites' as const,
    kind: 'site' as const,
  },
  {
    id: 'vientdici',
    title: 'Vient d ici',
    url: 'https://vientdici.com',
    status: 'Live',
    tag: 'Sites' as const,
    kind: 'site' as const,
  },
  {
    id: 'iashieldify',
    title: 'IAshieldify',
    url: 'https://iashieldify.com',
    status: 'En cours',
    tag: 'Sites' as const,
    kind: 'site' as const,
  },
  {
    id: 'iadatafy',
    title: 'IAdatafy',
    url: 'https://iadatafy.com',
    status: 'En cours',
    tag: 'Sites' as const,
    kind: 'site' as const,
  },
  {
    id: 'bolt',
    title: 'Bolt',
    url: 'https://bolt.steropes.fr',
    status: 'En cours',
    tag: 'Sites' as const,
    kind: 'site' as const,
  },
  {
    id: 'lightning',
    title: 'Lightning',
    url: 'https://lightning.steropes.fr',
    status: 'En cours',
    tag: 'Sites' as const,
    kind: 'site' as const,
  },
  {
    id: 'hunt',
    title: 'Hunt',
    url: 'https://hunt.steropes.fr',
    status: 'En cours',
    tag: 'Sites' as const,
    kind: 'site' as const,
  },
  {
    id: 'deploiement-auto',
    title: 'Déploiement auto',
    description: 'Workflow git vers recette puis prod. Merge seulement après validation humaine.',
    tag: 'Outils' as const,
    kind: 'coulisse' as const,
  },
  {
    id: 'install-maj-serveur',
    title: 'Install / maj serveur',
    description: 'Installation et mise à jour de serveur, avec contrôle sécurité.',
    tag: 'Outils' as const,
    kind: 'coulisse' as const,
  },
  {
    id: 'chiffrement-donnees',
    title: 'Chiffrement des données',
    description: 'Cryptage des données côté application, pas seulement HTTPS.',
    tag: 'Données' as const,
    kind: 'coulisse' as const,
  },
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
          
          <ProjectsGrid projects={projects} cardImages={cardImages} />
          
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