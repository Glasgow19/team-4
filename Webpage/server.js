var app = require('http').createServer()
var io = require('socket.io')(app)
var PORT = 8000
app.listen(PORT)

io.on('connection', function(socket){

	socket.on('send_img', async function(data){
		// console.log(data)
		// img_ocr(data[1].src)
		if(data.length>0){
			// var img_content = await img_ocr('https://www.visitscotland.com/cms-images/attractions/st-andrews-cathedral-blue-sky-clouds')
			// data[1].alt = img_content
			for(var x = 0; x < data.length; x++){
				var img_content = await img_ocr(data[x].src)
				data[x].alt = img_content
			}
			// console.log(data)
			socket.emit('update_alt', data)
		}

	})


}) 

async function img_ocr(data){
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
	const vision = require('@google-cloud/vision');
	// Creates a client
	const client = new vision.ImageAnnotatorClient();

	/**
	 * TODO(developer): Uncomment the following line before running the sample.
	 */
	const fileName = data;

	// Performs landmark detection on the local file
	const [result] = await client.landmarkDetection(fileName);
	const landmarks = result.landmarkAnnotations;
	// console.log('Landmarks:');
	var list = ''
	// landmarks.forEach(landmark => console.log(landmark));

	// console.log(landmarks)

	for(var x =0; x<landmarks.length; x++){
		list+=landmarks[x].description
		list+=','
	}

	return list

}