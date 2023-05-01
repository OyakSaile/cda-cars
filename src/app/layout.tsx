import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Balanceamento de carros",
  description: "aplicativo para balancear carros de jogos ou servidores",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-full bg-white" lang="en">
      <body className={`${inter.className} h-full`}>{children}</body>
    </html>
  );
}
