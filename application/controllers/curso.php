<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Curso extends CI_Controller {

    public function index() {
        //       $this->load->view('cursov');
    }

    public function vercurso($idCurso) {
        $data["sco"] = $this->readManifiest();
        $this->load->view('cursov', $data);
    }

    private function readManifiest() {
        /*
         * 
         */
        return base_url() . "resources/integralTest/content/launch.html";
    }

}

