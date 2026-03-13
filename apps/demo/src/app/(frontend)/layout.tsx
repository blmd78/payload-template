import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Demo — Payload Template',
  description: 'Template Payload CMS avec hero section.',
};

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
