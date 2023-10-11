import "@styles/globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar/page";
import { NextAuthProvider } from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CareerCanvas",
  description:
    "Craft compelling resumes and unlock your full potential with this intuitive resume builder",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <Navbar />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
