alert ('bienvenido a la forja don benja')
var espadamadera = 2
var espadapalo =1
var espadapiedra =2
var madera = prompt ('cuanta madera tienes?')
var piedra = prompt (' cuanta piedra tienes?')
var palos = prompt ('cuantos palos tienes?')
var totalmadera = parseInt(madera)/parseInt(espadamadera)
var totalpalos = parseInt(palos)/parseInt(espadapalo)
var totalpiedra = parseInt(piedra)/parseInt(espadapiedra)
if (totalmadera < totalpalos ){
    alert ('la cantidad de espadas de madera que puedes hacer es '+totalmadera) 
    totalpalos = parseInt(totalpalos)-parseInt(totalmadera)

}
else {
    alert ('la cantidad de espadas de madera que puedes hacer es '+totalpalos)
}
if (totalpiedra < totalpalos)
alert ('la cantidad de espadas de piedra que puedes hacer es '+totalpiedra)
else 
alert ('la cantidad de espadas de piedra que puedes hacer es '+totalpalos)
