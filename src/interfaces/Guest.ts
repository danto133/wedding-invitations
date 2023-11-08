export default interface Guest {
  slug: string;
  guestName: string;
  time: string;
  day: string;
  location: string;
  prefixAddress: string;
  rootAddress: string;
  mapUrl: string;
  wedingDate: string;
}

export interface GuestBody {
  dateCreate: string;
  slug: string;
  name: string;
  prefix: string;
  locationId: string;
}