import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tú Văn & Hường Nguyễn - Wedding Invitation',
  description: 'Join us on our special day - December 12th, 2026',
  keywords: 'wedding, invitation, Tú Văn, Hường Nguyễn, December 2026',
  openGraph: {
    title: 'Tú Văn & Hường Nguyễn - Wedding Invitation',
    description: 'Join us on our special day - December 12th, 2025',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}