$( document ).ready(function() {
/*    $('td').click(function(){
        var col = $(this).parent().children().index($(this));
        var row = $(this).parent().parent().children().index($(this).parent());
        alert('Row: ' + row + ', Column: ' + col);
        row.first()
      }); */

      
     
      $("#tbl").on("click", "td", function(){
        var firstCol = $(this).parent("tr").find("th:first").text();
        
        console.log(firstCol);
       
        

        
      });

      

      $('#tbl').DataTable();
});