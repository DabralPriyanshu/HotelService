import logger from "../config/logger.config";
import Hotel from "../db/models/hotel";
import { createHotelDTO } from "../dto/hotel.dto";
import { NotFoundError } from "../utils/errors/app.error";

export async function createHotel(hotelData: createHotelDTO) {
  const hotel = await Hotel.create({
    name: hotelData.name,
    address: hotelData.name,
    location: hotelData.location,
    rating: hotelData.rating,
    ratingCount: hotelData.ratingCount,
  });
  logger.info(`Hotel created: ${hotel.id}`);
  return hotel;
}

export async function getAllHotels() {
  const hotels = await Hotel.findAll();
  if (hotels.length === 0) {
    logger.error(`No hotels found`);
    throw new NotFoundError(`No hotels found`);
  }
  logger.info(`Hotels found: ${hotels.length}`);
  return hotels;
}
