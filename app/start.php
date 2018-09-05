<?php

require 'vendor/autoload.php';

define('SITE_URL','http://localhost/paypaltest');

$paypal = new \PayPal\Rest\ApiContext(
    new \PayPal\Auth\OAuthTokenCredential(
        'AclTq3z4OX7r65hHixFgIEH5KX7ffwKjpvJYdtOmvDCa2imTBIY-CnvYjbQTxCAkIqTEu5gDiqU78Lng',
        'EDkj2zf-vi5SDpQsKz9SVHjipwwwDy9gC1l55lnXk4w3F8om6IPYHJRbeYqf9D4hsCB5eFY9qkFbIT6V')
);