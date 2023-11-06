import LayoutProps from "@/interfaces/LayoutProps";
import Image from "next/image";
import Footer from "./footer";
import Header from "./header";
import { AppContextProvider } from "../context/appContext";

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <AppContextProvider>
        <div className="shell">
          <Header />
          <section id="downloads">
            <span className="inner">
              <a
                href="https://www.facebook.com/Drsanji950"
                target="_blank"
                className="zip fwhisper"
                rel="noreferrer"
              >
                <Image width={40} height={40} src="/assets/images/wedding-couple1.png" alt="Groom" />
              </a>
              <a
                href="https://www.facebook.com/han.lia.98"
                target="_blank"
                className="tgz fwhisper"
                rel="noreferrer"
              >
                <Image
                  style={{ transform: "scaleX(-1)" }}
                  width={40}
                  height={40}
                  src="/assets/images/wedding-couple.png"
                  alt="Bride"
                />
              </a>
            </span>
          </section>
          <section id="main_content">{children}</section>
          <Footer />
        </div>
      </AppContextProvider>
    </>
  );
}
