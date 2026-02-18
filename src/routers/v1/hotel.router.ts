import express from "express";
import hotelController from "../../controllers/hotel.controller";
import { validateRequestBody } from "../../validators";
import { hotelSchema } from "../../validators/hotel.validator";

const hotelRouter = express.Router();

hotelRouter.post(
  "/",
  validateRequestBody(hotelSchema),
  hotelController.createHotel,
);
hotelRouter.get("/", hotelController.getAllHotels);
hotelRouter.delete("/:id", hotelController.deleteHotel);
hotelRouter.patch("/:id", hotelController.updateHotel);

export default hotelRouter;
