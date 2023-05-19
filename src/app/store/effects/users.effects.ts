import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of, take, tap } from "rxjs";
import { UserService } from "src/app/services/user.service";
import { loadUsers, loadUsersError, loadUsersSuccess } from "../actions";
import { HttpErrorResponse } from "@angular/common/http";

// @Injectable()
// export class UsersEffects {

//   constructor(
//     private _actions$: Actions,
//     private _usersService: UserService
//   ) {}

//   loadUsers$ = createEffect(
//     () => this._actions$.pipe(
//       ofType(loadUsers),
//       exhaustMap(
//         () => this._usersService.getUsers().pipe(
//           map(resp => (loadUsersSuccess({users: resp.data})))
//         )
//       ),
//     )
//   )
// }

export const loadUsersEffect = createEffect(
  (actions$ = inject(Actions), usersService = inject(UserService)) => {
    return actions$.pipe(
      ofType(loadUsers),
      exhaustMap(
        () => usersService.getUsers().pipe(
          map(resp => loadUsersSuccess({ users: resp.data })),
          catchError((error: HttpErrorResponse) =>
            of(loadUsersError({ payload: {
              status: error.status,
              statusText: error.statusText,
              message: error.message,
              headers: error.headers,
              error: error.error,
              url: error.url
            }}))
          )
        )
      )
    )
  }, { functional: true}
)
