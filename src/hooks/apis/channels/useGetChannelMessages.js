import { getPaginatedMessages } from "@/api/channels";
import { useAuth } from "@/hooks/context/useAuth";
import { useQuery } from "@tanstack/react-query";

export const useGetChannelMessages = (channelId) => {
  const { auth } = useAuth();

  const {
    isFetching,
    isError,
    error,
    isSuccess,
    data: messages,
  } = useQuery({
    queryFn: () =>
      getPaginatedMessages({
        channelId,
        token: auth?.token,
        limit: 10,
        offset: 0,
      }),
    queryKey: ["getPaginatedMessages"],
  });

  return {
    isFetching,
    isError,
    error,
    isSuccess,
    messages,
  };
};
