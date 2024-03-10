const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

console.log("a)  Las pizzas que tengan un id impar.");

for (let i = 0; i < pizzas.length; i++) {
  if (pizzas[i].id % 2 !== 0) {
    console.log(pizzas[i].nombre, "con id:", pizzas[i].id);
  }
}
console.log("----------------------------------------------------------");
console.log("b) Responder: ¿Hay alguna pizza que valga menos de $600?");
for (let i = 0; i < pizzas.length; i++) {
  if (pizzas[i].precio < 600) {
    console.log(
      "Si, hay pizzas que valga - de  $600 y es:",
      pizzas[i].nombre,
      "con el precio:",
      pizzas[i].precio
    );
  }
}

console.log("----------------------------------------------------------");
console.log("c) El nombre de cada pizza con su respectivo precio.");
for (let i = 0; i < pizzas.length; i++) {
  console.log(pizzas[i].nombre, "Cuesta:$", pizzas[i].precio);
}

console.log("----------------------------------------------------------");
console.log(
  "d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene una propiedad ingredientes cuyo valor es un array con ingredientes."
);
//console.log("pizzas", pizzas);
for (let i = 0; i < pizzas.length; i++) {
  console.log(pizzas[i].nombre);
  for (let j = 0; j < pizzas[i].ingredientes.length; j++) {
    console.log("---ingrediente:", pizzas[i].ingredientes[j]);
  }
}
