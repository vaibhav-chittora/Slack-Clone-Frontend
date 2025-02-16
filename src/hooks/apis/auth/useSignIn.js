import { signInRequest } from "@/api/auth";
import { useAuth } from "@/hooks/context/useAuth";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";

export const useSignIn = () => {
  const { toast } = useToast();

  const { auth, setAuth } = useAuth();

  const {
    isPending,
    isSuccess,
    error,
    mutateAsync: signInMutation,
  } = useMutation({
    mutationFn: signInRequest,
    onSuccess: (response) => {
      console.log("Successfully signed in", response);
      const userObject = JSON.stringify(response.data);

      // setting user and token in local storage
      localStorage.setItem("user", userObject);
      localStorage.setItem("token", response.data.token);

      setAuth({
        token: response.data.token,
        user: response.data,
        isLoading: false,
      });

      toast({
        title:
          "Successfully signed in, you will be redirected to home page in few seconds",
        type: "success",
      });
    },
    onError: (error) => {
      console.log("Failed to sign in", error.error.explanation);
      toast({
        title: `Failed to signin - ${error.error.explanation}`,
        type: "error",
        variant: "destructive",
      });
    },
  });

  return {
    isPending,
    isSuccess,
    error,
    signInMutation,
  };
};
