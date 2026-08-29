'use client';

import { useState } from 'react';
import { Globe, ExternalLink } from 'lucide-react';

export type ProjectTag = 'Sites' | 'Données' | 'IA' | 'Outils';

export type Project = {
  id: string;
  title: string;
  url?: string;
  status?: string;
  description?: string;
  tag: ProjectTag;
  kind?: 'site' | 'coulisse';
};

type Props = {
  projects: Project[];
  cardImages: Record<string, string>;
};

const FILTERS = ['Tous', 'Sites', 'Données', 'IA', 'Outils'] as const;
type Filter = (typeof FILTERS)[number];

export default function ProjectsGrid({ projects, cardImages }: Props) {
  const [filter, setFilter] = useState<Filter>('Tous');

  const filtered =
    filter === 'Tous' ? projects : projects.filter((p) => p.tag === filter);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className={
              filter === f
                ? 'active bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium'
                : 'bg-gray-800 hover:bg-gray-700 text-gray-300 px-4 py-2 rounded-full text-sm font-medium transition-colors'
            }
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((project) => {
          const isCoulisse = project.kind === 'coulisse' || !project.url;

          return (
            <div key={project.id} className="bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-500/30 transition-all">
              <div className="relative h-48 overflow-hidden">
                {cardImages[project.id] ? (
                  <img src={cardImages[project.id]} alt={project.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
                    <Globe className="text-gray-400 w-12 h-12" />
                  </div>
                )}

                {isCoulisse ? (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-gray-900/70 text-gray-300 border border-gray-600/40">
                    Coulisses
                  </div>
                ) : project.status ? (
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'En cours'
                      ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                      : 'bg-green-500/20 text-green-300 border border-yellow-500/30'
                  }`}>
                    {project.status}
                  </div>
                ) : null}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white hover:text-[#00E8FF] transition-colors">
                  {project.url ? (
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>

                {project.url ? (
                  <p className="text-gray-400 mb-2">
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="hover:text-[#00E8FF] transition-colors">
                      {project.url}
                    </a>
                  </p>
                ) : null}

                {project.description ? (
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                ) : null}

                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-[#00E8FF] hover:text-[#FFD700] transition-colors font-medium text-sm mt-4"
                  >
                    Voir le projet
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}