
### OBJETOS

Es un contenedor de datos que guarda informacion sobre una sola cosa y para establecerlo se deben usar llaves {}.
Los objetos tienen dos partes importantes la palabra clave y el valor que se le asigna. La sintaxis es "clave:valor", el objeto puede tener muchos pares de "clave:valor" y deben estar separados por medio de coma. ",". Dentro de los valores que podemos asignar a la palabra clave estan los numeros, booleanos, strings, funciones, arrays o incluso otro objeto. 


### PROPIEDADES

Es la forma de llamar a los valores y se realiza con un punto y la palabra clave. Hace referencia a la palabra clave.

### METODOS

Son las funciones guardadas en un objeto por ejemplo ".length; .push; .pop; etc" 
Para llamar estos metodos en el objeto, debemos usar la notación de puntos y los parentesis al final. 
Por ejemplo: unObjeto.nombreDeLAFuncion();

### BUCLE FOR...IN

Es el bucle que se usa para iterar la información dentro de los objetos. Es diferente al que usamos en el array porque ese maneja un indice numerico. 

Por ejemplo:


const estudiante = {
nombre: 'Erika',
edad: 35,
curso: 'prep'
}

for (let clave in estudiante) {
console.log(clave);
console.log(estudiante[clave]);
}



### NOTACION DE PUNTOS VS NOTACIÓN DE CORCHETES

Sirven para llamar o crear valores. La notación de punto sirve para establecer los metodos. La notación de corchetes es necesario para introducir la información que queremos que se guarde en el objeto.

Por ejemplo:

const estudiante = {
nombre: 'Erika',
edad: 35,
curso: 'prep',
}
