
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Brand Valuation Call | Julian',
  description: 'We help creators build real businesses that produce $1.2M+ in cash flow through high-ticket offers, products/e-commerce backends, and better brand partnerships—using the audience and content you already have.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
