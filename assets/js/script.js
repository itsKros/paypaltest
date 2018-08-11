$( document ).ready(function() {
/*    $('td').click(function(){
        var col = $(this).parent().children().index($(this));
        var row = $(this).parent().parent().children().index($(this).parent());
        alert('Row: ' + row + ', Column: ' + col);
        row.first()
      }); */

      
     
      $("#tbl").on("click", "td", function(){
<<<<<<< HEAD
        var firstCol = $(this).parent("tr").find("th:first").text();
        
        console.log(firstCol);
       
        

        
=======
        var urgency = $(this).parent("tr").find("th:first").text();
        var currentPrice = $(this).text();
        var currentPriceIndex = $(this).index()+1;
        var level = $("#tbl>thead>tr>th:nth-child(" + currentPriceIndex + ")").text();

        
        $('.order-urgency span').html(urgency);
        $('.order-level span').html(level);
        $('.order-total span').html(currentPrice);
        
      });


      $("#btn").click(function() {
        var oU=$('.order-urgency span').text();
        var ol=$('.order-level span').text();
        var ot=$('.order-total span').text();
       
        $.ajax ({
            url: "index.php",
            data: { 
              oU : oU,
              ol : ol,
              ot : ot,
             },
            success: function( result ) {
                alert("Hi, testing");
                alert( result );
            }
        });
        window.location(index.php);
>>>>>>> a6eb7ed09a7b403e5b721b67cf5769854ed501d8
      });

      

      $('#tbl').DataTable();
});