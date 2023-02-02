//var colors = require("colors")
import pkg from "colors"
const {colors} = pkg
//import {Quidel}
//var Quidel = require("./quidel.js")
import {Rolando} from "./rolando.js"
console.log("esta es una clase de NPM")
var alumnos = {
		nombre:"Martin",
		edad:18,
		ocupacion:"Estudiante",
		soltero:false,
}

console.log(alumnos.nombre)
console.log("Rolando participa mucho")

//var colors = require("colors")

function Restar(x,y){
	let resta = x-y
	console.log("La resta es: ".green+resta)
	console.log("Mis alumnos estan muy callados".red)
}
function generarNumero(abajo,arriba){
	var numeroAleatorio = Math.random()*arriba
	return numeroAleatorio

}
function llamaDosFunciones(){
	let a = generarNumero(0,50)
	let b = generarNumero(0,25)
	Restar(a,b)

}
Restar(10,25)
llamaDosFunciones()
llamaDosFunciones()
llamaDosFunciones()

var calificaciones = {
	"Natalia":6,
	"Quidel":9,
	"Rolando":7,
	"Cristobal":5
}

Object.keys(calificaciones).forEach((elemento,indice,arreglo)=>{
	if(calificaciones[elemento]<7){
		console.log("El estudiante "+elemento.yellow+` saco ${calificaciones[elemento]}`)
	}else{
		console.log("El estudiante "+elemento.red+ " es aplicado")
	}
}


)
//console.log(Quidel.red)
console.log(Rolando)
