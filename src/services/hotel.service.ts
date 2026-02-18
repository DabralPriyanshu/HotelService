import { createHotelDTO } from "../dto/hotel.dto";
import {
  createHotel,
  softDeleteHotel,
  getAllHotels,
} from "../repositories/hotel.repository";

async function create(hotelData: createHotelDTO) {
  return createHotel(hotelData);
}
async function getAll() {
  return getAllHotels();
}

async function destroy(id: number) {
  return softDeleteHotel(id);
}
export default {
  create,
  getAll,
  destroy,
};
