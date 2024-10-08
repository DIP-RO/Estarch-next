import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../components/navbar/page";
import Footer from "../components/footer/page";
import Providers from "./providers";
import SlideCard from "@/components/SlideCard/SlideCard";
import Size from "@/components/Size/Size";
import Hambarger from "@/components/Hambarger/Hambarger";
import { GoogleTagManager } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Estarch",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme='light'>
      <GoogleTagManager gtmId="GTM-WKPLL9WN" />
      <body className={`${inter.className} bg-base-100`}>
        <Providers>
          <NavBar />
          <Hambarger />
          <SlideCard />
          <Size />
          <div className="min-h-screen">
            {children}
          </div>
          <Footer />
        </Providers>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WKPLL9WN"
          height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
      </body>
    </html>
  );
}
