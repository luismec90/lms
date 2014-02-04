<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Api extends CI_Controller {

    public function LMSInitialize() {
        //Do something
        echo "true";
    }

    public function LMSFinish() {
        //Do something
        echo "true";
    }

    public function LMSSetValue() {
        $campo = $_POST['param1'];
        $valor = $_POST['param2'];
        //Do something
        echo "$campo $valor true";
    }

}
