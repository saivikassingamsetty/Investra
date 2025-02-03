//field level validation
// returns RuleExpression type from vee-validate
export const validateEmail = (value: string): any => {
  // if the field is empty
  if (!value) {
    return 'This field is required'
  }
  // if the field is not a valid email
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  if (!regex.test(value)) {
    return 'This field must be a valid email'
  }
  // All is good
  return true
}
