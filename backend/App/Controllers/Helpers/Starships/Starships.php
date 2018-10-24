<?php
namespace App\Controllers\Helpers\Starships;
defined("APPPATH") OR die("Access denied");


use \App\Controllers\Main\Base as BaseCONT,
    \App\Models\Starships\Starships as StarshipsModel,
    \App\Models\Starships\StarshipsCrud as StarshipsCrudModel,
    \App\Models\CrudHelper\CrudA;

class Starships extends BaseCONT{   


    public function get(){
        return ($this->_id > 0) ? $this->getItem(true): null;
    }

    public function getAll(){
        return $this->getItem();
    }

    public function add(){
        $s = null;
        if(isset($this->_data)){
            $p = new StarshipsCrudModel();
            $p -> setType('add');
            $p -> setData($this->_data);
            if($p -> validateData()){
                $cr = new CrudA();
                $s = $cr -> add($p -> getData(), $p -> getQuery(), true);
                $cr -> end();
            }
            return $s;
        }
    }

    public function update(){
        $s = null;
        if(isset($this->_data, $this->_id) && $this->_id > 0){
            $p = new StarshipsCrudModel();
            $p -> setType('update');
            $p -> setId($this->_id);
            $p -> setData($this->_data);
            if($p -> validateData()){
                $cr = new CrudA();
                $s = $cr -> update($p -> getData(), $p -> getQuery());
                $cr -> end();
            }
            return $s;
        }
    }

    public function remove(){
        $s = null;
        if(isset($this->_id) && $this->_id > 0){
            $p = new StarshipsCrudModel();
            $p -> setType('remove');
            $p -> setId($this->_id);
            $cr = new CrudA();
            $s = $cr -> remove($p -> getData(), $p -> getQuery());
            $cr -> end();
            return $s;
        }
    }



    private function getItem( $multi = false){
        $s = new StarshipsModel();
        ($multi && $this->_id > 0) ? $s -> setId($this->_id): '';
        $s -> get();
        return $s -> getResponse();
    }
}