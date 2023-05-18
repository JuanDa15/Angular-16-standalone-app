import { createAction, props } from "@ngrx/store";
import { User } from "src/app/models/user.interface";

export const loadUsers = createAction(
  '[USERS] SET USERS',
  props<{ users: User[] }>()
)

export const errorUsers = createAction(
  '[USERS] ERROR USERS',
  props<{ payload: any }>()
)
