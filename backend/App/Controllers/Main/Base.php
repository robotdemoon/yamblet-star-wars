<?php
namespace App\Controllers\Main;
defined("APPPATH") OR die("Access denied");

class Base {
    protected $_id;
    protected $_data;

    public function __construct($id = '', $data = []){
        $this->_id = $id;
        $this->_data = $data;
    }
}