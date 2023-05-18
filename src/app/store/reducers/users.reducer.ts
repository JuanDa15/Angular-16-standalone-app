import { createReducer, on } from "@ngrx/store";
import { User } from "src/app/models/user.interface";
import { loadUsers, loadUsersError, loadUsersSuccess } from "../actions";

export interface UsersState {
  users: User[],
  loaded: boolean,
  loading: boolean,
  error: any
}

const initialState: UsersState = {
  error: null,
  loaded: false,
  loading: false,
  users: []
}

export const usersReducer = createReducer(
  initialState,
  on(loadUsers, (state) => ({...state, loading: true})),
  on(loadUsersSuccess, (state, {users}) => {
    const newUsers = structuredClone(users);
    return {
      ...state,
      users: newUsers,
      loading: false,
      loaded: true
    }
  }),
  on(loadUsersError, (state, {payload}) => {
    const payloadCopy = structuredClone(payload);
    return {
      ...state,
      loaded: false,
      loading: false,
      error: payloadCopy
    }
  })
)
