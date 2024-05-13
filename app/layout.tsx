import "./globals.css";
import {Navbar} from "@/app/components/navbar";
import {Footer} from "@/app/components/footer/footer";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
      <Navbar />
      {children}
      <Footer />
      </body>
    </html>
  );
}
