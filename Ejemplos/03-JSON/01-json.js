/* **********     Curso JavaScript: 59. JSON - #jonmircha     ********** */
  /* https://www.json.org/json-es.html */
  /* https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/JSON */
const json = {
  cadena: "Jon",
  numero: 35,
  booleano: true,
  arreglo: ["correr", "programar", "cocinar"],
  objeto: {
    twitter: "@jonmircha",
    email: "jonmircha@gmail.com"
  },
  nulo: null
}

console.log(json);

console.log(JSON);

//// -> JSON.parse() lo que hace es convertir una cadena JSON en un objeto o valor válido en JavaScript.
console.log("*** JSON.parse ***");
console.log(JSON.parse("{}"));
console.log(JSON.parse("[1,2,3]"));
console.log(JSON.parse("true"));
console.log(JSON.parse("false"));
console.log(JSON.parse("19"));
console.log(JSON.parse('"Hola Mundo"'));
console.log(JSON.parse("null"));
//console.log(JSON.parse("undefined"));
console.log(JSON.parse('{ "x": 2, "y": 3 }'));

///// -> Ejemplo de JSON.parse() tomando una función como segundo argumento. En el siguiente ejemplo, los valores del objeto se convierten en mayúsculas en el objeto
// devuelto del método parse
const user = {
  name: 'Sammy',
  email: 'Sammy@domain.com',
  plan: 'Pro'
};

const userStr = JSON.stringify(user);
console.log('userstr' + userStr);

JSON.parse(userStr, (key, value) => {
  if (typeof value === 'string') {
    return value.toUpperCase();
  }
  return console.log(value);
});


//// -> JSON.stringify() toma un array y lo convierte a un String
console.log("*** JSON.stringify ***");
console.log(JSON.stringify({}));
console.log(JSON.stringify([1, 2, 3]));
console.log(JSON.stringify(true));
console.log(JSON.stringify(false));
console.log(JSON.stringify(19));
console.log(JSON.stringify("Hola Mundo"));
console.log(JSON.stringify(null));
console.log(JSON.stringify(undefined));
console.log(JSON.stringify({ x: 2, y: 3 }));

console.log("*** Ejemplo JSON ***");
console.log(JSON.stringify(json));
console.log(JSON.parse('{"cadena": "Jon","numero": 35, "booleano": true,"arreglo": ["correr","programar","cocinar"],"objeto": {"twitter": "@jonmircha","email": "jonmircha@gmail.com"},"nulo": null}'));

//JSON.stringify() puede tomar dos argumentos adicionales: el primero es una función replacer y el segundo es un valor String o Number que se utiliza como un spacio en
//la cadena que se devuelve.

//La función de reemplazo se puede usar para filtrar los valores, ya que cualquier valor devuelto como undefined estará fuera de la cadena devuelta:
const user2 = {
  id: 229,
  name: 'Sammy',
  email: 'Sammy@domain.com'
};

function replacer(key, value) {
  console.log(typeof value);
  if (key === 'email') {
    return undefined;
  }
  return value;
}

const userStr2 = JSON.stringify(user2, replacer);
// "{"id":229,"name":"Sammy"}"
console.log(userStr2);



//// -> Y un ejemplo con un argumento space aprobado:
const user3 = {
  name: 'Sammy',
  email: 'Sammy@domain.com',
  plan: 'Pro'
};

const userStr3 = JSON.stringify(user3, null, '...');
console.log(userStr3);
// "{
// ..."name": "Sammy",
// ..."email": "Sammy@domain.com",
// ..."plan": "Pro"
// }"