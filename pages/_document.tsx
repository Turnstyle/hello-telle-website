/**
 * Next.js Document component - customizes the HTML document structure
 * Used for adding fonts, favicons, and social sharing meta tags
 */
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const siteUrl = 'https://www.hellotelle.com';
  const siteTitle = 'Hello Telle - Your Intelligent Companion Who Brings You Closer';
  const siteDescription = 'Hello Telle listens, learns, and connects you with your loved ones through warm, magical conversations that feel genuinely human.';

  return (
    <Html lang="en">
      <Head>
        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap"
          rel="stylesheet"
        />

        {/* Favicons */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Primary Meta Tags */}
        <meta name="title" content={siteTitle} />
        <meta name="description" content={siteDescription} />
        <meta name="theme-color" content="#6495ED" />

        {/* Open Graph / Facebook / LinkedIn / iMessage */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:image" content={`${siteUrl}/og-image.png`} />
        <meta property="og:image:width" content="160" />
        <meta property="og:image:height" content="120" />
        <meta property="og:site_name" content="Hello Telle" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={siteUrl} />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={siteDescription} />
        <meta name="twitter:image" content={`${siteUrl}/og-image.png`} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

