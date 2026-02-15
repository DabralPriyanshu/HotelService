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

export default hotelRouter;
