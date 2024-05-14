import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";
import AuthProvider from "@/provider/AuthProvider";
import ModeProvider from "@/provider/ModeProvider";
import SmallInfo from "@/components/SmallInfo";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Portfolio",
  description: "Showcasing code, design and projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden `}>
        <AuthProvider>
          <ModeProvider>
            <div className="box dark:bg-gradient-to-t dark:from-neutral-900 dark:to-stone-950 bg-gradient-to-t from-white to-slate-50 dark:text-gray-300 text-gray-900">
              <Navbar />
              <SmallInfo />
              <div className=" mt-16 mb-24 ">{children}</div>
              <Footer />
            </div>
            <Toaster
              position=" top-right"
              toastOptions={{
                style: {
                  background: "black",
                  color: "white",
                },
              }}
            />
          </ModeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
{
  /* <div className="box dark:bg-black bg-[#f8f9fa] dark:text-gray-300 text-gray-900"> */
}
