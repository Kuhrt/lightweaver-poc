'use client';

import './globals.css';
import { DM_Sans } from 'next/font/google';
import Navbar from './components/navigation/Navbar';
import { Button } from './components/buttons/Button';

const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '700'] });

export default function GlobalError({
  error,
  reset
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html>
      <body className={`${dmSans.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="relative flex-1 bg-dark bg-dimensions-background bg-cover bg-no-repeat bg-center min-h-full flex flex-col items-center justify-between overflow-hidden">
          <h1>Something went wrong!</h1>
          <Button onClick={() => reset()}>Try again</Button>
        </main>
      </body>
    </html>
  );
}
