import React, { useState } from 'react'
import './App.css'
import Form from './components/Form'

export default function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState('')
  
  const setLoadingStatus = (status) => {
    setIsLoading(status)
  }

  const getResult = (result) => {
    setResult(result)
  }
  
  return (
    <div className='App'>
      {isLoading ?
        <div>Loading....</div> :
        <Form
          getResult={getResult}
          setLoadingStatus={setLoadingStatus}
        />
      }
      {result &&
        <div>{result}</div>
      }
    </div>
  )
}