"use client";
import { useAppContext } from "@/context/appContext";

export default function Address() {
  const { guest } = useAppContext();
  if (!guest) return <></>;

  return (
    <div style={{ textAlign: "center" }}>
      <iframe
        src={guest.mapUrl}
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
