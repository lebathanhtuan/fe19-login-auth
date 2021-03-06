import { createReducer } from '@reduxjs/toolkit'
import { AUTH_ACTION, REQUEST, SUCCESS, FAIL } from '../constants'

const initialState = {
  userInfo: {
    data: {},
    loading: false,
  },
  responseAction: {
    login: {
      loading: false,
      error: '',
    },
    register: {
      loading: false,
      error: '',
    },
  }
}

const authReducer = createReducer(initialState, {
  [SUCCESS(AUTH_ACTION.GET_USER_INFO)]: (state, action) => {
    const { data } = action.payload
    return {
      ...state,
      userInfo: {
        ...state.userInfo,
        data,
      },
    }
  },
  [REQUEST(AUTH_ACTION.LOGIN)]: (state, action) => {
    return {
      ...state,
      responseAction: {
        ...state.responseAction,
        login: {
          ...state.responseAction.login,
          loading: true
        }
      },
    }
  },
  [SUCCESS(AUTH_ACTION.LOGIN)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      userInfo: {
        ...state.userInfo,
        data,
      },
      responseAction: {
        ...state.responseAction,
        login: {
          loading: false,
          error: '',
        }
      },
    }
  },
  [FAIL(AUTH_ACTION.LOGIN)]: (state, action) => {
    const { error } = action.payload
    return {
      ...state,
      responseAction: {
        ...state.responseAction,
        login: {
          loading: false,
          error: error,
        }
      },
    }
  },

  [REQUEST(AUTH_ACTION.REGISTER)]: (state, action) => {
    return {
      ...state,
      responseAction: {
        ...state.responseAction,
        register: {
          ...state.responseAction.register,
          loading: true
        }
      },
    }
  },
  [SUCCESS(AUTH_ACTION.REGISTER)]: (state, action) => {
    return {
      ...state,
      responseAction: {
        ...state.responseAction,
        register: {
          loading: false,
          error: '',
        }
      },
    }
  },
  [FAIL(AUTH_ACTION.REGISTER)]: (state, action) => {
    const { error } = action.payload
    return {
      ...state,
      responseAction: {
        ...state.responseAction,
        register: {
          loading: false,
          error: error,
        }
      },
    }
  },
  [AUTH_ACTION.LOGOUT]: (state, action) => {
    return {
      ...state,
      userInfo: {},
    }
  }
})

export default authReducer
