import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import AuthProvider from "@/AuthProvider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Next.js 14 Home Page",
    template: "%s | Next.js 14",
  },
  description: "Home Page Description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={inter.className}>
          <div className="container">
            <Navbar />
            <div> {children}</div>
            <Footer />
          </div>
        </body>
      </AuthProvider>
    </html>
  );
}
