import { NextFunction, Request, Response } from "express";
import hotelService from "../services/hotel.service";
import { StatusCodes } from "http-status-codes";
const createHotel = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await hotelService.create(req.body);
    res.status(StatusCodes.CREATED).json({
      message: "Hotel created successfully",
      data: response,
      success: true,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
const getAllHotels = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const response = await hotelService.getAll();
    res.status(StatusCodes.OK).json({
      message: "Hotels found successfully",
      data: response,
      success: true,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export default {
  createHotel,
  getAllHotels,
};
