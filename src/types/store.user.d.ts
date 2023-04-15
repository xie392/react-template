// user state
export interface UserStateInterface {
  name: string
  count: number
}


// user action
export interface UserAsyncActionInterface {
  type: string
  payload: any
}
