import { capturePaymentRequest } from "@/api/payments";
import { useAuth } from "@/hooks/context/useAuth";
import { useMutation } from "@tanstack/react-query";

export const useCaptureOrder = () => {
  const { auth } = useAuth();

  const {
    error,
    isSuccess,
    isPending,
    mutateAsync: captureOrderMutation,
  } = useMutation({
    mutationFn: ({ orderId, status, paymentId, signature }) =>
      capturePaymentRequest({
        token: auth?.token,
        orderId,
        status,
        paymentId,
        signature,
      }),
    onSuccess: (data) => {
      console.log("Order Captured Successfully", data);
    },
    onError: (error) => {
      console.log("Error in Capturing Order", error);
    },
  });

  return {
    error,
    isSuccess,
    isPending,
    captureOrderMutation,
  };
};
