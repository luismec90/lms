<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Inicio extends CI_Controller {

    public function index() {
        $data = array();
        $this->loadData($data);
        $this->load->view('header',$data);
        $this->load->view('iniciov');
        $this->load->view('footer');
    }

    public function loadData(&$data) {
        $data["tab"] = "inicio";
    }

}
