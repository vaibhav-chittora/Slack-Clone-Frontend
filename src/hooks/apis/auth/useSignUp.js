import { useMutation } from "@tanstack/react-query";
import { signUpRequest } from "@/api/auth";
import { useToast } from "@/hooks/use-toast";
import { Title } from "@radix-ui/react-toast";

export const useSignUp = () => {
  const { toast } = useToast();
  const {
    isPending,
    isSuccess,
    error,
    mutateAsync: signUpMutation,
  } = useMutation({
    mutationFn: signUpRequest,
    onSuccess: (data) => {
      console.log("Successfully signed up", data);
      toast({
        title:
          "Successfully signed up. You will be redirected to signin page in few seconds",
        variant: "success",
      });
    },
    onError: (error) => {
      console.log("Failed to sign up", error);
      toast({
        title: "Failed to sign up, please try again",
        variant: "destructive",
      });
    },
  });

  return { isPending, isSuccess, error, signUpMutation };
};
