import {object, string} from 'yup'

export const signupSchema = object({
  name: string().required('Name is required'),
  email: string().required('Email is required').email('Invalid email address'),
  password: string()
    .required('Please Enter your password')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
    ),
})
