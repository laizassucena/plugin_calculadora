<?php

/**
* Plugin Name: Calculadora ETEC
* Description: Com a Calculadora ETEC você pode realizar cálculos simples e poupar seu tempo
* Version: 1.0
* Author: Laiz e Stewart
*/

//principal função usada no plugin
function calcular( $atts ){
    return '<center><iframe src="'.plugins_url().'/plugin_calculadora/index.php" frameborder="0" width="400px" height="450px"></iframe></center>';
}
add_shortcode('calculadora', 'calcular');
?>