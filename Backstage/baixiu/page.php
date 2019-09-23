<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" href="/static/assets/vendors/bootstrap/css/bootstrap.css">
</head>
<body>
	<ul id="pagination-demo" class="pagination-sm"></ul>
	<script src="/static/assets/vendors/jquery/jquery.js"></script>
	<script src="/static/assets/vendors/twbs-pagination/jquery.twbsPagination.js"></script>
	<script>
		function pagination (totalPages) {
			$('#pagination-demo').twbsPagination('destroy');
			$('#pagination-demo').twbsPagination({
				totalPages: totalPages,
				visiblePages: 7,
				onPageClick: function (event, page) {
					$('#page-content').text('Page' + page);
				}
			})
		}

		$('#pagination-demo').twbsPagination({
			totalPages: 5,
			visiblePages: 7,
			onPageClick: function (event, page) {
				$('#page-content').text('Page' + page);
			}
		})

		// pagination(20);

	</script>
</body>
</html>