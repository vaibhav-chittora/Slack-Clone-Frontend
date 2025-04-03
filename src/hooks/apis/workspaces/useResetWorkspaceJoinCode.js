import { resetWorkspaceJoinCodeRequest } from "@/api/workspaces";
import { useAuth } from "@/hooks/context/useAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useResetWorkspaceJoinCode = (workspaceId) => {
  const { auth } = useAuth();

  const queryClient = useQueryClient();

  const {
    isPending,
    isSuccess,
    error,
    mutateAsync: resetWorkspaceJoinCodeMutation,
  } = useMutation({
    mutationFn: () =>
      resetWorkspaceJoinCodeRequest({
        workspaceId,
        token: auth?.token,
      }),
    onSuccess: (data) => {
      console.log("Workspace join code reset successfully", data);
      queryClient.invalidateQueries(`fetchWorkspaceByID - ${workspaceId}`);
    },
    onError: (error) => {
      console.log("Failed to reset workspace join code", error);
    },
  });
  return { isPending, isSuccess, error, resetWorkspaceJoinCodeMutation };
};
