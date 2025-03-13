import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Finlytics",
  description: "One stop Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/logo-sm.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />

          <footer className="bg-white text-gray-700 py-6 min-h-32 flex justify-center">
            <div className="max-w-6xl w-full mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm">&copy; {new Date().getFullYear()} Finlytics. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="" className="hover:text-indigo-400 transition">Privacy Policy</a>
                <a href="" className="hover:text-indigo-400 transition">Terms of Service</a>
                <a href="" className="hover:text-indigo-400 transition">Contact Us</a>
              </div>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}