import {object, string} from 'yup'

export const signinSchema = object({
  email: string().required('Email is required').email('Invalid email address'),
  password: string().required('Password is required'),
})
