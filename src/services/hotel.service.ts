import { createHotelDTO } from "../dto/hotel.dto";
import { createHotel } from "../repositories/hotel.repository";

async function create(hotelData: createHotelDTO) {
  return createHotel(hotelData);
}
export default {
  create,
};
