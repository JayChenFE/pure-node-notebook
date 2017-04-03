// alert('hello');

setTimeout(function() {

	$.ajax({
		url: '/user.action',
		method: 'get',
		// success: function(data) {

		// 	// console.log(data);
		// 	$('#root').html(data);

		// },
		success: function(data) {

			// var listStr = JSON.parse(data).map(function(ele) {
				var listStr = data.map(function(ele) {
				return '<li>' + ele + '</li>';
			}).join('');

			$('#root').html(listStr);
		},
		error: function(error) {
			console.log(error);
		}
	});


	$.ajax({
		url: '/list.action',
		method: 'get',
		// success: function(data) {

		// 	// console.log(data);
		// 	$('#root').html(data);

		// },
		success: function(data) {

			// var listStr = JSON.parse(data).map(function(ele) {
				var listStr = data.map(function(ele) {
				return '<li>' + ele + '</li>';
			}).join('');

			$('#shop').html(listStr);
		},
		error: function(error) {
			console.log(error);
		}
	});


}, 1000);