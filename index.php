<?php include('header.php'); ?>
    <!-- Page Content -->
    <div class="container">
      <div class="row py-5">
        <div class="col-lg-4 offset-md-4 text-left">
        <form action="checkout.php" method="post" autocomplete="off">
            <div class="form-group">
                <label for="product">Product</label>
                <input type="text" class="form-control" id="product" name="product">
            </div>
            <div class="form-group">
                <label for="price">Price</label>
                <input type="text" class="form-control" id="price" name="price">
            </div>
            <input type="submit" class="form-control btn btn-primary" id="pay" value="Pay" name="pay">
            
        </form>
        </div>
      </div>
    </div>

<?php include('footer.php'); ?>

