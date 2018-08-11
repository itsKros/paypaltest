$( document ).ready(function() {
/*    $('td').click(function(){
        var col = $(this).parent().children().index($(this));
        var row = $(this).parent().parent().children().index($(this).parent());
        alert('Row: ' + row + ', Column: ' + col);
        row.first()
      }); */


      $("#tbl").on("click", "td", function(){
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
      });
});