<?php

require 'vendor/autoload.php';

define('SITE_URL','http://localhost/paypal');

$paypal = new \PayPal\Rest\ApiContext(
    new \PayPal\Auth\OAuthTokenCredential(
        '',
        '')
);