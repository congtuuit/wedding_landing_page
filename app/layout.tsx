import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Linh & Nam - Wedding Invitation',
  description: 'Join us on our special day - October 18th, 2025',
  keywords: 'wedding, invitation, Linh, Nam, October 2025',
  openGraph: {
    title: 'Linh & Nam - Wedding Invitation',
    description: 'Join us on our special day - October 18th, 2025',
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