import Content from "@/components/content";
import { getGuestBySlug } from "@/lib/getGuestBySlug";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Guest() {
  const router = useRouter();
  const { url } = router.query;
  const guest = getGuestBySlug(url);

  useEffect(() => {
    if (guest) {
      const defaultGuest = localStorage.getItem("wd_default_guest");
      if (!defaultGuest) localStorage.setItem("wd_default_guest", guest.slug);
    }
  }, [guest]);

  if (!guest) return;

  return <Content data={guest} />;
}
