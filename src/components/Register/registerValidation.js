import config from '../../config'
import axios from 'axios'

// const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export const asyncValidate = (values, dispatch) => {
  return new Promise((resolve, reject) => {
    const errors = {}
    // if (['john', 'paul', 'george', 'ringo'].includes(values.display_name)) {
    //   errors.display_name = 'That display name is taken'
    // }

    axios
      .post(config.API_ENDPOINT + '/auth/validate_email', {
        email: values.email
      })
      .then(response => {
        const data = response.data

        if (data.exists) {
          errors.email = 'That email is taken'
        }
        resolve(errors)
      })
  })

  // return new Promise((resolve, reject) => {

  //   dispatch(validateUserFields(values))
  //   .then((response) => {
  //       let data = response.payload.data
  //       //if status is not 200 or any one of the fields exist, then there is a field error
  //       if(response.payload.status != 200 || data.username || data.email) {
  //         //let other components know of error by updating the redux` state
  //         dispatch(validateUserFieldsFailure(response.payload))
  //          reject(data) //this is for redux-form itself
  //        } else {
  //           //let other components know that everything is fine by updating the redux` state
  //         dispatch(validateUserFieldsSuccess(response.payload)) //ps: this is same as dispatching RESET_USER_FIELDS
  //         resolve()//this is for redux-form itself
  //       }
  //     })
  // })

  // return sleep(200) // simulate server latency
  //   .then(() => {
  //     const errors = {}
  //     if ([ 'john', 'paul', 'george', 'ringo' ].includes(values.display_name)) {
  //       errors.display_name = 'That display name is taken'
  //     }
  //     if ([ 'john', 'paul', 'george', 'ringo' ].includes(values.email)) {
  //       errors.email = 'That email is taken'
  //     }
  //     return errors
  //   })
}

export const validate = v => {
  let errors = {}
  let required = ['email', 'password', 'display_name']
  required.forEach(value => {
    if (!v[value]) {
      errors[value] = 'This field is required'
    }
  })
  if (Object.keys(errors).length) {
    return errors
  }
  if (v['password'] != v['confirm_password']) {
    return {
      confirm_password: 'Password not matched'
    }
  }
}
