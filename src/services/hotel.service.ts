import { createHotelDTO, updateHotelDTO } from "../dto/hotel.dto";
import {
  createHotel,
  softDeleteHotel,
  getAllHotels,
  updateHotel,
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
async function update(id: number, hotelData: updateHotelDTO) {
  return updateHotel(id, hotelData);
}
export default {
  create,
  getAll,
  destroy,
  update,
};
