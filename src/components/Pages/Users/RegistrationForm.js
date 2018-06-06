import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { CustomTextField } from '../../shared/Forms/Fields/CustomTextField'
import { required, minLength } from '../../shared/Forms/Validations'
import { Button, Form } from 'semantic-ui-react'

class RegistrationForm extends Component {
  render() {
    const { handleSubmit } = this.props
    return (
      <Form onSubmit={handleSubmit}>
        <Field
          required
          iconName="user"
          name="firstName"
          label="First Name:"
          component={CustomTextField}
          type="text"
          validate={[required, minLength]}
        />
        <Field
          name="middleName"
          iconName="user"
          label="Middle Name:"
          component={CustomTextField}
          type="text"
          validate={[minLength]}
        />
        <Field
          required
          iconName="user"
          name="lastName"
          label="Last Name:"
          component={CustomTextField}
          type="text"
          validate={[required, minLength]}
        />
        <Field
          required
          iconName="mail"
          name="email"
          label="Email:"
          component={CustomTextField}
          type="text"
          validate={[required]}
        />
        <Field
          required
          name="username"
          label="Username:"
          component={CustomTextField}
          type="text"
          validate={[required, minLength]}
        />
        <Field
          required
          name="password"
          label="Password:"
          component={CustomTextField}
          type="password"
          validate={[required, minLength]}
        />
        <Button.Group>
          <Button negative>Cancel</Button>
          <Button.Or />
          <Button positive type="submit">
            Save
          </Button>
        </Button.Group>
      </Form>
    )
  }
}

/**
 * Decorate the RegisterForm component using the reduxForm method.
 */
RegistrationForm = reduxForm({
  form: 'registrationForm'
})(RegistrationForm)

export default RegistrationForm
