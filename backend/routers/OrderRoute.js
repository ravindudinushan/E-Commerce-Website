import express from "express";
import adminAuth from "../middleware/adminAuth.js";
import {
  allOrders,
  placeOrder,
  userOrders,
} from "../controllers/orderController.js";
import authUser from "../middleware/auth.js";

const orderRouter = express.Router();

// FOR ADMIN
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, allOrders);

// FOR PAYMENT
orderRouter.post("/place", authUser, placeOrder);
orderRouter.post("/stripe", authUser, placeOrder);

// FOR USER
orderRouter.post("/userorders", authUser, userOrders);

export default orderRouter;
