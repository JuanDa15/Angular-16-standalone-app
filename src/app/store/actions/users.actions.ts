import { HttpErrorResponse } from "@angular/common/http";
import { createAction, props } from "@ngrx/store";
import { User } from "src/app/models/user.interface";

export const loadUsers = createAction(
  '[USERS] LOAD USERS',
)

export const loadUsersSuccess = createAction(
  '[USERS] LOAD USERS SUCESS',
  props<{ users: User[] }>()
)

export const loadUsersError = createAction(
  '[USERS] ERROR USERS',
  props<{ payload: Partial<HttpErrorResponse> }>()
)
