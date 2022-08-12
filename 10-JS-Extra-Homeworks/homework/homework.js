// No cambies los nombres de las funciones.

const { arrayReplaceAt } = require("markdown-it/lib/common/utils");

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

/* return Object.entries(objeto);
  }
 */
var arreglo = [];
for (const propiedad in objeto) {
  arreglo.push([propiedad, objeto[propiedad]])
}
return arreglo;
}




function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

// The string
var objeto = {};


for (var i = 0; i < string.length; i++) {
  objeto[string[i]] = (objeto[string[i]] || 0) + 1;
}

return objeto;

} 


  



function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  
/*   var capitalCase = []; 
  var lowerCase = [];

  for (var i = 0; i < s.length; i++) {
      
          if (s[i] === s[i].toUpperCase()){              
              capitalCase.push(s[i]);
            }  else {
              lowerCase.push(s[i])
            }

          } return capitalCase.concat(lowerCase).join('')
          
        } */

        var mayusculas = "";
        var minusculas = "";

        for (var i = 0; i < s.length; i++) {
          if (s[i] === s[i].toUpperCase()) {
            mayusculas = mayusculas + s[i];
          } else  { 
            minusculas = minusculas + s[i];
          }
          }
          return mayusculas + minusculas
        }
        


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

 /* return str.split('').reverse().join('').split(' ').reverse().join(' ')

}

 */
    /* var fraseInvertida = str.split(' ').map(function(palabra){
      var cadaPalabra = '';
      for (var i = palabra.length -1; i >= 0; i --) {
          cadaPalabra = cadaPalabra + palabra [i]
      }
      return cadaPalabra;
    }).join(' ') 
  
    return fraseInvertida;
  } */

  var fraseInvertida = str.split(' ').map(function(palabra){
    return palabra.split('').reverse().join('')
  }).join(' ') 

return fraseInvertida;
}



function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

/* var numero = numero.toString()
for (var i = 0; i < numero.length; i++) {
  if (numero [i] !== numero[numero.length - 1 -i]) {
    return 'No es capicua'
  }
}
return 'Es capicua'
  }

     */

  /* var numero = numero.toString()
  for (var i = 0, j = numero.length -1;
    i <= j; i++, j--) {
      if (numero[i] !== numero [j]) {
        return 'No es capicua'

      }
    }
      return 'Es capicua'
  }
 */

  var numeroStr = numero.toString();
  var numeroAlreves = numeroStr.split('').reverse().join('');
  if (numeroStr === numeroAlreves) {
    return 'Es capicua' 
  } else {
    return 'No es capicua';
  }

  }






function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

/* 
  return cadena = cadena.replace(/[abc]/gi, '');

} */

var cadenaSinABC = '';
for (var i = 0; i < cadena.length; i++){
 
  if (cadena[i] === 'a'|| cadena[i] === 'b'|| cadena[i] === 'c' ){
    continue;
  } else {
    cadenaSinABC = cadenaSinABC + cadena[i];
  }
}
 return cadenaSinABC;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

/* return arr.sort((x, y) => x.length - y.length);
} */

var recorrido = true;
while (recorrido) {
  recorrido = false;
for (var i = 0; i < arr.length -1; i++) {
  if(arr[i].length > arr[i + 1].length){
    var palabraLarga = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = palabraLarga;
    recorrido = true;
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
   
  
/*   var newArreglo = arreglo1.filter((elemento => arreglo2.includes(elemento)));
    return newArreglo;
}
  

 */

 var arregloDefinitivo = [];

  for (var i = 0; i < arreglo1.length; i++) {
    for (var j = 0; j < arreglo2.length; j++) {
      if (arreglo1[i] === arreglo2[j] ) {
        arregloDefinitivo.push(arreglo1[i]);
      }
    }
  }


 return arregloDefinitivo
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

