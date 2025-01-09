import mockUsers from './mockUsers.json'

export interface IUserData {
  name?: string
  email: string
  password: string
}

//Recieves the email and password and check for the user in our mock data, handle the promise accordingly
export const loginMockAPI = (userData: IUserData) => {
  const { email, password } = userData

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      mockUsers.forEach((user: IUserData) => {
        if (user.email == email && user.password == password) {
          resolve('Login Successful')
        }
        if (user.email == email) {
          reject('Wrong Password')
        }
      })

      reject('User not found')
    }, 1000)
  })
}

//Recieves the email and password and check for the user in our mock data, handle the promise accordingly
export const signupMockAPI = (userData: IUserData) => {
  const { email, password } = userData

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isUserFound = mockUsers.some((user: IUserData) => user.email == email)
      if (isUserFound) {
        reject('User already exists')
      } else {
        resolve('Sign up Successful')
      }
    }, 1000)
  })
}
