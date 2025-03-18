import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import Header from "@/components/shared/Header";

import "../styles/reset.scss";
import "../styles/global.scss";
import "../styles/vars.scss";

const NunitoFont = Nunito({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dodo Clone",
  description: "Онлайн-магазин по продаже еды",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${NunitoFont.variable}`}>
        <div className="wrapper">
          <Header />

          <main className="main">{children}</main>
        </div>
      </body>
    </html>
  );
}
