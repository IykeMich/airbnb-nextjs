import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nunito } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import Modal from "./components/modals/Modal";
import LoginModal from "./components/modals/LoginModal";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";

import getCurrentUser from "./actions/getCurrentUser";
import RentModal from "./components/modals/RentModal";

const nunito = Nunito({
  subsets: ["latin"],
})

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb clone by Montana",
};

export default async function RootLayout({
  children,
}: 
// Readonly<
{
  children: React.ReactNode;
}
// >
) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ToasterProvider />
        <RentModal />
        <LoginModal />
        <RegisterModal />
        <Navbar currentUser={currentUser}/>
        {children}
      </body>
    </html>
  );
}
