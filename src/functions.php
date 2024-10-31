<?php

function renderTemplate($templateFile, $args) {
    $content = '';
    if (!file_exists($templateFile)) {
        print_r('TEMPLATE FILE ' +  $templateFile + 'NOT FOUND');
        return $content;
    }

    foreach ($args as $key => $value) {
        ${$key} = $value;
    }
    //extract($args);

    ob_start(); //включили буферизациюю вывода print
    $content = require($templateFile);
    $content = ob_get_clean(); //записали содержимое файла

    return $content;
}


?>
