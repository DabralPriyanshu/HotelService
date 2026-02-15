import { NextFunction, Request, Response } from "express";
import hotelService from "../services/hotel.service";
const createHotel = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await hotelService.create(req.body);
    res.status(201).json({
      message: "Hotel created successfully",
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
};
