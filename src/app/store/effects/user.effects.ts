import { Actions, createEffect, ofType } from "@ngrx/effects";
import { inject } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { loadUser, loadUserError, loadUserSuccess } from "../actions";
import { catchError, exhaustMap, map, of } from "rxjs";
export const loadUserEffect = createEffect(
  (actions$ = inject(Actions), userService = inject(UserService)) => {
    return actions$.pipe(
      ofType(loadUser),
      exhaustMap(
        ( { id} ) => userService.getUser(id).pipe(
          map(resp => loadUserSuccess({ user: resp })),
          catchError( error => of(loadUserError(error)))
        )
      )
    )
  },
  { functional: true }
)
