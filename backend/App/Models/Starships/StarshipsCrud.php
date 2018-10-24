<?php
namespace App\Models\Starships;
defined("APPPATH") OR die("Access denied");


class StarshipsCrud{ 

    private $_data;
    private $_table = 'starships';
    private $_type = 'add';
    private $_id = '';

    public function setData($data){
        $this->_data = $data;
    }

    public function setId($id){
        $this->_id = $id;
    }

    public function setType($type = 'add'){
        $this->_type = $type;
    }

    public function validateData(){
        $s = $this->_data;
        $r = false;
        if(isset($s['nombre'], $s['modelo'], $s['fabricante'], $s['costo'], $s['longitud'], $s['velocidad'], $s['tripulacion'], $s['pasajeros'], $s['capacidad_carga'], $s['suministros'], $s['relacion_impulsor']) ){
            $r = true;
        }
        return $r;
    }

    private function structData(){
        if($this->_type == 'add' || $this->_type== 'update'){
            $this->_data = array(
                'nombre' => $this->_data['nombre'],
                'modelo' => $this->_data['modelo'],
                'fabricante' => $this->_data['fabricante'],
                'costo' => $this->_data['costo'],
                'longitud' => $this->_data['longitud'],
                'velocidad' => $this->_data['velocidad'],
                'tripulacion' => $this->_data['tripulacion'],
                'pasajeros' => $this->_data['pasajeros'],
                'capacidad_carga' => $this->_data['capacidad_carga'],
                'suministros' => $this->_data['suministros'],
                'relacion_impulsor' => $this->_data['relacion_impulsor']
            );
            if($this->_type =='update'){
                $this->_data['id'] = $this->_id;
            }
        }else{
            $this->_data = array(
                'id' => $this->_id
            );
        }
    }

    public function getData(){
        $this->structData();
        return  $this->_data;
    }

    public function getQuery(){
        if($this->_type == 'update'){
            $q  = "UPDATE $this->_table SET nombre=:nombre,modelo=:modelo,fabricante=:fabricante,costo=:costo,longitud=:longitud,velocidad=:velocidad,tripulacion=:tripulacion,pasajeros=:pasajeros, capacidad_carga=:capacidad_carga,suministros=:suministros,relacion_impulsor=:relacion_impulsor WHERE id=:id";
        }else if($this->_type == 'add'){
            $q = "INSERT INTO $this->_table ( nombre,modelo,fabricante,costo,longitud,velocidad,tripulacion,pasajeros, capacidad_carga,suministros,relacion_impulsor) VALUES(:nombre,:modelo,:fabricante,:costo,:longitud,:velocidad,:tripulacion,:pasajeros, :capacidad_carga,:suministros,:relacion_impulsor) ";
        }else{
            $q = "DELETE FROM $this->_table WHERE id=:id";
        }
        return $q;
    }
}