import userModel from "../models/userModel.js";

// CONTROLLER FUNCTION FOR ADDING PRODUCT TO USER CART
const addToCart = async (req, res) => {
  try {
    const { userId, itemId, color } = req.body;
    const userData = await userModel.findById(userId);

    let cartData = await userData.cartData;
    if (cartData[itemId]) {
      if (cartData[itemId][color]) {
        cartData[itemId][color] += 1;
      } else {
        cartData[itemId][color] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][color] = 1;
    }

    await userModel.findByIdAndUpdate(userId, { cartData });

    res.json({ success: true, message: "Add to Cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// CONTROLLER FUNCTION FOR UPDATING USER CART
const updateCart = async (req, res) => {
  try {
    const { userId, itemId, color, quantity } = req.body;
    const userData = await userModel.findById(userId);

    let cartData = await userData.cartData;

    cartData[itemId][color] = quantity;

    await userModel.findByIdAndUpdate(userId, { cartData });

    res.json({ success: true, message: "Cart Updated" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// CONTROLLER FUNCTION FOR GETTING USER CART
const getUserCart = async (req, res) => {
  try {
    const { userId } = req.body;
    const userData = await userModel.findById(userId);

    let cartData = await userData.cartData;
    res.json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { addToCart, updateCart, getUserCart };
