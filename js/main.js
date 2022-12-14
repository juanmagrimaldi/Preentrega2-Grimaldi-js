//  1- Hacer array catálogo y array carrito (vacío). █
const catalogo = [
    {id:1, nombre:"vaso", precio: 400},
    {id:2, nombre:"taza", precio: 600},
    {id:3, nombre:"jarra", precio: 2500},
    {id:4, nombre:"florero", precio: 4000},
    {id:5, nombre:"cuchara", precio: 200},
    {id:6, nombre:"tenedor", precio: 200}
]
const carrito = [];

//  2- Declaro una variable producto que será el producto seleccionado en catálogo y luego pusheado al carrito.█
let producto;
let lecturaObjetos;

let confirmarProducto = true;

//  5- Hacer una función que retorne un catalogo.find (búsqueda) de cada objeto. █
const buscarCatalogo = (id)=>{
    return catalogo.find(item => item.id === id);
}

//  9- Buclear con un While (los pasos 3-4-6-7-8) mientras el confirm sea true. █
while(confirmarProducto){
//  3- Mostrar array-catálogo en un parseInt-Prompt con un .map para que elijan según la id del producto. █
    lecturaObjetos = parseInt(prompt("Este es nuestro catálogo, ELEGÍ SEGÚN INDICE (por ejemplo: 1 para seleccionar vaso) : " + catalogo.map(item=> "\n" +item.id + " - " + item.nombre + " $" + item.precio + "\n").join(" - ")));
//  4- Una vez tenemos el número del cliente (dato agregado en lecturaObjetos) hacemos un condicional if-else. █
//  4- (a y b)- En el if ponemos si es 1,2,3,4,5 o 6 (son 6 objetos, entonces son 6 id) es válido, sino(else), alert("numero inválido"). █
    if(lecturaObjetos >= 1 && lecturaObjetos <= 6){
//  6- Hacer que la variable "producto" sea dicha función que usa la id del producto seleccionado en lecturaObjetos. █
        producto = buscarCatalogo(lecturaObjetos);
//  7- Preguntar si quiere seguir comprando con un confirm. █
        confirmarProducto = confirm("¿Deseas seguir comprando?");
    }else{
        alert("El número ingresado es inválido");
    }
//  8- Pushear al carrito aquellos productos que seleccionó el cliente. █
    carrito.push(producto);
}console.log(carrito);

//  10- Ya fuera del primer While, hacer que la variable confirmarProducto sea true para utilizarla en un nuevo búcle, uno que me sirva para que el cliente quite productos del array carrito tantas veces quiera. █ 
confirmarProducto = true;

let productoRemovido;

let lecturaProductos;

//  13- Hacer una función que busque el producto según id del carrito (ese número nos lo da lecturaProductos que lo reutilizamos en el segundo while, recordemos que la declaré fuera de los whiles). █
const buscarCarrito = (id)=>{
    return carrito.find(item => item.id === id);
}

let gastoTotal = 0;

//  11- Hacer el (segundo) búcle while con la condición confirmarProducto (=true). █
while(confirmarProducto){
//  12- Mostrar ese array carrito en un (parseInt-Prompt .map) para que el cliente quite aquellos productos que desee. █
    lecturaProductos = parseInt(prompt("Si deseas eliminar algún producto, escribe su índice: " + "\n" + "Tu carrito contiene: \n" + carrito.map(item=> "\n" +item.id + " - " + item.nombre + " $" + item.precio + "\n").join(" - ")));
    if(lecturaProductos>=1 && lecturaProductos <= 6){
        productoRemovido = buscarCarrito(lecturaProductos);
//  14- Remover dicho producto encontrado en buscarCarrito con carrito.splice(a la id del producto (que nos da lecturaProductos) le restamos uno y tenemos su posición). █
        carrito.splice(((productoRemovido.id)-1),1);
    }else{
        alert("El número ingresado es inválido");
    }
    confirmarProducto = confirm("¿Deseas seguir removiendo elementos de tu carrito?");
}console.log(carrito);

//  15- Con un bucle for hago una sumatoria de precios y con un alert le muestro al cliente agradecimientos y el gasto total de su compra. █
for(productos of carrito){
    gastoTotal += productos.precio;
}alert("Muchas Gracias por tu compra! Tu gasto total es: $" + gastoTotal);