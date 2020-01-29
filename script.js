function upDate(previewPic)
{
 
 		document.getElementById("image").style.backgroundImage = "url('"+previewPic.src+"')";
 		document.getElementById("image").style.backgroundRepeat = "no-repeat";
 		document.getElementById("image").style.fontSize = "30px";
 		document.getElementById("image").style.width = "200px";
 		document.getElementById("image").style.clear = "both";
 		document.getElementById("image").style.backgroundSize = "cover";
 		document.getElementById("image").style.color = "#ffff33";
 		document.getElementById("image").style.padding = "60px"
 		document.getElementById("image").innerHTML = previewPic.alt;
}

function unDo()
{    
   
    	document.getElementById("image").style.backgroundImage = "url('')";
  		document.getElementById("image").innerHTML = "Hover over an image below to display here.";
		
}