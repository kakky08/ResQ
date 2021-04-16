
export const SignIn = () => {
  return async (dispatch, getState) => {
    const state = getState()
    const isSignedIn = state.users.isSignedIn

    if (!isSignedIn) {
      const url = '';

      const response = await fetch(url)
        .then(res => res.json()).catch(() => null)

      const username = response.login

      dispatch(signInAction({
        isSignedIn: true,
        uid: "00001",
        username: username
      }))
      dispatch(push('/'));
    }
  }
}
