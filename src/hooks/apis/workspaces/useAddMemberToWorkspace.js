import { addMemberToWorkspaceRequest } from "@/api/workspaces";
import { useAuth } from "@/hooks/context/useAuth";
import { useMutation } from "@tanstack/react-query";

export const useAddMemberToWorkspace = (workspaceId) => {
  const { auth } = useAuth();

  const {
    isPending,
    isSuccess,
    error,
    mutateAsync: addMemberToWorkspaceMutation,
  } = useMutation({
    mutationFn: () =>
      addMemberToWorkspaceRequest({
        workspaceId,
        memberId,
        role,
        token: auth?.token,
      }),
    onSuccess: (data) => {
      console.log("Member added to workspace", data);
    },
    onError: (error) => {
      console.log("Error adding member to workspace", error);
    },
  });
  return {
    isPending,
    isSuccess,
    error,
    addMemberToWorkspaceMutation,
  };
};
