import { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useSearchParams } from "react-router-dom";

const Verify = () => {
  const { navigate, token, setCartItems, backendUrl } = useContext(ShopContext);
  const [searchParams, setSearchParams] = useSearchParams();

  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        if (!token) {
          return null;
        }
        const response = await axios.post(
          backendUrl + "/api/order/verifyStripe",
          { success, orderId },
          { headers: { token } }
        );
        if (response.data.success) {
          setCartItems({});
          navigate("/orders");
        } else {
          navigate("/cart");
        }
      } catch (error) {
          console.log(error)
          toast.error(error.message)
      }
    };

    verifyPayment();
  }, [token, success, orderId, navigate, setCartItems, backendUrl]);

  return null;
};

export default Verify;