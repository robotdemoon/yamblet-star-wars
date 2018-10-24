<?php

namespace Core;
defined("APPPATH") OR die("Access Denied");

use \App\Models\Tkn as Tkn,
    \Core\General\Errors;

class App{
    private $_controller;
    private $_method = "";
    private $_entity = '';
    private $_property = '';

    private $_params = [];
    private $_url = '';
    private $_statusCtrler = 'public';
    private $_data = [];
    private $_id = '';
    private $_logs;

    private $_t_user = 'Guest';

    const NAMESPACE_CONTROLLERS = "\App\Controllers\Main\Api\\";
    const CONTROLLERS_PATH = "../App/Controllers/Main/Api/";
    const LOGS_PATH = "../App/Logs/";

    /**
     * [1 Revisar Url]
     * [2 Revisar la Data]
     * [3 Revisar el Token]
     * [4 comprobar el controlador y el metodo]
     * [5 llamar al metodo y enviar información]
     */

    public function __construct(){
        if($this->parseUrl() && $this->isValidData() && $this->isCtrlerValid()  && $this->_method != '' && $this->_property != ''){
            $fullClass = self::NAMESPACE_CONTROLLERS.$this->_controller;
            if(method_exists( $fullClass, ucfirst($this->_entity).ucfirst($this->_property) ) ){
                $m = ucfirst($this->_entity).ucfirst($this->_property);
                $s = new $fullClass($this->_id, $this->_data);
                $s = $s -> $m($this->_method);
            }else{
                Errors::msg('Invalid Methods', 404);
            }
        }
    }

    /**
     * [Se obtiene los valores de la url]
     */

    private function parseUrl(){
        if(isset($_GET["url"])){
            $this->_url =  explode("/", filter_var(rtrim($_GET["url"], "/"), FILTER_SANITIZE_URL));
            return true;
        }else{
            return false;
        }
    }


    /**
     * [Revisar si existe id y/o data]
     */

    private function isValidData(){
        $status = false;
        if(isset($_POST['d'])){
            $this->_params = json_decode($_POST['d'], true);
            if(json_last_error() === 0){
                if(isset($this->_params['action'] ,$this->_params['id'], $this->_params['data'])){
                    $this->_id = $this->_params['id'];
                    $this->_data = $this->_params['data'];
                    $this->_method = $this->_params['action'];
                    $status = true;
                }else if((isset($this->_params['id']) || isset($this->_params['data'])) && isset($this->_params['action'])){
                    (isset($this->_params['id'])) ? $this->_id = $this->_params['id']: $this->_data = $this->_params['data'];
                    $this->_method = $this->_params['action'];
                    $status = true;
                }else{
                    $status = false;
                }
            }
        }
        return $status;
    }

    /**
     * [Validamos que el controlador existe]
     */

    private function isCtrlerValid(){
        $c = $this->_url;
        if(isset($c[0], $c[1])){
            //Cambiamos la ruta del controlador
            if(file_exists(self::CONTROLLERS_PATH.ucfirst($c[1]). ".php")){  
                //nombre del archivo a llamar
                $this->_controller = ucfirst($c[1]);
                $this->_entity = $c[0];
                $this->_property = $c[1];
                return true;
            }else{
                Errors::msg('Invalid Method', 404);
                return false;
            }
        }else{
            Errors::msg('Not exist url entity and Property', 404);
            return false;
        }
    }
    
   
    public static function getConfig(){
        return parse_ini_file(APPPATH . '/Config/config.ini');
    }

    public static function getLog(){
        return self::LOGS_PATH;
    }
}