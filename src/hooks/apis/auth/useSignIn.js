import { signInRequest } from "@/api/auth";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";

export const useSignIn = () => {
  const { toast } = useToast();
  const {
    isPending,
    isSuccess,
    error,
    mutateAsync: signInMutation,
  } = useMutation({
    mutationFn: signInRequest,
    onSuccess: (data) => {
      console.log("Successfully signed in", data);
      toast({
        title:
          "Successfully signed in, you will be redirected to home page in few seconds",
        type: "success",
      });
      //   alert(
      //     "Successfully signed in, you will be redirected to home page in few seconds"
      //   );
    },
    onError: (error) => {
      console.log("Failed to sign in", error.error.explanation);
      toast({
        title: `Failed to signin - ${error.error.explanation}`,
        type: "error",
        variant: "destructive",
      });
      //   alert(error.error.explanation);
    },
  });

  return {
    isPending,
    isSuccess,
    error,
    signInMutation,
  };
};
