import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Landing Page',
  description: 'A beautiful landing page built with Next.js 14'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
