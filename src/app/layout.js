import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Deepak's Portfolio",
    description: "Professional portfolio showcasing  projects and technical expertise.",
  openGraph: {
    title: "Deepak's Portfolio",
    description: "Professional portfolio showcasing  projects and technical expertise.",
    type: "website",
   
  },
 twitter: {
  card: "summary_large_image",
  site: "@deepakm_dev",
  images: [
    "https://deepakm.vercel.app/opengraph-image.png"
  ]
}

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Deepak M" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
