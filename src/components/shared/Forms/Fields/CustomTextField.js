import React from 'react'
import { Form, Input } from 'semantic-ui-react'
import './CustomTextField.css'

export const CustomTextField = props => {
  const {
    label,
    input,
    type,
    meta,
    name,
    iconName,
    required,
    placeholder
  } = props
  const error = meta.error && meta.touched
  return (
    <div className="custom-textfield">
      <Form.Group widths="equal">
        <Form.Field
          control={Input}
          type={type}
          label={label}
          required={required}
          placeholder={placeholder}
          icon={iconName}
          iconPosition={iconName ? 'left' : null}
          name={name}
          error={error}
          {...input}
        />
      </Form.Group>
      {meta.error &&
        meta.touched && (
          <span className="custom-textfield__error">{meta.error}</span>
        )}
    </div>
  )
}
