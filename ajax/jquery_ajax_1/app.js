$('#execute').click(function(){
   $.ajax({
      url:'./time.php',
      success:function(data){
            $('#time').append(data);
      }
   })
})