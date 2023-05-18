import { ActionReducerMap } from "@ngrx/store";
import { UsersState, usersReducer } from "./users.reducer";

export interface AppState {
  users: UsersState
}

export const AppReducer: ActionReducerMap<AppState> = {
  users: usersReducer
}
