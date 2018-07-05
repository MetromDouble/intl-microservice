export const SIGN_IN = {
  request: 'SIGN_IN_REQUEST',
  success: 'SIGN_IN_SUCCESS',
  error: 'SIGN_IN_ERROR'
}
export const SIGN_UP = {
  request: 'SIGN_UP_REQUEST',
  success: 'SIGN_UP_SUCCESS',
  error: 'SIGN_UP_ERROR'
}
export const SIGN_OUT = 'SIGN_OUT'
export const FORGOT_PASSWORD = 'FORGOT_PASSWORD'

export const signIn = data => ({
  type: SIGN_IN.request,
  payload: data
})
export const signUp = data => ({
  type: SIGN_UP.request,
  payload: data
})
export const signOut = () => ({
  type: SIGN_OUT
})
export const forgotPassword = data => ({
  type: FORGOT_PASSWORD,
  payload: data
})
