<?php
require_once './functions.php';

$page_content = renderTemplate('./templates/pages/index.php', []);
$title = 'Главная';

$layout_content = renderTemplate('./templates/layout.php',
    [
        'title' => $title,
        'content' => $page_content,
		'script' => 'index',
    ]
);
print($layout_content);

?>
