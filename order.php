<?php include('header.php'); 


if(isset($_GET['order']))
{
    if(isset($_GET['ordU']))
    {               
        $ordU=$_GET['ordU'];
    }
    if(isset($_GET['ordL']))
    {               
        $ordL=$_GET['ordL'];
    }
    if(isset($_GET['ordT']))
    {               
        $ordT=$_GET['ordT'];
        $ordT = str_replace('$', '', $ordT);
    }


}


 

?>
    <!-- Page Content -->
    <div class="container">
      <div class="row py-5">
        <div class="col-lg-4 offset-md-4 text-left">
        <form action="checkout.php" method="post" autocomplete="off">
        <?php  if(isset($_GET['order'])) { ?>
            <div class="form-group">
                <label for="urgency">Urgency</label>
                <input type="text" class="form-control" id="urgency" name="urgency" value="<?= $ordU; ?>">
            </div>
            <div class="form-group">
                <label for="level">Level</label>
                <input type="text" class="form-control" id="level" name="level" value="<?= $ordL; ?>">
            </div>
           
        
            <div class="form-group">
                <label for="price">Price ($)</label>
                <input type="text" class="form-control" id="price" name="price" value="<?= $ordT; ?>">
            </div>
            
            <input type="submit" class="form-control btn btn-primary" id="pay" value="Pay" name="pay">
            <?php } ?>   
        </form>

       
       <form action="checkout.php" method="post" autocomplete="off">
        
           
            <div class="form-group">
                <label for="product">Product</label>
                <input type="text" class="form-control" id="product" name="product" >
            </div>
           
        
            <div class="form-group">
                <label for="price">Price ($)</label>
                <input type="text" class="form-control" id="price" name="price">
            </div>
            
            <input type="submit" class="form-control btn btn-primary" id="pay" value="Pay" name="pay">
            
        </form>
        
        
        
        </div>
      </div>
    </div>

<?php include('footer.php'); ?>

