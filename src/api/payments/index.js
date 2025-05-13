import axios from "@/config/axiosConfig.js";

export const createOrderRequest = async ({ token, amount }) => {
  try {
    const response = await axios.post(
      "/payments/order",
      {
        amount,
      },
      {
        headers: {
          "x-access-token": token,
        },
      }
    );
    console.log("Payment Response", response);
    return response?.data?.data;
  } catch (error) {
    console.log("Error in createOrderRequest", error);
    throw error;
  }
};

export const capturePaymentRequest = async ({
  token,
  orderId,
  status,
  paymentId,
  signature,
}) => {
  try {
    const response = await axios.post(
      "/payments/capture",
      {
        orderId,
        status,
        paymentId,
        signature,
      },
      {
        headers: {
          "x-access-token": token,
        },
      }
    );
    console.log("Payment Response", response);
    return response?.data?.data;
  } catch (error) {
    console.log("Error in createOrderRequest", error);
    throw error;
  }
};
