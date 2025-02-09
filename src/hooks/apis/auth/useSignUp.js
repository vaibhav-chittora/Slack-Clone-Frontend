import { useMutation } from "@tanstack/react-query";
import { signUpRequest } from "@/api/auth";

export const useSignUp = () => {
  const {
    isPending,
    isSuccess,
    error,
    mutateAsync: signUpMutation,
  } = useMutation({
    mutationFn: signUpRequest,
    onSuccess: (data) => {
      console.log("Successfully signed up", data);
    },
    onError: (error) => {
      console.log("Failed to sign up", error);
    },
  });

  return { isPending, isSuccess, error, signUpMutation };
};
