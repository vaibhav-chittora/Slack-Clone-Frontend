import { addChannelToWorkspaceRequest } from "@/api/workspaces";
import { useAuth } from "@/hooks/context/useAuth";
import { useMutation } from "@tanstack/react-query";

export const useAddChannelToWorkspace = () => {
  const { auth } = useAuth();

  const {
    isPending,
    isSuccess,
    error,
    mutateAsync: addChannelToWorkspaceMutation,
  } = useMutation({
    mutationFn: ({ workspaceId, channelName }) =>
      addChannelToWorkspaceRequest({
        workspaceId,
        channelName,
        token: auth?.token,
      }),
    onSuccess: (data) => {
      console.log("Channel added to workspace", data);
    },
    onError: (error) => {
      console.log("Error adding channel to workspace", error);
    },
  });

  return { isPending, isSuccess, error, addChannelToWorkspaceMutation };
};
