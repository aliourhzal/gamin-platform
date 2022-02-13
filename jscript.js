var logo = document.getElementById("eye");
var eye = document.getElementById("effect");
var left = 0;
var parent = 0;
var child = 0;
var cofc = 0;
/*var index = 0;*/
window.addEventListener('scroll', function(){
	var portion = window.scrollY;
	start = -1000 + 1.052 * portion
	eye.style.boxShadow = "0 0 90px 30px black inset," + start + "px 0 10px 80px white inset, " + start + "px 0 5px 150px #b82c2c inset";
});

	setInterval(function(){

		parent = setInterval(function()
		{
			left -= 1;
			eye.style.boxShadow = "0 0 90px 30px black inset," + left + "px 0 10px 80px white inset, " + left + "px 0 5px 150px #b82c2c inset";
			if (left < -40)
			{
				setTimeout(function()
				{
					child = setInterval(function()
					{
						left += 2;
						eye.style.boxShadow = "0 0 90px 30px black inset," + left + "px 0 10px 80px white inset, " + left + "px 0 5px 150px #b82c2c inset";
						if (left > 40)
						{
							setTimeout(function(){
								cofc = setInterval(function(){
									left -= 1;
									eye.style.boxShadow = "0 0 90px 30px black inset,"+ left + "px 0 10px 80px white inset, " + left + "px 0 5px 150px #b82c2c inset";
									if(left == 0)
										clearInterval(cofc);
								}, 10)
							}, 1000);
							clearInterval(child);
						}
					}, 10);
				}, 1000);
				clearInterval(parent);
			}
		}, 10);
	}, 8000)


/*if (left == -51)
{
	console.log("hello");
	setTimeout(function(){

		child = setInterval(function()
		{
			left += 1;
			eye.style.boxShadow = "0 0 70px 50px #ff2929 inset, " + left + "px 0 20px 110px #ff5454 inset,0 0 50px #ff2929";
			if (left > 50)
			{
				clearInterval(child);
			}
		}, 10);
	}, 2000)
}*/

 