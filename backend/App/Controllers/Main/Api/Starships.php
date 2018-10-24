<?php
namespace App\Controllers\Main\Api;
defined("APPPATH") OR die("Access denied");
use \App\Controllers\Main\Main;

class Starships extends Main{

    /**
     * [Variables]
     */


    protected  $_Allowed_Starships = ['get', 'getAll','add','update','remove'];

    /**
     * [Naves de Starwars]
     */

    public function StarwarsStarships($a){
        $this->callMethod($a, $this->_Allowed_Starships, 'Starships\Starships');
    }

}