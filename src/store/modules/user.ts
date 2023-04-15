import { UserStateInterface } from '#/store.user'
import { StoreActionInterface } from '#/store'

const userState: UserStateInterface = {
  name: 'XIE392',
  count: 0
}

const userReducer = (state: UserStateInterface = userState, action: StoreActionInterface) => {
  const { type, payload = {} } = action
  switch (type) {
    case 'add':
      return { ...state, ...payload }
    default:
      return state
  }
}

export default userReducer
