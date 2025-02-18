import { fetchWorkspacesRequest } from "@/api/workspaces";
import { useAuth } from "@/hooks/context/useAuth";
import { useQuery } from "@tanstack/react-query";

export const useFetchWorkspace = () => {
  const { auth } = useAuth();
  const {
    isFetching,
    isSuccess,
    error,
    data: workspaces,
  } = useQuery({
    queryFn: () => fetchWorkspacesRequest({ token: auth?.token }),
    queryKey: ["fetchWorkspaces"],

    onSuccess: (data) => {
      console.log("Successfully fetched workspaces", data);
    },
    onError: (error) => {
      console.log("Failed to fetch workspaces", error);
    },
  });

  console.log("workspaces", workspaces);
  return { isFetching, isSuccess, error, workspaces };
};
