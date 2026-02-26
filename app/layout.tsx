import { Metadata } from 'next';
import { Providers } from './providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'Shoppy Mini Store',
  description: 'A minimalist shopping experience',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 bg-gradient-to-r from-slate-950 to-purple-900">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}