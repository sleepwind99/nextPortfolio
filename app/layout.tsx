import "./globals.css";
import { Montserrat, Roboto, Nanum_Gothic } from "next/font/google";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Project";
import Contact from "./pages/Contact";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-robo",
  weight: ["100", "300", "400", "500", "700", "900"],
});
const nanum = Nanum_Gothic({
  weight: ["400", "700", "800"],
  subsets: ["latin"],
  variable: "--font-nanum",
});

export const metadata = {
  title: "JJ's Portfolio",
  description: "jungjoo's portfolio site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`text-dark ${montserrat.variable} ${roboto.variable} ${nanum.variable} bg-light`}
      >
        <Navbar />
        <Main />
        <About />
        <Skills />
        <Projects />
        <Contact />
        {children}
      </body>
    </html>
  );
}
