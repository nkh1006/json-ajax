$(function() {
   $("#button").click(function(){

      /*
         responseTxt : 서버에 요청이 완료되면 결과 내용
         statusTxt : 서버에 요청을 보내면, 요청의 상태
         xhr : 요청한 오브젝트

         $('#div').load('경로', 완료되면 할일 function(reponseTxt, statusTxt, xhr));
      */

      $('div').load('sample.txt', function(reponseTxt, statusTxt ,xhr) {
         console.log(reponseTxt);
         console.log(statusTxt);
         console.log(xhr);
         if(statusTxt == "success" && xhr.status === 200) {
            console.log('success');
         } else {
            console.log('error');
         };
      });
   });
});
