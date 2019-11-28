import axios from 'axios'
export const setCurrentUser = ( user ) => ({
    type: 'SET_CURRENT_USER',
    payload: user
})

export const setSignOut = () =>({
 type: 'SIGN_OUT'
})

export const signupUserAction = body => async dispatch => {
try {
  const header = {
    'Content-Type': 'application/json',
  }
  const user = await axios.post('http://localhost:5000/api/v1/auth/signup', body, { header })
} catch (err){
  const { response: { data: { error: { errors } } }} = err;
 
  const messages = Object.values(errors)
  dispatch({
    type: 'SIGNUP_ERROR',
    payload: messages
  })
 
}


}