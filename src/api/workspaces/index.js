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
