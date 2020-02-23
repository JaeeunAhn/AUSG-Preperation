var express = require('express');
var router = express.Router();

const aws = require('aws-sdk')
// 리전을 설정합니다.
aws.config.update({ region: 'ap-northeast-2' })
const rekognition = new aws.Rekognition()

const axios = require('axios')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/detectImage', async (req, res, next) => {
  const imageURL = req.query.imageURL
  // 이미지 URL로부터 해당 이미지를 arraybuffer 형식으로 가져옵니다.
  const responseImage = await axios.get(
    imageURL,
    { responseType: 'arraybuffer' }
  )
  
  // rekognition의 detectText 함수에 필요한 parameter 변수입니다.
  const params = {
    Image: {
      Bytes: new Buffer(responseImage.data, 'binary')
    }
  }

  // 실제로 이미지로부터 텍스트를 추출해내는 작업을 수행하는 함수입니다.
  rekognition.detectText(params, (err, data) => {
    if (err) {
      res.status(200).send(
        {
          status: 400,
          detectionResult: err
        }
      )
    } else {
      res.status(200).send(
        {
          status: 200,
          detectionResult: data
        }
      )
    }
  })
})

module.exports = router;