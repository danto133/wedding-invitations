"use client";
import Link from "next/link";
import Image from "next/image";
import { useAppContext } from "@/context/appContext";

export default function Header() {
  const { guest } = useAppContext();
  return (
    <header>
      <span className="ribbon-outer">
        <span className="ribbon-inner">
          <h1>
            <Link href="/">Save The Date</Link>
          </h1>
          <h2>{guest?.wedingDate}</h2>
          <p
            className="mobile-name"
            style={{
              textAlign: "center",
              backgroundColor: "#7c334f",
              marginTop: "-2px",
            }}
          >
            <Image
              width={100}
              height={100}
              src="/assets/images/wedding-couple2.png"
              alt="Bride&Groom"
            />
          </p>
        </span>
        <span className="left-tail"></span>
        <span className="right-tail"></span>
      </span>
    </header>
  );
}
