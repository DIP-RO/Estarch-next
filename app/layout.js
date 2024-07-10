import { Inter } from "next/font/google";
import "./globals.css";

import NavBar from "../components/navbar/page";
import Footer from "../components/footer/page";


import { Provider } from "react-redux";
import store from "@/lib/store";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <NavBar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
