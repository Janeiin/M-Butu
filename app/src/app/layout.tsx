import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider';
import Loader from '@/components/ui/Loader';
import Cursor from '@/components/ui/Cursor';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingEnquiry from '@/components/ui/FloatingEnquiry';

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-display',
  display: 'swap',
});

const sans = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mbutu-collection.com'),
  title: {
    default: "M'Butu Collection — Nature's Finest Luxury",
    template: "%s — M'Butu Collection",
  },
  description:
    'Premium African hides sourced responsibly for the world\u2019s finest interiors. Hartmann mountain zebra, plains zebra, springbok, Nguni cowhide and bespoke sourcing for designers and hospitality.',
  keywords: [
    'zebra hide',
    'Hartmann zebra',
    'African hides',
    'luxury interiors',
    'Nguni cowhide',
    'springbok',
    'trade wholesale hides',
  ],
  openGraph: {
    title: "M'Butu Collection — Nature's Finest Luxury",
    description:
      'Premium African hides sourced responsibly for the world\u2019s finest interiors.',
    type: 'website',
    locale: 'en_GB',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <Loader />
        <Cursor />
        <SmoothScrollProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScrollProvider>
        <FloatingEnquiry />
      </body>
    </html>
  );
}
