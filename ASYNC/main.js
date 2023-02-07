//Codigo sincrono, se ejecuta linea por linea 
import fetch from "node-fetch"
const urlPokemon = "https://pokeapi.co/api/v2/ability/1/"
console.log(1)
console.log(2)
console.log(3)

//Codigo asincrono, no lleva el orden de "linea por linea"

//console.log("UNO")
//setTimeout(()=>console.log("DOS"),4000)

//Hacer que espere a que ejecute funcion asincrona con await (NO FUNCIONA CON SET TIME OUT)
const rolando = async ()=>{
    setTimeout(async()=> await console.log("DOS"),4000)

}
//rolando() 


console.log("UNO")
const fet = async ()=>{// async es para indicar que existe una funcion asyncrona dentro de la funcion donde se puso
    var response = await fetch(urlPokemon)// await es para que una funcion asincrona se ejecute antes de pasar a la siguiente linea
    var responsej = await response.json()
    return responsej
}
//var response = await fetch(urlPokemon)
//var responsej = await response.json()
//console.log(responsej)
var rolresp = fet()
console.log(rolresp)

console.log("TRESS")

//EJEMPLO DE UNA CALLBACK FUNCTION, tambien vendria siendo codigo asincrono, porque no se ejecuta en lineas consecutivas

const terceraFuncion= ()=>{
    console.log("Esta es la tercera funcion")
}
const segundaFuncion= ()=>{
    terceraFuncion()
    console.log("Esta es la segunda funcion")
}
const primeraFuncion= ()=>{
    segundaFuncion()
    console.log("Esta es la primera funcion")
}
primeraFuncion()
//OTRA FORMA DE CALLBACK FUNCTION  ,, se llama una funcion dentro de los parametros de otra funcion
function uno(){return 50}
function dos(){return 40}

const sumaFunciones=(funcionuno,funciondos)=>{
    const suma = funcionuno()+ funciondos()
    return suma
}
var numero = sumaFunciones(uno,dos)
console.log(numero)

//Simulacion de cuello de botella
console.log("Rolando")
setTimeout(()=>{return console.log("Rene")},1000)
for(let i=0;i<9999999999; i++);

console.log("Cristian")



