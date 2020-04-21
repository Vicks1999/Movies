
var newmovies=['image0.jpg','image1.jpg','image2.jpg','image3.jpg','image4.jpg','image5.jpg'];
var upcomingmovies=['img0.jpg','img1.jpg','img2.jpg','img3.jpg','img4.jpg','img5.jpg'];

var toper=['image2.jpg','img1.jpg','image5.jpg','img2.jpg','image1.jpg','img3.jpg'];
var squares=document.querySelectorAll(".square");

function movies(){
for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundImage = "url("+ newmovies[i] + ")";		
	}
}
movies();

var rgbdisplay=document.getElementById("rgbdisplay");
var newe=document.querySelector("#newe");
var upcoming=document.querySelector("#upcoming");
var topers=document.querySelector("#toper");

upcoming.addEventListener("click",function(){
for(var i=0;i<squares.length;i++)
{
		squares[i].style.backgroundImage = "url("+ upcomingmovies[i] + ")";	
		squares[i].style.display="block";	
}
rgbdisplay.textContent='upcoming movies';
});

newe.addEventListener("click",function(){ 
	
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundImage = "url("+ newmovies[i] + ")";	
	}	
	rgbdisplay.textContent='New Movies';
});

topers.addEventListener("click",function(){ 
	
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundImage = "url("+ toper[i] + ")";	
	}	
	rgbdisplay.textContent='Top Rated';
});


