import { HttpErrorResponse } from "@angular/common/http";
import { createReducer, on } from "@ngrx/store";
import { UserDetail } from "src/app/models/user.interface";
import { loadUser, loadUserError, loadUserSuccess } from "../actions";
import { AppState } from "./app.reducer";

export interface UserState {
  id: string | null;
  user: UserDetail | null;
  loading: boolean;
  loaded: boolean;
  error: Partial<HttpErrorResponse> | null
}

export interface AppStateWithUser extends AppState {
  user: UserState
}

const initialState: UserState = {
  id: null,
  loaded: false,
  loading: false,
  user: null,
  error: null
}

export const userReducer = createReducer(
  initialState,
  on(loadUser, (state, { id }) => {
    return {
      ...state,
      id: id,
      loading: true
    }
  }),
  on(loadUserSuccess, (state, {user}) => {
    const newUser = structuredClone(user);
    return {
      ...state,
      user: newUser,
      loading: false,
      loaded: true,
      error: null
    }
  }),
  on(loadUserError, (state, { payload }) => {
    return {
      ...state,
      error: payload
    }
  })
)
