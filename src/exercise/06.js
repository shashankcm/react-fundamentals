// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({ onSubmitUsername }) {
  const inputRef = React.useRef(null);
  const [error, setError] = React.useState(null);
  const [username, setUsername] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault();
    onSubmitUsername(inputRef.current.value);
  }

  function handleChange(event) {
    const value = event.target.value;
    setUsername(value);
    const isValid = value === value.toLowerCase();
    setError(isValid ? null : 'Username must be lower case');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userNameInput">Username:</label>
        <input
          type="text"
          id="userNameInput"
          ref={inputRef}
          onChange={handleChange}
          value={username} />
        <div role="alert" style={{ color: 'red' }}>{error}</div>
      </div>
      <button type="submit" disabled={Boolean(error)}>Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
