import './globals.css';
import { DM_Sans } from 'next/font/google';
import Navbar from './components/navigation/Navbar';

const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata = {
  title: 'LightWeaver',
  description: 'Revealing the inherent light within ourselves'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} min-h-screen flex flex-col`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
