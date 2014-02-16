<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Evaluaciones extends CI_Controller {

    public function index() {
        $data = array();
        $this->loadData($data);
        $this->load->view('header', $data);
        $this->load->view('evaluacionesV');
        $this->load->view('footer');
    }

    public function loadData(&$data) {
        $data["tab"] = "evaluaciones";
    }

}
