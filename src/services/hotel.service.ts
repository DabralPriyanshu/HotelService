import { createHotelDTO } from "../dto/hotel.dto";
import { createHotel, getAllHotels } from "../repositories/hotel.repository";

async function create(hotelData: createHotelDTO) {
  return createHotel(hotelData);
}
async function getAll() {
  return getAllHotels();
}
export default {
  create,
  getAll,
};
