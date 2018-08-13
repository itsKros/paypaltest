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
});