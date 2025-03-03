import { fetchWorkspaceDetailsRequest } from "@/api/workspaces";
import { useAuth } from "@/hooks/context/useAuth";
import { useQuery } from "@tanstack/react-query";

export const useGetWorkspaceById = (id) => {
  const { auth } = useAuth();
  const {
    isFetching,
    isSuccess,
    error,
    data: workspace,
  } = useQuery({
    queryKey: [`fetchWorkspaceByID - ${id}`],
    queryFn: () =>
      fetchWorkspaceDetailsRequest({ workspaceId: id, token: auth?.token }),
    staleTime: 10000,

    onSuccess: (data) => {
      console.log("Successfully fetched workspace details", data);
    },
    onError: (error) => {
      console.log("Failed to fetch workspace details", error);
    },
  });
  console.log("Workspace Details", data);
  return { isFetching, isSuccess, error, workspace };
};
