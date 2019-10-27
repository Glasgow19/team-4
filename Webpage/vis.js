window.onload = function(e){     
	$('.vis').click(function(e) {
		var img_obj_list = document.getElementsByTagName('img');
		// x= img_list
		var img_list = arrange_img(img_obj_list)
		var socket = io("ws://localhost:8000/");
		socket.emit('send_img', img_list);
		
		socket.on('update_alt', function(data){
			// console.log(data)
			refresh_img(img_obj_list,data)
			alert("Image has been analysed");
		});
	})

}

function arrange_img(data){
	var list = []
	for(var x = 0; x < data.length; x ++){
		var dist = {
			'id': x,
			'src': data[x].src,
			'alt': data[x].alt
		}
		list.push(dist)
		// console.log(list.length)
	}
	return list 
}

function refresh_img(html_obj, data){
	for(var x = 0; x< html_obj.length; x++){
		html_obj[x].alt = data[x].alt
	}

	console.log('alt is updated')
}