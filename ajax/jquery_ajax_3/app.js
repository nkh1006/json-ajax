$(function() {
   $("#button").click(function(){
      $.ajax({
         url:'sample.txt',
         async: false,
         success: function(responseTxt, statusTxt, xhr) {
            console.log(responseTxt);
            console.log(statusTxt);            
            console.log(xhr); 
            $('#div').html(result);
         },
      })
   });
});
