import { DM_Sans } from "next/font/google";
import './globals.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: 'Anime Adda - Crafted By Arsh',
  description: 'Your favorite anime, all in one place.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}