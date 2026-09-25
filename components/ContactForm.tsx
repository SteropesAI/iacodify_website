'use client';

import React, { useState, useRef } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const TECH_OURS = 'Nos technologies (Next.js, React, TypeScript, Tailwind, Python)';
const TECH_OTHER = 'Autre technologie';
const PROJECT_NEW = 'Nouvelle application';
const PROJECT_REPRISE = 'Récupérer une application existante';

export default function ContactForm() {
  type FormData = {
    name: string;
    email: string;
    phone: string;
    company: string;
    subject: string;
    message: string;
    services: string[];
    technology: string;
    technologyOther: string;
    projectType: string;
    repriseWhy: string;
    repriseProd: string;
    repriseBugs: string;
  };

  const emptyForm: FormData = {
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    services: [],
    technology: '',
    technologyOther: '',
    projectType: '',
    repriseWhy: '',
    repriseProd: '',
    repriseBugs: ''
  };
  
  const [formData, setFormData] = useState<FormData>(emptyForm);

  const startedAtRef = useRef<number>(Date.now());
  const hpFieldRef = useRef<HTMLInputElement>(null);
  
  const [status, setStatus] = useState<{
    submitted: boolean;
    submitting: boolean;
    success: boolean;
    error: string | null;
  }>({
    submitted: false,
    submitting: false,
    success: false,
    error: null
  });

  const services = [
    "Site web",
    "Application web",
    "Vitrine (Bolt)",
    "API & Intégration",
    "Base de données",
    "Automatisation",
    "Autre"
  ];

  const handleServiceChange = (service: string) => {
    if (formData.services.includes(service)) {
      setFormData({
        ...formData,
        services: formData.services.filter(s => s !== service)
      });
    } else {
      setFormData({
        ...formData,
        services: [...formData.services, service]
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const qualifError = (): string | null => {
    if (!formData.technology) {
      return 'Choisissez une technologie.';
    }
    if (formData.technology === TECH_OTHER && !formData.technologyOther.trim()) {
      return 'Précisez la technologie.';
    }
    if (!formData.projectType) {
      return 'Choisissez le type de projet.';
    }
    if (formData.projectType === PROJECT_REPRISE) {
      if (!formData.repriseWhy.trim() || !formData.repriseProd || !formData.repriseBugs) {
        return 'Complétez les champs de reprise.';
      }
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const missing = qualifError();
    if (missing) {
      setStatus({ submitted: false, submitting: false, success: false, error: missing });
      return;
    }

    setStatus({ submitted: false, submitting: true, success: false, error: null });

    try {
      const body = JSON.stringify({
        ...formData,
        hp_field: hpFieldRef.current?.value ?? "",
        startedAt: startedAtRef.current,
      });
      const postOnce = () =>
        fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body,
        });

      let res = await postOnce();
      if (res.status === 404) {
        await new Promise((r) => setTimeout(r, 300));
        res = await postOnce();
      }
      if (res.status === 404) {
        throw new Error("Service indisponible (404)");
      }
      const payload = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        throw new Error((payload.error || "Erreur serveur") + " (" + res.status + ")");
      }

      setStatus({
        submitted: true,
        submitting: false,
        success: true,
        error: null
      });

      setFormData(emptyForm);
    } catch (error) {
      const raw = error instanceof Error ? error.message : "";
      const network = !raw || raw === "Failed to fetch" || raw.toLowerCase().includes("network");
      setStatus({
        submitted: false,
        submitting: false,
        success: false,
        error: network
          ? "Erreur réseau. Vérifiez votre connexion et réessayez."
          : raw
      });
    }
  };

  return (
    <div className="rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 p-8">
      {status.success ? (
        <div className="text-center py-16">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-white mb-2">Message envoyé avec succès!</h3>
          <p className="text-gray-400 mb-6">Nous vous répondrons dans les plus brefs délais.</p>
          <button
            onClick={() => setStatus({ ...status, submitted: false, success: false })}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors"
          >
            Envoyer un autre message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="relative overflow-hidden">
          <h2 className="text-2xl font-bold text-white mb-6">Contactez-nous</h2>

          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              left: "-10000px",
              top: "auto",
              width: "1px",
              height: "1px",
              overflow: "hidden"
            }}
          >
            <label htmlFor="hp_field">hp_field</label>
            <input
              ref={hpFieldRef}
              type="text"
              id="hp_field"
              name="hp_field"
              autoComplete="off"
              tabIndex={-1}
              defaultValue=""
            />
          </div>

          
          {status.error && (
            <div className="mb-6 p-4 bg-red-900/30 border border-red-700 text-red-200 rounded-lg">
              {status.error}
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2">Nom complet *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-gray-300 mb-2">Téléphone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="company" className="block text-gray-300 mb-2">Entreprise</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          
          <div className="mb-6">
            <label htmlFor="subject" className="block text-gray-300 mb-2">Sujet *</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-300 mb-2">Services qui vous intéressent</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {services.map((service, index) => (
                <div key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`service-${index}`}
                    checked={formData.services.includes(service)}
                    onChange={() => handleServiceChange(service)}
                    className="w-4 h-4 bg-gray-900 border-gray-700 rounded focus:ring-blue-500"
                  />
                  <label htmlFor={`service-${index}`} className="ml-2 text-gray-300">
                    {service}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-300 mb-2">Technologies *</label>
            <div className="grid grid-cols-1 gap-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="tech-ours"
                  name="technology"
                  value={TECH_OURS}
                  checked={formData.technology === TECH_OURS}
                  onChange={handleChange}
                  required
                  className="w-4 h-4 bg-gray-900 border-gray-700 focus:ring-blue-500"
                />
                <label htmlFor="tech-ours" className="ml-2 text-gray-300">
                  {TECH_OURS}
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="tech-other"
                  name="technology"
                  value={TECH_OTHER}
                  checked={formData.technology === TECH_OTHER}
                  onChange={handleChange}
                  className="w-4 h-4 bg-gray-900 border-gray-700 focus:ring-blue-500"
                />
                <label htmlFor="tech-other" className="ml-2 text-gray-300">
                  {TECH_OTHER}
                </label>
              </div>
            </div>
            {formData.technology === TECH_OTHER && (
              <div className="mt-3">
                <label htmlFor="technologyOther" className="block text-gray-300 mb-2">Laquelle ? *</label>
                <input
                  type="text"
                  id="technologyOther"
                  name="technologyOther"
                  value={formData.technologyOther}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}
          </div>

          <div className="mb-6">
            <label className="block text-gray-300 mb-2">Le projet *</label>
            <div className="grid grid-cols-1 gap-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="project-new"
                  name="projectType"
                  value={PROJECT_NEW}
                  checked={formData.projectType === PROJECT_NEW}
                  onChange={handleChange}
                  required
                  className="w-4 h-4 bg-gray-900 border-gray-700 focus:ring-blue-500"
                />
                <label htmlFor="project-new" className="ml-2 text-gray-300">
                  {PROJECT_NEW}
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="project-reprise"
                  name="projectType"
                  value={PROJECT_REPRISE}
                  checked={formData.projectType === PROJECT_REPRISE}
                  onChange={handleChange}
                  className="w-4 h-4 bg-gray-900 border-gray-700 focus:ring-blue-500"
                />
                <label htmlFor="project-reprise" className="ml-2 text-gray-300">
                  {PROJECT_REPRISE}
                </label>
              </div>
            </div>
            {formData.projectType === PROJECT_REPRISE && (
              <div className="mt-4 space-y-4">
                <div>
                  <label htmlFor="repriseWhy" className="block text-gray-300 mb-2">Pourquoi reprendre cette app ? *</label>
                  <textarea
                    id="repriseWhy"
                    name="repriseWhy"
                    value={formData.repriseWhy}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Elle est en production ? *</label>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="reprise-prod-oui"
                        name="repriseProd"
                        value="Oui"
                        checked={formData.repriseProd === 'Oui'}
                        onChange={handleChange}
                        required
                        className="w-4 h-4 bg-gray-900 border-gray-700 focus:ring-blue-500"
                      />
                      <label htmlFor="reprise-prod-oui" className="ml-2 text-gray-300">Oui</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="reprise-prod-non"
                        name="repriseProd"
                        value="Non"
                        checked={formData.repriseProd === 'Non'}
                        onChange={handleChange}
                        className="w-4 h-4 bg-gray-900 border-gray-700 focus:ring-blue-500"
                      />
                      <label htmlFor="reprise-prod-non" className="ml-2 text-gray-300">Non</label>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Elle a des bugs ? *</label>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="reprise-bugs-oui"
                        name="repriseBugs"
                        value="Oui"
                        checked={formData.repriseBugs === 'Oui'}
                        onChange={handleChange}
                        required
                        className="w-4 h-4 bg-gray-900 border-gray-700 focus:ring-blue-500"
                      />
                      <label htmlFor="reprise-bugs-oui" className="ml-2 text-gray-300">Oui</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="reprise-bugs-non"
                        name="repriseBugs"
                        value="Non"
                        checked={formData.repriseBugs === 'Non'}
                        onChange={handleChange}
                        className="w-4 h-4 bg-gray-900 border-gray-700 focus:ring-blue-500"
                      />
                      <label htmlFor="reprise-bugs-non" className="ml-2 text-gray-300">Non</label>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-300 mb-2">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          
          <button
            type="submit"
            disabled={status.submitting}
            className="flex items-center justify-center bg-gradient-to-r from-[#008b9e] to-[#00E8FF] hover:opacity-90 text-white font-semibold py-3 px-6 rounded-lg transition-all w-full md:w-auto"
          >
            {status.submitting ? 'Envoi en cours...' : (
              <>
                <span>Envoyer le message</span>
                <Send className="ml-2 w-4 h-4" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
