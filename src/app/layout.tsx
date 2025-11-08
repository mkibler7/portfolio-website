import "@/app/globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FixedPlugin from "@/components/fixed-plugin";

import dynamic from "next/dynamic";

const ClientThemeProvider = dynamic(
  () => import("@/components/theme-provider"),
  { ssr: false }
);

export const metadata: Metadata = { title: "Test", description: "Debug" };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientThemeProvider>{children}</ClientThemeProvider>
      </body>
    </html>
  );
}

/* eslint-disable @next/next/next-script-for-ga */
// import "./globals.css";
// import type { Metadata } from "next";
// import { Roboto } from "next/font/google";
// import { ThemeProviderLayout, FixedPlugin } from "@/components";

// const roboto = Roboto({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "700", "900"],
//   display: "swap",
// });

// export const metadata: Metadata = {
//   title: "Next.js + Tailwind Portfolio Page",
//   description:
//     "Introducing Tailwind Portfolio Page, a versatile and stylish portfolio template built on the foundation of Tailwind CSS and Material Tailwind.",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <head>{/* ... */}</head>
//       <body className={roboto.className}>
//         <ThemeProviderLayout>
//           {children}
//           <FixedPlugin />
//         </ThemeProviderLayout>
//       </body>
//     </html>
//   );
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <head>
//         <script
//           defer
//           data-site="YOUR_DOMAIN_HERE"
//           src="https://api.nepcha.com/js/nepcha-analytics.js"
//         ></script>
//         <link rel="shortcut icon" href="/favicon.png" type="image/png" />
//       </head>
//       <body className={roboto.className}>
//         <Layout>
//           {children}
//           <FixedPlugin />
//         </Layout>
//       </body>
//     </html>
//   );
// }
