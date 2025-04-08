import { joinWorkspaceRequest } from "@/api/workspaces";
import { useAuth } from "@/hooks/context/useAuth";
import { useMutation } from "@tanstack/react-query";

export const useJoinWorkspace = (workspaceId) => {
  const { auth } = useAuth();

  const {
    isPending,
    isSuccess,
    error,
    mutateAsync: joinWorkspaceMutation,
  } = useMutation({
    mutationFn: (joinCode) =>
      joinWorkspaceRequest({
        workspaceId,
        joinCode,
        token: auth?.token,
      }),
    onSuccess: (data) => {
      console.log("Workspace joined successfully", data);
    },
    onError: (error) => {
      console.log("Error joining workspace", error);
    },
  });
  return {
    isPending,
    isSuccess,
    error,
    joinWorkspaceMutation,
  };
};
