import axios from "@/config/axiosConfig";

export const createWorkspaceRequest = async ({ name, description, token }) => {
  try {
    const response = await axios.post(
      "/workspaces",
      { name, description },
      {
        headers: {
          "x-access-token": token,
        },
      }
    );
    console.log("Response in createWorkspaceRequest", response);
    return response?.data?.data;
  } catch (error) {
    console.log("Error in createWorkspaceRequest", error);
    throw error.response.data;
  }
};

export const fetchWorkspacesRequest = async ({ token }) => {
  try {
    const response = await axios.get("/workspaces", {
      headers: {
        "x-access-token": token,
      },
    });

    console.log("Response in fetchWorkspacesRequest", response);
    return response?.data.data;
  } catch (error) {
    console.log("Error in fetchWorkspacesRequest", error);
    throw error.response.data;
  }
};

export const fetchWorkspaceDetailsRequest = async ({ workspaceId, token }) => {
  try {
    const response = await axios.get(`/workspaces/${workspaceId}`, {
      headers: {
        "x-access-token": token,
      },
    });
    console.log("Response in fetchWorkspaceDetailsRequest", response);
    return response?.data?.data;
  } catch (error) {
    console.log("Error in fetchWorkspaceDetailsRequest", error);
    throw error.response.data;
  }
};

export const deleteWorkspaceRequest = async ({ workspaceId, token }) => {
  try {
    const response = await axios.delete(`/workspaces/${workspaceId}`, {
      headers: {
        "x-access-token": token,
      },
    });
    console.log("Response in deleteWorkspaceRequest", response);
    return response?.data?.data;
  } catch (error) {
    console.log("Error in deleteWorkspaceRequest", error);
    throw error.response.data;
  }
};

export const updateWorkspaceRequest = async ({ workspaceId, name, token }) => {
  try {
    const response = await axios.put(
      `/workspaces/${workspaceId}`,
      { name },
      {
        headers: {
          "x-access-token": token,
        },
      }
    );
    console.log("Response in updateWorkspaceRequest", response);
    return response?.data?.data;
  } catch (error) {
    console.log("Error in updateWorkspaceRequest", error);
    throw error.response.data;
  }
};

export const addChannelToWorkspaceRequest = async ({
  workspaceId,
  channelName,
  token,
}) => {
  try {
    const response = await axios.put(
      `/workspaces/${workspaceId}/channels`,
      { channelName },
      {
        headers: {
          "x-access-token": token,
        },
      }
    );
    console.log("Response in createChannelRequest", response);
    return response?.data?.data;
  } catch (error) {
    console.log("Error in createChannelRequest", error);
    throw error.response.data;
  }
};

export const resetWorkspaceJoinCodeRequest = async ({ workspaceId, token }) => {
  try {
    const response = await axios.put(
      `/workspaces/${workspaceId}/joinCode/reset`,
      {},
      {
        headers: {
          "x-access-token": token,
        },
      }
    );
    console.log("Response in resetWorkspaceJoinCodeRequest", response);
    return response?.data?.data;
  } catch (error) {
    console.log("Error in resetWorkspaceJoinCodeRequest", error);
    throw error.response.data;
  }
};

export const addMemberToWorkspaceRequest = async ({ workspaceId, token }) => {
  try {
    const response = await axios.put(
      `/workspaces/${workspaceId}/members`,
      {},
      {
        headers: {
          "x-access-token": token,
        },
      }
    );
    console.log("Response in addMemberToWorkspaceRequest", response);
    return response?.data?.data;
  } catch (error) {
    console.log("Error in addMemberToWorkspaceRequest", error);
    throw error.response.data;
  }
};

export const joinWorkspaceRequest = async ({
  workspaceId,
  joinCode,
  token,
}) => {
  try {
    const response = await axios.put(
      `/workspaces/${workspaceId}/join`,
      { joinCode },
      {
        headers: {
          "x-access-token": token,
        },
      }
    );
    console.log("Response in joinWorkspaceRequest", response);
    return response?.data?.data;
  } catch (error) {
    console.log("Error in joinWorkspaceRequest", error);
    throw error.response.data;
  }
};
