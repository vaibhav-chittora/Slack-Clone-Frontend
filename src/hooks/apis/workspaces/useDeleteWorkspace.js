import { deleteWorkspaceRequest } from "@/api/workspaces";
import { useAuth } from "@/hooks/context/useAuth";
import { useMutation } from "@tanstack/react-query";

export const useDeleteWorkspace = (workspaceId) => {
  const { auth } = useAuth();
  const {
    isPending,
    isSuccess,
    error,
    mutateAsync: deleteWorkspaceMutation,
  } = useMutation({
    mutationFn: () =>
      deleteWorkspaceRequest({ workspaceId, token: auth?.token }),
    onSuccess: (data) => {
      console.log("Successfully deleted workspace", data);
    },
    onError: (error) => {
      console.log("Failed to delete workspace", error);
    },
  });

  return { isPending, isSuccess, error, deleteWorkspaceMutation };
};
