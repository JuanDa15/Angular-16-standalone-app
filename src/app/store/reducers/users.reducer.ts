import { createReducer, on } from "@ngrx/store";
import { User } from "src/app/models/user.interface";
import { loadUsers, loadUsersError, loadUsersSuccess } from "../actions";
import { HttpErrorResponse } from "@angular/common/http";

export interface UsersState {
  users: User[],
  loaded: boolean,
  loading: boolean,
  error: Partial<HttpErrorResponse> | null
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
      loaded: true,
      error: null
    }
  }),
  on(loadUsersError, (state, {payload}) => {
    return {
      ...state,
      loaded: false,
      loading: false,
      error: payload
    }
  })
)
