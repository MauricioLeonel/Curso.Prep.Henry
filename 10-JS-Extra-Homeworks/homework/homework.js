// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  matriz = [];
  for(clave in objeto){
    matriz.push([clave,objeto[clave]]);
  }

  return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var contador = 0;
  var obj={};
  for(var i = 0; i < string.length; i++){
    for(var x = 0; x < string.length; x++){
      if(string[i] === string[x]){
        contador += 1;
      }
    }

    obj[string[i]] = contador;
    contador = 0;

  }
  //console.log(obj)
  return obj;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  var mayus = '';
  var minus = '';

  for(var i = 0; i < s.length; i++){
    if(s[i] === s[i].toUpperCase()){
      mayus += s[i];
    }else{
      minus += s[i]; 
    }
  }

  return mayus+minus;
  
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var nuevaCadena ='';
  var cadenasplit='';
  function reversion(cadena){
    //recorro cadana
    for(var i = 0; i < cadena.length; i++){
      if(cadena[i] !== ' '){
        cadenasplit += cadena[i]; 
      }else{
        var cadena2split = cadenasplit.split('');
        var cadenareverse = cadena2split.reverse();
        nuevaCadena += cadenareverse.join('') + cadena[i];
        cadenasplit = '';
      }
    }
    var cadena2split = cadenasplit.split('');
    var cadenareverse = cadena2split.reverse();
    nuevaCadena += cadenareverse.join('')
    return nuevaCadena;
  }

  return reversion(str);
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var numero2 = numero.toString();
  var numeroSplit = numero2.split('');
  var numeroReverse = numeroSplit.reverse();
  var numeroCapi = numeroReverse.join('');

  if(numero2 === numeroCapi){
    return 'Es capicua';
  }else{
    return 'No es capicua';
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  function borrar(cadena){
    /*
    var cadenaNueva = '';
    cadenaNueva = cadena.replace('a','')
    cadenaNueva = cadenaNueva.replace('b','')
    cadenaNueva = cadenaNueva.replace('c','')

    return cadenaNueva;*/

    //alternativa
    var cadenaNueva='';
    for(var i = 0; i < cadena.length; i++){
      if(cadena[i] !== 'a'&& cadena[i] !== 'b' && cadena[i] !== 'c'){
        cadenaNueva+=cadena[i];
      }
    }

    return cadenaNueva;
  }

  return borrar(cadena);
  
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  for(var i = 0;i < arr.length-1; i++){
    for(var x = i+1; x < arr.length ; x++){
      if(arr[i].length > arr[x].length){
        var elemento = arr[i];
        arr[i] = arr[x];
        arr[x] = elemento;
      }
    }
  }

  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

  var nuevoArreglo= [];
  nuevoArreglo = arreglo1.filter((el)=>{
    for(var i =0; i<arreglo2.length;i++){
      if(el === arreglo2[i]){
        return el;
        break;
      }
    }
  })

  return nuevoArreglo;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

