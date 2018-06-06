import React, { Component } from 'react'
import RegistrationForm from './components/Pages/Users/RegistrationForm'
import './App.css'
import { Grid } from 'semantic-ui-react'

class App extends Component {
  handleSubmit = values => {
    window.alert(JSON.stringify(values, null, 4))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">User Registration Form:</h1>
        </header>
        <div className="App-container">
          <Grid>
            <Grid.Row>
              <Grid.Column width={3} />
              <Grid.Column width={4}>
                <RegistrationForm onSubmit={this.handleSubmit} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    )
  }
}

export default App
