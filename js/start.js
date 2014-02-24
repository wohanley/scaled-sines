window.onload = function () {
	
	var canvas = document.getElementById("sines");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	
	var sineWave = function (canvas, n, scale) {
		
		var fullScale = n * scale;
			
		var context = canvas.getContext("2d");
		context.save();
		context.translate(0, canvas.height / 2);

		context.moveTo(0, 0);
		
		for (var i = 1; i < canvas.width; i++) {
			var currentSine = fullScale * Math.sin(fullScale / i);
			context.lineTo(i, currentSine);
			previousSine = currentSine;
		}
		
		context.strokeStyle = "#000";
		context.lineWidth = 1;
		context.stroke();
		
		context.restore();
	};
	
	for (var i = 1; i < 10; i++) {
		sineWave(canvas, i, 20);
	}
};