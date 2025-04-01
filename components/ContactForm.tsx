'use client';

import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  type FormData = {
    name: string;
    email: string;
    phone: string;
    company: string;
    subject: string;
    message: string;
    services: string[]; // Ceci indique que services est un tableau de chaînes
  };
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    services: []
  });
  
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
    "Application mobile",
    "E-commerce",
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ ...status, submitting: true });
    
    try {
      // Simulation d'envoi (à remplacer par un appel API réel)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success
      setStatus({
        submitted: true,
        submitting: false,
        success: true,
        error: null
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
        services: []
      });
    } catch (error) {
      setStatus({
        ...status,
        submitting: false,
        error: "Une erreur s'est produite. Veuillez réessayer."
      });
      console.error("Une erreur est survenue:", error);
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
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold text-white mb-6">Contactez-nous</h2>
          
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