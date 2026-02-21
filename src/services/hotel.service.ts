import { createHotelDTO, updateHotelDTO } from "../dto/hotel.dto";
import { HotelRepository } from "../repositories/hotel.repository";
const hotelRepository = new HotelRepository();

async function create(hotelData: createHotelDTO) {
  return hotelRepository.create(hotelData);
}
async function getAll() {
  return hotelRepository.findAll();
}

async function destroy(id: number) {
  return hotelRepository.softDelete(id);
}
async function update(id: number, hotelData: updateHotelDTO) {
  return hotelRepository.update(id, hotelData);
}
export default {
  create,
  getAll,
  destroy,
  update,
};
