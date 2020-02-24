import React, { useState } from 'react'
import './Form.css'
import axios from 'axios'

export default function Form(props) {
  const [imageURL, setImageURL] = useState('')

  const onURLChanged = (e) => {
    setImageURL(e.target.value)
  }

  const onSubmitButtonClicked = async () => {
    // 로딩 상태로 변경합니다.
    props.setLoadingStatus(true)
    // express 서버에 imageURL에 대해 요청합니다.
    const result = await axios.get(
      'http://localhost:3001/detectImage/?imageURL=' + encodeURIComponent(imageURL),
    )
    // 결과를 받아옵니다.
    const detectionResultArray = result.data.detectionResult.TextDetections
    console.log('result', result)
    // App.js에 result로 전달합니다.
    props.getResult(detectionResultArray)
    // 로딩 상태를 해제합니다.
    props.setLoadingStatus(false)
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

      <div className="form">
        <div className="create-button" onClick={onSubmitButtonClicked}>
          검색
        </div>
      </div>
    </>
  )
}