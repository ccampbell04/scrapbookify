import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sound Scrapbook',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <script
          async
          src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6855093518131888'
          crossOrigin='anonymous'
        ></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
