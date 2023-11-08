import Guest from "@/interfaces/Guest";
import guestData from "@/db/guesses.json";
import locationData from "@/db/locations.json";
import GuestBody from "@/interfaces/GuestBody";

export const getGuestBySlug = (slug?: string | string[]): Guest | undefined => {
  if (!slug || Array.isArray(slug)) return;

  //@ts-ignore
  const guest: GuestBody = guestData?.find((e) => e.slug === slug);

  //@ts-ignore
  const location = locationData?.find((e) => guest?.locationId === e.id);
  if (!guest || !location) return;

  return {
    slug: slug,
    guestName: `${guest.prefix} ${guest.name}`,
    location: location.location,
    prefixAddress: location.prefixAddress,
    rootAddress: location.rootAddress,
    time: location.time,
    day: location.day,
    mapUrl: location.mapUrl,
    wedingDate: location.weddingDate,
  };
};
