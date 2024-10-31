<?php
require_once './functions.php';

$page_content = renderTemplate('./templates/pages/chat.php', []);
$title = 'Чат';

$layout_content = renderTemplate('./templates/layout.php',
    [
        'title' => $title,
        'content' => $page_content,
		'script' => 'chat'
    ]
);
print($layout_content);

?>
