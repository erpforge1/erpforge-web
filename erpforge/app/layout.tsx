import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://erpforge.in"),
  title: {
    default: "ERPForge - Premium SAP Developer Hub",
    template: "%s | ERPForge",
  },
  description:
    "ERPForge is a modern SAP developer hub for ABAP interview questions, RAP tutorials, CDS View guides, S/4HANA resources, developer tools and SAP career growth.",
  keywords: [
    "SAP ABAP interview questions",
    "SAP RAP interview questions",
    "CDS View interview questions",
    "SAP developer tools",
    "SAP technical consultant",
    "S/4HANA developer",
    "ABAP performance tuning",
    "SAP career guide",
  ],
  authors: [{ name: "Srivatsa Palani" }],
  creator: "Srivatsa Palani",
  openGraph: {
    title: "ERPForge - Premium SAP Developer Hub",
    description:
      "SAP interview preparation, developer tools, RAP tutorials, CDS guides and career resources for SAP professionals.",
    url: "https://erpforge.in",
    siteName: "ERPForge",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ERPForge - Premium SAP Developer Hub",
    description:
      "Modern SAP developer platform for interviews, tutorials, tools and career growth.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#050816] text-slate-100 antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}