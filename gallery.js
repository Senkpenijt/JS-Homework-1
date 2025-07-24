function upDate(hoverPic){
    var divimg = document.getElementById("image");
    divimg.style.backgroundImage = "url('" +hoverPic.src + "')";
    divimg.innerHTML = hoverPic.alt;  
   console.log("Event triggered: " + hoverPic.alt + " hoverPic.src");

}

	function unDo(){
    var divimg = document.getElementById("image");
    divimg.style.backgroundImage = "none";
    divimg.innerHTML = "Click on an image to display here.";
	}
