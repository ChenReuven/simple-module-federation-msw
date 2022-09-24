import React from 'react'
import TextField from '@mui/material/TextField'

const App = () => {
  return (
    <div
      style={{
        textAlign: 'center',
        color: '#000',
        fontFamily: 'Helvetica Neue',
        fontWeight: 400,
      }}
    >
      <div>
        <TextField label="Search" variant="standard" style={{ color: '#000' }} />
      </div>
    </div>
  )
}

export default App
