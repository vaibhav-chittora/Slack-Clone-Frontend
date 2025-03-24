import { updateWorkspaceRequest } from "@/api/workspaces";
import { useAuth } from "@/hooks/context/useAuth";
import { useMutation } from "@tanstack/react-query";

export const useUpdateWorkspace = (workspaceId) => {
  const { auth } = useAuth();
  const {
    isPending,
    isSuccess,
    error,
    mutateAsync: updateWorkspaceMutation,
  } = useMutation({
    mutationFn: (name) =>
      updateWorkspaceRequest({ workspaceId, name, token: auth?.token }),
    onSuccess: (data) => {
      console.log("Workspace updated successfully", data);
    },
    onError: (error) => {
      console.log("Failed to update workspace", error);
    },
  });

  return { isPending, isSuccess, error, updateWorkspaceMutation };
};
