"use client";
import "bootstrap/dist/css/bootstrap.css";
//import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Roboto_Serif } from "next/font/google";
import Header from "@/components/header/header";
import { usePathname } from "next/navigation";
import Script from 'next/script'
import Footer from "@/components/footer/footer";
import { ReduxProvider } from "../store/auth/providers";



const roboto = Roboto_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400"],
});

 /*const metadata = { 
  title: "Found Pets",
  description: "Made with love 🐶",
};*/

export default function RootLayout({ children }) {
  const currentPath = usePathname();
  let hiddenHeader = !(
    currentPath === "/user/login" ||
    currentPath === "/user/register" //||
   // currentPath === "/user/profile"
  );
 
  return (
    <html lang="es">
      <head>
        <title>Found Pets 🐶</title>
        <link rel="icon" type="image/x-icon" href="/images/footPrint.ico"></link>
      </head>
      <body className={roboto.className}>
        
        
            <ReduxProvider>
              {hiddenHeader && <Header />}
              {children}
              {hiddenHeader && <Footer />}
            </ReduxProvider>
         
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous" />
      </body>
    </html>
  );
}
