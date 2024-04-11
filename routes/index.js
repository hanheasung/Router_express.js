const express = require('express');
//express의 Router 함수 호출 => 새로운 Router 객체 생성
const router = express.Router();


//GET 라우터 -> HTTP GET 요청처리 
router.get('/',(req,re,next) =>{
    res.render('index',{title:'Express'});
});

//클라이ㅣ언트에게 문자열 전송
//router.get(라우터의 경로, (요철객체,응답 객체))

//라우터를 모듈로 내보냄
module.exports= router;

