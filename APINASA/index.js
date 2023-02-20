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
function traerDatos(){

	let rover = document.getElementById("roverid")
	let roverTexto = rover.value
	console.log(roverTexto)
}





