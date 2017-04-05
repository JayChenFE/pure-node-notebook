// alert('hello');

setTimeout(function() {

	$.ajax({
		url: '/user.action',
		method: 'get',

		success: function(data) {

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
		method: 'post',
		contentType: 'application/json',
		// data:{
		// 	DoctorId:4,
		// 	DoctorName:"胡如根"
		// },
		data: JSON.stringify([
			"DoctorId: 4",
			"DoctorName: 胡如根"
		]),
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