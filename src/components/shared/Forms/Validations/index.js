/**
 * Here we'll use the field-level validation strategy
 * to implement synchronous validation
 */
export const required = value => (value ? undefined : 'Value is required')

export const minLength = value =>
  value && value.length < 4 ? 'Value must be atleast 4 characters!' : undefined

export const maxLength = value =>
  value && value.length > 10 ? 'Value is too long!' : undefined
