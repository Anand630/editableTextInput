import {Component} from 'react'

import './App.css'

// Replace your code here
class App extends Component {
  state = {storedText: '', saveClicked: false}

  toggleSaveButton = () => {
    this.setState(prevState => ({saveClicked: !prevState.saveClicked}))
  }

  storeText = e => {
    this.setState({storedText: e.target.value})
  }

  render() {
    const {storedText, saveClicked} = this.state
    const buttonText = saveClicked ? 'Edit' : 'Save'
    return (
      <div className="main-container">
        <div className="card-container">
          <h1 className="heading">Editable Text Input</h1>
          <div className="input-or-text-button-container">
            {saveClicked ? (
              <p className="stored-text">{storedText}</p>
            ) : (
              <input
                onChange={this.storeText}
                type="text"
                className="text-input"
                value={storedText}
              />
            )}
            <button
              onClick={this.toggleSaveButton}
              type="button"
              className="save-button"
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default App
