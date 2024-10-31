<?php
require_once './functions.php';

$page_content = renderTemplate('./templates/pages/about.php', []);
$title = 'О нас';

$layout_content = renderTemplate('./templates/layout.php',
    [
        'title' => $title,
        'content' => $page_content,
    ]
);
print($layout_content);

?>
