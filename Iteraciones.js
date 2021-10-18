let myFavoriteHero="Hulk";
let x=50;
let h=5;
let y=10;
let z= x+y;
console.log(z);

//1.1 Dado el siguiente javascript, cambia el valor de la propiedad age a 25.
const character = {
    name: 'Jack Sparrow', 
    age: 10};

character[age]= 25;



//1.2 Declara 3 variables con los nombres y valores siguientes
let firstName= "Jon";
let lastName= "Snoww";
let age= 24;
//Muestralos por consola de esta forma:'Soy Jon Snow, tengo 24 años y me gustan los lobos.'
let menssage= "Soy " + firstName +" "+ lastName+ ", tento " + age + " años y me gustan los lobos.";
console.log(menssage);

//1.3 Dado el siguiente javascript, imprime con un console.log la suma del precio de ambos juguetes.
const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};

const priceBuss= 19;
const priceRallo= 29;
const priceTotal= priceBuss + priceRallo;
console.log(priceTotal);

//1.4 Dado el siguiente javascript, actualiza el valor de la variable globalBasePrice a 25000 y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad basePrice más el valor de la variable globalBasePrice.
let globalBasePrice = 10000;
const car1 = {
    name: 'BMW m&m', 
    basePrice: 50000, 
    finalPrice: 60000};
const car2 = {
    name: 'Chevrolet Corbina', 
    basePrice: 70000, 
    finalPrice: 80000};

let newGlobalBasePrice= globalBasePrice + 15000;

car1["basePrice"]= 50000 + newGlobalBasePrice;
car2["basePrice"]= 70000 + newGlobalBasePrice;

console.log(car1["basePrice"]);
console.log(car2["basePrice"]);

//1.1 Multiplica 10 por 5 y muestra el resultado mediante alert.

const x= 10;
const y= 5;
alert(x*y);

//1.2 Divide 10 por 2 y muestra el resultado en un alert.

const a= 10;
const b= 2;
alert(a/b);

//1.3 Muestra mediante un alert el resto de dividir 15 por 9.

const i= 15;
const j= 9;
alert(i % j);

//1.4 Usa el correcto operador de asignación que resultará en x = 15, teniendo dos variables y = 10 y z = 5.

const y= 10;
const z= 5;
const x= y+z;
console.log(x); //la consola muestra 15

//1.5 Usa el correcto operador de asignación que resultará en x = 50,teniendo dos variables y = 10 y z = 5.

const y= 10;
const z= 5
const x = y*z;
console.log(x); // la consola muestra 50.