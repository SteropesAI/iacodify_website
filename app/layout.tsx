import "./globals.css";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'IAcodify - Codez Demain',
  description: 'La première agence de développement assistée par l\'IA',
  icons: {
    icon: '/favicon.ico'
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
