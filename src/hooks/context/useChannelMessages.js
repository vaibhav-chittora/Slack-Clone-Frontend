import ChannelMessages from "@/context/channelMessages";
import { useContext } from "react";

export const useChannelMessages = () => {
  return useContext(ChannelMessages);
};
