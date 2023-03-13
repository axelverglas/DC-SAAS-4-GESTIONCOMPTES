import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  weight: ['400', '500', '700'],
  style: 'normal',
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <main className={`${montserrat.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
