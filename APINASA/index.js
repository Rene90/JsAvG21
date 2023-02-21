console.log("Estoy haciendo una aplicacion de la NASA")
const key = "B4M0OPihTC0U7OFZcfj6PTizGQlDsl21351VamA7"
/*import fetch from "node-fetch"
var urlNASA = "https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key="


//EJEMPLO DE METERORITOS PELIGROSOS

var respuestaAPI= await fetch(urlNASA+key)
var respuestaAPIjson = await respuestaAPI.json()
//console.log(respuestaAPIjson)
var jsonObjectos = respuestaAPIjson.near_earth_objects
//console.log(jsonObjectos)

var listaLlaves = Object.keys(jsonObjectos)
console.log(listaLlaves)*/
/*listaLlaves.forEach((elemento,indice,arreglo)=>{
	let listaFecha = jsonObjectos[elemento]
        listaFecha.forEach((el,ind,arr)=>{
		let peligroso = el.is_potentially_hazardous_asteroid
		let diametro= el.estimated_diameter.meters.estimated_diameter_min
		let diametro2 = el.estimated_diameter.meters.estimated_diameter_max
		let diamres =( diametro+diametro2)/2

		console.log("El diametro en metros del meteorito "+el.name+"es de "+diamres)
		if(peligroso){
				console.log("El meteorito "+ el.name+" con magnitud absoluta de "+el.absolute_magnitude_h+" es potencialmente peligroso para la Tierra")
		}else{
			console.log("El meteorito "+ el.name+" no representa mayor amenaza")
			}

		})

})
//EJEMPLO DE ENDPOINT DE MARTE

var url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key="
var respuestaMarte = await fetch(url+key)
var respMarjson = await respuestaMarte.json()
var listaFotos = respMarjson.photos
listaFotos.forEach(foto=>{
	console.log(foto.camera)
})*/
function fechaHoy(){
	var hoy = new Date()
	var dd =String(hoy.getDate()).padStart(2,'0')
	var mm =String(hoy.getMonth()+1).padStart(2,'0')
	var yyyy = hoy.getFullYear()
	hoy = yyyy+"-"+mm+"-"+dd
	return hoy
}


const marte = async(rov,cam,sol)=>{

	let fechaFoto = fechaHoy()
	var martianApi = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rov}/photos?sol=${sol}&camera=${cam}&api_key=${key}`
    var fotoDia = `https://api.nasa.gov/planetary/apod?start_date=${fechaFoto}&end_date=${fechaFoto}&api_key=${key}`
	const fotoDresult = await fetch(fotoDia)
	const fres = await fotoDresult.json()
	const resultadoMarte = await fetch(martianApi)
	const resultadoMarteJson = await resultadoMarte.json()
	let arregloFotos = resultadoMarteJson.photos
	let cartasDiv = document.getElementById("contenedorCartas")

	while(cartasDiv.firstChild){
		cartasDiv.removeChild(cartasDiv.firstChild)
	}
	if (arregloFotos.length ==0){
		cartasDiv.innerHTML = ` <div class="card  text-center col-sm-12 col-md-12 col-lg-12 justify-content-center" style="width: %100;">
		<img class="card-img-top" src=${fres[0].url} alt=${fres[0].id}>
		<div class="card-body">
		  <h5 class="card-title">${fres[0].title}</h5>
		  <p class="card-text">${fres[0].explanation}</p>
		  
		
		</div>
	  </div>
		
		`


	}
	else{
		arregloFotos.forEach(foto=>{
			cartasDiv.innerHTML += ` <div class="card mb-2 col-sm-12 col-md-6 col-lg-4" style="width: 18rem;">
			<img class="card-img-top" src=${foto.img_src} alt=${foto.id}>
			<div class="card-body">
			  <h5 class="card-title">${foto.rover.name}</h5>
			  <p class="card-text">${foto.camera.full_name}</p>
			  <p class="card-text">Foto tomada el dia :${foto.earth_date}</p>
			
			</div>
		  </div>
			
			`
	
	
		})

	}
	


}



function traerDatos(){

	let rover = document.getElementById("roverid")
	let solar =document.getElementById("solarid") 
	let camara = document.getElementById("camaraid")
	
	let roverTexto = rover.value
	let camaraTexto = camara.value
	let solarTexto = solar.value
	console.log(roverTexto, camaraTexto, solarTexto)
	marte(roverTexto,camaraTexto,String(solarTexto))
}





