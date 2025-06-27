export interface GetHotelsResponse {
  id: number;
  name: string;
  location: Location;
  stars: number;
  checkIn: CheckIn;
  checkOut: CheckIn;
  contact: Contact;
  gallery: string[];
  userRating: number;
  price: number;
  currency: string;
}

interface Contact {
  phoneNumber: string;
  email: string;
}

interface CheckIn {
  from: string;
  to: string;
}

interface Location {
  address: string;
  city: string;
  latitude: number;
  longitude: number;
}
