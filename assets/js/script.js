$( document ).ready(function() {

      $("#tbl").on("click", "td", function(){
        
        $("#tbl td").removeClass("hasSelected");
        $(this).addClass("hasSelected");
        
        var urgency = $(this).parent("tr").find("th:first").text();
        var currentPrice = $(this).text();
        var currentPriceIndex = $(this).index()+1;
        var level = $("#tbl>thead>tr>th:nth-child(" + currentPriceIndex + ")").text();

        
        $('.order-urgency input').val(urgency);
        $('.order-level input').val(level);
        $('.order-total input').val(currentPrice);
        
      });

      $("#order").submit(function(){

        var urgency = $('.order-urgency input').val();
        var level = $('.order-level input').val();
        var currentPrice = $('.order-total input').val();

        
        if(urgency==''){
           $("#msg").html("Please Select Price");
        }
        else if(level==''){
          $("#msg").html("Please Select Price");
        }
        else if(currentPrice==''){
          $("#msg").html("Please Select Price");
        }
        else {
          var datastr = 'urgency='+urgency + 'level='+level + 'currentPrice='+ currentPrice;    
          $.ajax({
            type:'GET',
            url:'order.php',
            data:datastr,
            success:function(){
              $("#msg").html("Student Successfully Added");
              //$("#msg").html("response");
            }
          });
        }
  
     });
});