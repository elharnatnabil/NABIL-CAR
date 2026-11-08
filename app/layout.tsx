
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NABIL CAR | Location de voitures",
  description:
    "Découvrez notre sélection de véhicules premium au Maroc.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
