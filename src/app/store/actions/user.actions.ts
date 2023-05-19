import { HttpErrorResponse } from "@angular/common/http";
import { createAction, props } from "@ngrx/store";
import { UserDetail } from "src/app/models/user.interface";

export const loadUser = createAction(
  '[User] Load user',
  props<{ id: string }>()
)

export const loadUserSuccess = createAction(
  '[User] Load User Success',
  props<{ user: UserDetail }>()
)

export const loadUserError = createAction(
  '[User] Load user error',
  props<{ payload: Partial<HttpErrorResponse> }>()
)
