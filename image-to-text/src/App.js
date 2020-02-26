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
        <div>검색 중입니다</div> :
        <Form
          getResult={getResult}
          setLoadingStatus={setLoadingStatus}
        />
      }
      {result !== '' && result.map((result, index) => (
        <div key={index}>
          <h3>{result.Type}</h3>
          <div>{result.DetectedText}</div>
        </div>
      ))}
    </div>
  )
}