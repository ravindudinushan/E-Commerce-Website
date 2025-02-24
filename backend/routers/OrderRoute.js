import express from "express";
import adminAuth from "../middleware/adminAuth.js";
import {
  allOrders,
  placeOrder,
  placeOrderStripe,
  updateStatus,
  userOrders,
  verifyStripe,
} from "../controllers/orderController.js";
import authUser from "../middleware/auth.js";

const orderRouter = express.Router();

// FOR ADMIN
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);

// FOR PAYMENT
orderRouter.post("/place", authUser, placeOrder);
orderRouter.post("/stripe", authUser, placeOrderStripe);

// FOR USER
orderRouter.post("/userorders", authUser, userOrders);

// VERIFY STRIPE METHOD
orderRouter.post("/verifyStripe", authUser, verifyStripe)

export default orderRouter;
