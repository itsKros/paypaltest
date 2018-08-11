<?php include('header.php'); ?>

    <div class="container">
        <div class="row py-5">
            <div class="col-lg-8 text-left">
                <table class="table" id="tbl">
                    <thead class=".thead-light">
                        <tr> 
                            <th scope="col" class="urgent">Urgency</th>
                            <th scope="col">High School</th>
                            <th scope="col">College</th>
                            <th scope="col">Undergraduate</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="col" class="urgent">20 Days</th>
                            <td>$35.61</td>
                            <td>$46.95</td>
                            <td>$53.88</td>
                        </tr>
                        <tr>
                            <th scope="col" class="urgent">14 Days</th>
                            <td>$39.54</td>
                            <td>$50.10</td>
                            <td>$56.70</td>
                        </tr>
                        <tr>
                        <th scope="col" class="urgent">10 Days</th>
                            <td>$41.85</td>
                            <td>$50.85</td>
                            <td>$56.85</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="col-lg-4 text-left">
                <div class="card">
                    <div class="card-header"><h5>Order Total</h5></div>
                    <div class="card-body">
                        <h6 class="order-urgency">Urgency: <span></span></h6>
                        <h6 class="order-level">Level: <span></span></h6>
                        <h6 class="order-total">Total: <span></span></h6>
                    </div>
                    <div class="card-footer"><button class="btn btn-primary">Order</button></div>
                </div>
            </div>
        </div>
    </div>

<?php include('footer.php'); ?>