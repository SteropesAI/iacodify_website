import ContactForm from '@/components/ContactForm';
import { Mail, Phone, Clock } from 'lucide-react';

export const metadata = {
  title: 'Contact | IAcodify',
  description: 'Contactez IAcodify pour vos projets de développement assistés par l\'IA',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white pt-24">
      {/* Hero section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0B4D7A]/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0B4D7A]/10 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-[#FFD700]">
              Contactez-nous
            </h1>
            <p className="max-w-2xl mx-auto text-gray-400 text-lg">
              Discutons de vos besoins en développement et découvrez comment l&apos;IA peut transformer votre approche numérique.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Informations de contact */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                <h2 className="text-xl font-semibold mb-6">Nos coordonnées</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-[#00E8FF] mt-1 mr-3" />
                    <div>
                      <p className="text-gray-300">Email</p>
                      <p className="text-white font-medium">contact@IAcodify.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-[#00E8FF] mt-1 mr-3" />
                    <div>
                      <p className="text-gray-300">Téléphone</p>
                      <p className="text-white font-medium">+33 (0)5 64 27 11 47</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-[#00E8FF] mt-1 mr-3" />
                    <div>
                      <p className="text-gray-300">Heures d&apos;ouverture</p>
                      <p className="text-white font-medium">
                        Lun - Ven: 9h à 18h<br />
                        (IA disponible 24/7)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                <h2 className="text-xl font-semibold mb-4">Notre approche</h2>
                <p className="text-gray-300 mb-4">
                  Contrairement aux méthodes traditionnelles, nous combinons l&apos;expertise humaine avec la puissance de l&apos;IA pour offrir des solutions digitales rapides, performantes et abordables.
                </p>
                <p className="text-gray-300">
                  Chaque projet bénéficie d&apos;un Neural Creative Officer dédié qui supervise la qualité et l&apos;efficacité du développement.
                </p>
              </div>
            </div>
            
            {/* Formulaire de contact */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#FFD700]">
            Questions fréquentes
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-medium text-white mb-2">Quel est le délai de réponse après avoir soumis un formulaire ?</h3>
              <p className="text-gray-300">Nous répondons généralement dans les 24 heures ouvrables. Pour les demandes urgentes, n&apos;hésitez pas à le préciser dans votre message.</p>
            </div>
            
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-medium text-white mb-2">Comment fonctionne votre service d&apos;abonnement ?</h3>
              <p className="text-gray-300">Notre abonnement mensuel vous donne accès à un service de développement avec l&apos;assistance d&apos;un Neural Creative Officer dédié. Vous pouvez avoir un projet actif à la fois avec des révisions illimitées.</p>
            </div>
            
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-medium text-white mb-2">Quelles technologies et langages de programmation utilisez-vous ?</h3>
              <p className="text-gray-300">Notre IA est formée sur tous les principaux langages et frameworks (JavaScript, Python, React, Node.js, etc.). Nous nous adaptons à vos besoins technologiques ou vous recommandons les meilleures solutions pour votre projet.</p>
            </div>
            
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-medium text-white mb-2">Comment l&apos;IA améliore-t-elle réellement le développement de mes projets ?</h3>
              <p className="text-gray-300">Notre IA analyse des millions de lignes de code et les meilleures pratiques pour générer rapidement des solutions optimisées et sécurisées. Nos experts affinent ensuite ces solutions pour garantir qu&apos;elles répondent parfaitement à vos besoins spécifiques.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}