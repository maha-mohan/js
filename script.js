

 $('document').ready( function () {

      $('#submitBtn').click( function(event) {
         event.preventDefault();

         var num1  = Number($('#num1').val());
         var num2  = Number($('#num2').val());

         $('#result').text( num1 + num2 );
      })



   });