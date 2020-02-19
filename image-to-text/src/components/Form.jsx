import React, { useState } from 'react'

export default function Form(props) {
  const [imageURL, setImageURL] = useState('')
  
  const onURLChanged = (e) => {
    setImageURL(e.target.value)
  }

  const onSubmitButtonClicked = () => {
    // TODO: call server
    props.getResult(imageURL)
  }
  
  return (
    <>
      <input
        placeholder='이미지 url'
        value={imageURL}
        onChange={onURLChanged}
      />
      <button onClick={onSubmitButtonClicked}>
        submit
      </button>
    </>
  )
}