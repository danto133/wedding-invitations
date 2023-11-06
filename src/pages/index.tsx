import { useAppContext } from "@/context/appContext";
import React from "react";
import Content from "../components/content";

export default function Home() {
  const { guest } = useAppContext();

  if (!guest) return <></>;

  return (
    <React.Fragment>
      <Content data={guest} />
    </React.Fragment>
  );
}
