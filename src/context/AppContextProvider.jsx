import combineContext from "@/utils/combineContext";

import { AuthContextProvider } from "./AuthContext";
import { CreateWorkspaceContextProvider, } from "./CreateWorkspaceContext";
import { WorkspacePreferencesModalContextProvider } from "./WorkspacePreferencesModalContext";

export const AppContextProvider = combineContext(
    AuthContextProvider,
    CreateWorkspaceContextProvider,
    WorkspacePreferencesModalContextProvider
)