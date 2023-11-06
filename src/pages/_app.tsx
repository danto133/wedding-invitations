"use client";

import Layout from "@/components/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

export default function Main({ Component, pageProps }: AppProps) {
  const { width: windowWidth, height: windowHeight } = useWindowSize();
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [timmer, setTimmer] = useState(1);


  setTimeout(() => {
    setTimmer(2);
  }, 4000);
  const musicPlayers = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== "undefined"
      ? new Audio("/assets/audio/Lucky-JasonMrazColbieCaillat-Compressed.mp3")
      : undefined
  );
  useEffect(() => {
    if (musicPlayers.current && timmer === 2) {
      musicPlayers.current.muted = true;
      musicPlayers.current.play();
      musicPlayers.current.muted = false;
    }
  }, [timmer]);

  useEffect(() => {
    const width = windowWidth < 650 ? 650 : windowWidth;
    const height = windowWidth < 650 ? 1550 : windowHeight;

    setWidth(width);
    setHeight(height);
  }, [windowWidth, windowHeight]);

  return (
    <>
      <Head>
        <title>🐃Đan💞Hân🐃</title>
      </Head>
      <Confetti
        width={width}
        height={height}
        style={{ zIndex: 9999 }}
        numberOfPieces={100}
        colors={["#ce737d", "#7c334f"]}
      />
      <Layout>
        <Component {...pageProps} />

        <div style={{ textAlign: "center", marginTop: "30px", display: 'flex', gap: '8px' }}>
          <Link href="/" className="btn btn-xl hlg btn-shadow" style={{ fontStyle: "initial" }}>
            {/* #home */}
            🏠
          </Link>
          <Link href="/address" className="btn btn-xl hlg btn-shadow" style={{ fontStyle: "initial" }}>
            {/* #map */}
            🧭
          </Link>
          <Link href="/gallery" className="btn btn-xl hlg btn-shadow" style={{ fontStyle: "initial" }}>
            {/* #album */}
            📓
          </Link>
          <Link href="/wish" className="btn btn-xl hlg btn-shadow" style={{ fontStyle: "initial" }}>
            {/* #wish */}
            🤲
          </Link>
          <Link href="/about-us" className="btn btn-xl hlg btn-shadow" style={{ fontStyle: "initial" }}>
            {/* #about-us */}
            ⏳
          </Link>
          <Link href="/bank" className="btn btn-xl hlg btn-shadow" style={{ fontStyle: "initial" }}>
            {/* #bank */}
            🏦
          </Link>
        </div>
      </Layout>
    </>
  );
}
