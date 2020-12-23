function Photo(){
	
	var photo = document.getElementById("indexPhoto");
	var hauteur = window.innerHeight;
	
	if (window.innerWidth < 1000){
		
		photo.setAttribute("height" , hauteur/2 );
		console.log("pour le tel")
		
	} else{
		
		photo.setAttribute("height" , hauteur);
		console.log("pour le PC")
		
	}
}

function galery(){
	var frame = document.getElementById("galeryframe");
	var hauteurW = window.innerHeight;
	var hauteurP = document.getElementById("infoGallery").offsetHeight;
	var hauteur = hauteurW-hauteurP-160
	
	frame.setAttribute("height", hauteur);
	console.log("redimenssion de iframe photostation")
}
