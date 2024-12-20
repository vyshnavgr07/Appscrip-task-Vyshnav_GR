import { Inter,Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/headerFiles/header/Header";
import Footer from "@/components/footer/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", 
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"], 
  variable: "--font-poppins",
});
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable}`}>
      <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
