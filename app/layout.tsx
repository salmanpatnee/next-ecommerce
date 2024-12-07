import type { Metadata } from "next";
import "./globals.css";
import { Poppins} from 'next/font/google';
import Header from "./Header";
import Footer from "./Footer";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
});


export const metadata: Metadata = {
  title: "Next Ecommerce",
  description: "UIUX Hackathon Prerequisites Announcement for Quarter 2 Students",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <Header/>
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
