import { useQuery } from "@tanstack/react-query";

export const useFetchWorkspace = () => {
  const {
    isFetching,
    isSuccess,
    error,
    data: workspaces,
  } = useQuery({
    queryFn: () => fetchWorkspacesRequest({ token: auth?.token }),
    queryKey: "fetchWorkspaces",
    staleTime: 30000,

    onSuccess: (data) => {
      console.log("Successfully fetched workspaces", data);
    },
    onError: (error) => {
      console.log("Failed to fetch workspaces", error);
    },
  });

  return { isFetching, isSuccess, error, workspaces };
};
