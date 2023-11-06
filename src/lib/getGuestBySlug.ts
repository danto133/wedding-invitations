import Guest from "@/interfaces/Guest";
import guestData from "@/db/guesses.json";
import locationData from "@/db/locations.json";

export const getGuestBySlug = (slug?: string | string[]): Guest | undefined => {
  if (!slug || Array.isArray(slug)) return;

  const guest = guestData.find((e) => e.slug === slug);
  const location = locationData.find((e) => guest?.locationId === e.id);
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
