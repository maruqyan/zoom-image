var imgArr = ['images/1.jpeg','images/2.jpeg','images/3.jpeg','images/4.jpeg','images/5.jpeg',]

for(var i = 0; i < imgArr.length; i++){
	var img = $('<img/>');
	var li = 	$('<li/>').append(img);
	var src = img.attr('src', imgArr[i])
 	$('#list').append(li);
};


var img = $('ul li img');

img.click(function () {
	var src = $(this).attr('src');
	$('.parent img').attr('src', src);
})

$('input').mousemove(function () {
	var _this =  $(this).val();

	if (_this > 50) {
		window.requestAnimationFrame(function () {
			$('.parent img').css('width', _this);
			$('.parent img').css('height', _this);
  	});
	}

	if (_this < 50) {
		window.requestAnimationFrame(function () {
			$('.parent img').css({
				"margin-left": -_this
			});
			$('.parent img').css({
				"margin-top": -_this
			});
		});
	}

});
