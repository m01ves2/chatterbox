<!DOCTYPE html>
<html class="page" lang="en">


<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?=$title ?></title>
	<link href="css/style.min.css" rel="stylesheet">
</head>

<body>
	<div class="page-wrapper">

		<?=require_once 'templates/header.php';?>

		<main class="main-content container">
			<?= $content ?>
		</main>

		<?=require_once 'templates/footer.php';?>
		<?=require_once 'templates/modal.php';?>
	</div>

	<script type="module" src="./js/<?=$script?>.min.js"></script>
</body>

</html>
