import { GetHotelsResponse } from '@interfaces/getHotelsResponse.interface';

export interface HotelCardProps {
  hotel: GetHotelsResponse;
  onPress: (hotel: GetHotelsResponse) => void;
}
