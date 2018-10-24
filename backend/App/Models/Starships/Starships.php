<?php
namespace App\Models\Starships;
defined("APPPATH") OR die("Access denied");

use \App\Models\CrudHelper\CrudMethods as CRUDMET,
    \App\Models\CrudHelper\Crud as CRUD;

class Starships{ 

    private $_table = 'starships';
    private $_const = '';
    private $_data = [];
    private $_type = 'multi';
    private $_r;

    public function get(){
        $this->getById();
    }


    public function setId($id){
        $this->_data = ['id' => $id];
        $this->_const = " WHERE id=:id";
        $this->_type = 'one';
    }

    public function getResponse(){
        return $this->_r;
    }

    private function getById(){
        $s = (CRUD::get("SELECT * FROM $this->_table $this->_const", $this->_data));
        $this->_r  = (!isset($s['e']) && $this->_type == 'one') ? $s[0] : $s;
    }


}