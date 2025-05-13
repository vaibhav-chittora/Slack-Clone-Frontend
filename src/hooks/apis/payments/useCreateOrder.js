import { createOrderRequest } from "@/api/payments/index";
import { useAuth } from "@/hooks/context/useAuth.js";
import { useMutation } from "@tanstack/react-query";

export const useCreateOrder = () => {
  const { auth } = useAuth();

  const {
    mutateAsync: createOrderMutation,
    isSuccess,
    error,
    isPending,
  } = useMutation({
    mutationFn: (amount) =>
      createOrderRequest({
        token: auth?.token,
        amount,
      }),
    onSuccess: (data) => {
      console.log("Order created Successfully", data);
    },
    onError: (error) => {
      console.log("Error in Creating Order", error);
    },
  });

  return {
    error,
    isSuccess,
    isPending,
    createOrderMutation,
  };
};
