console.log("Estoy haciendo una aplicacion de la NASA")
import fetch from "node-fetch"
var urlNASA = "https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key="
const key = "B4M0OPihTC0U7OFZcfj6PTizGQlDsl21351VamA7"

//EJEMPLO DE METERORITOS PELIGROSOS

var respuestaAPI= await fetch(urlNASA+key)
var respuestaAPIjson = await respuestaAPI.json()
//console.log(respuestaAPIjson)
var jsonObjectos = respuestaAPIjson.near_earth_objects
//console.log(jsonObjectos)

var listaLlaves = Object.keys(jsonObjectos)
console.log(listaLlaves)
listaLlaves.forEach((elemento,indice,arreglo)=>{
	let listaFecha = jsonObjectos[elemento]
        listaFecha.forEach((el,ind,arr)=>{
		let peligroso = el.is_potentially_hazardous_asteroid
		if(peligroso){
				console.log("El meteorito "+ el.name+" con magnitud absoluta de "+el.absolute_magnitude_h+" es potencialmente peligroso para la Tierra")
		}else{
			console.log("El meteorito "+ el.name+" no representa mayor amenaza")
			}

		})

})
