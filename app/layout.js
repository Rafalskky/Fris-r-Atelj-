import "./globals.css";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

import Head from 'next/head';

export const metadata = {
  title: "Frisör Ateljé", 
  description: "Välkommen till Frisör Ateljé, din destination för skönhet och stil i hjärtat av Kallhäll. Med en passion för att skapa fantastiska frisyrer och förnya ditt utseende, erbjuder vårt erfarna team av frisörer en unik och personlig upplevelse varje gång du besöker oss. Oavsett om du vill ha en trendig klippning, färgning eller styling, strävar vi alltid efter att överträffa dina förväntningar och lämna dig med ett leende på läpparna och en känsla av självförtroende. Välkommen in till Frisör Ateljé och låt oss tillsammans skapa din drömfrisyr!",
  keywords: "frisör kallhäll, frisör stockholm, frisörsalong, hårklippning, hårvård, hårstyling, skönhetssalong", // Adding relevant keywords can help with SEO
  icons: "/favicon.ico", 
  canonical: "https://atelje-frisor.se/",

  robots: {
    index: true, // allow search engines to index this page
    follow: true, // allow search engines to follow links on this page
    nocache: true, // prevent search engines from caching this page
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true, // prevent Google from indexing images on this page
    },
  },


  openGraph: {
    title: "Frisör Ateljé",
    description: "Välkommen till Frisör Ateljé, din destination för skönhet och stil i hjärtat av Kallhäll. Med en passion för att skapa fantastiska frisyrer och förnya ditt utseende, erbjuder vårt erfarna team av frisörer en unik och personlig upplevelse varje gång du besöker oss.",
    url: "https://atelje-frisor.se/", 
    images: [
      {
        url: "/logo.webp",
        width: 1200,
        height: 630,
        alt: "Frisör Ateljé - Bästa frisören i Kallhäll",
      },
    ],
  },
  twitter: {
    title: "Frisör Ateljé | Bästa frisören i Kallhäll",
    description: "Välkommen till Frisör Ateljé, din destination för skönhet och stil i hjärtat av Kallhäll. Med en passion för att skapa fantastiska frisyrer och förnya ditt utseende, erbjuder vårt erfarna team av frisörer en unik och personlig upplevelse varje gång du besöker oss.",
    images: ["/logo.webp"], 
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="sv">
      <Head>
      <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  );
}