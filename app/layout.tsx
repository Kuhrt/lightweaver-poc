import './globals.css';
import { initFlowbite } from 'flowbite';
import { Inter } from 'next/font/google';
import Navbar from './components/navigation/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'LightWeaver',
  description: 'Revealing the inherent light within ourselves',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
