import type { Metadata } from "next";
import { Poppins as FontSans } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";
import { MobileNav } from "@/components/mobile-nav";
import { NavMenu } from "@/components/nav-menu";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Damai Global",
  description: "Global talent company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}

const Nav = ({ className, children, id }: NavProps) => {
  return (
    <nav
      className={cn("sticky z-50 top-0 bg-background", "border-b", className)}
      id={id}
    >
      <div
        id="nav-container"
        className="max-w-5xl mx-auto py-4 px-6 sm:px-8 flex justify-between items-center"
      >
        <Link className="hover:opacity-75 transition-all" href="/">
          <h2 className="sr-only">Damai Global</h2>
          <Image src="/logo.svg" alt="Logo" width={164} height={28.5}></Image>
        </Link>
        {children}
        <div className="flex items-center gap-2">
          <NavMenu />
          <Button asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="drop-shadow-sm">
      <Section>
        <Container className="grid gap-6">
          <div className="grid gap-6">
            <Link href="/">
              <h3 className="sr-only">Damai Global</h3>
              <Image
                src="/logo.svg"
                alt="Logo"
                width={164}
                height={28.5}
              ></Image>
            </Link>
            <p>
              <Balancer>
                Damai Global specializes in finding the best global talent.
              </Balancer>
            </p>
            <div className="flex gap-4 underline underline-offset-4 text-sm text-muted-foreground">
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Terms of Service</Link>
            </div>
            <p className="text-muted-foreground">
              © Damai Global LLC. All rights reserved. 2023-present.
            </p>
          </div>
        </Container>
      </Section>
    </footer>
  );
};
