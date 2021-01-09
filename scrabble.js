var palabras = [
    'Benja',
    'Paco',
    'Karen',
    'Angel',
    'Angelita',
    'Alma',
    'Chelo',
    'Balboa'
]

var longitud = prompt('Dame el numero de letras:')
var termina = prompt('con que letra termina:')
var comienza = prompt('con que letra comienza:')
for (var i=0;i<palabras.length;i++){
    if (palabras[i].length == longitud){
        if (palabras[i].substr(palabras[i].length-1,1).toUpperCase() == termina.toUpperCase())
            if (palabras[i].substr(0,1).toUpperCase() == comienza.toUpperCase())
                alert(palabras[i]);
    }
}