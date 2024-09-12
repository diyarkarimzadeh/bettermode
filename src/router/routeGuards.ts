export enum GuardAction {
  Pass,
  Redirect,
  Logout,
}
export type GuardFnResult = {
  action: GuardAction;
  data: unknown;
};

const response = (action: GuardAction, data: unknown = {}) => ({
  action,
  data,
});

export function needAuth(): GuardFnResult {
  return response(GuardAction.Pass);
}

export function needNoAuth(): GuardFnResult {
  return response(GuardAction.Pass);
}
