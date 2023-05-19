// import { UsersEffects } from "./users.effects";

import { loadUserEffect } from "./user.effects";
import { loadUsersEffect } from "./users.effects";

export const EffectsObj: Record<string, any> = {
  'loadUsersEffect': loadUsersEffect,
  'loadUserEfferct': loadUserEffect
}
