//AÑADIR Y ELIMINAR CONTACTOS A UN ARREGLO QUE CONTIENE UN OBJETO
let agenda = [
  {
    id: 1,
    nombre: "Jose Miguel Caceres  Giraldo",
  },
  {
    id: 2,
    nombre: "Juan David Caceres",
  },
  {
    id: 3,
    nombre: "Ana Maria Caceres",
  },
  {
    id: 4,
    nombre: "Diana Maria Giraldo",
  },
  {
    id: 5,
    nombre: "Jairo Caceres",
  },
];

//**//MOSTRAMOS LA LISTA DE CONTACTOS ORIGINAL
console.log(agenda);

//**//FUNCION AÑADIR CONTACTO
let añadirContacto = (agenda, Contacto) => {
  agenda.push(Contacto);
};

//**//AÑADIMOS NUEVO CONTACTO, LLAMAMOS LA LISTA DE CONTACTOS, Y AGREGAMOS EL NUEVO CONTACTO.
let Contacto = { id: 6, nombre: "Lizzy Antonia Caceres" };
añadirContacto(agenda, Contacto);
console.log(agenda);

//FUNCION BORRAR CONTACTO DE UN OBJETO
let borrarContacto = (id) => {
  const indice = agenda.findIndex((contacto) => contacto.id === id);
  if (indice !== -1) {
    agenda.splice(indice, 1);
    console.log(`El id numero '${id}' ha sido eliminado.`);
  } else {
    console.log(`No se encontro un contacto con ese numero de id.`);
  }
};

borrarContacto(3);
borrarContacto(9);

console.log(agenda);

//-------------------------------------------------------------------------------------------//
//**// EJERCICIO BORRAR Y AGREGAR CONTACTOS A UN ARREGLO CON UN SOLO PARAMETRO.
//let listaContactos = [
//   "Jose Miguel Caceres  Giraldo",
//   "Juan David Caceres",
//   "Ana Maria Caceres",
//   "Diana Maria Giraldo",
//   "Jairo Caceres",
// ];

//**// FUNCION AÑADIR CONTACTO A UN ARREGLO
// let añadirContacto = (Contacto) => {
//   Contacto = listaContactos.push(Contacto);
//   nuevoContacto = Contacto;
//   return nuevoContacto;
// };

//**// FUNCION BORRAR CONTACTO A UN ARREGLO
// let borrarContacto = (lista, Contacto) => {
//   const indice = lista.indexOf(Contacto);
//   if (indice !== -1) {
//     lista.splice(indice, 1);
//     console.log(`El contacto ${Contacto} ha sido eliminado.`);
//   } else {
//     console.log(`El contacto ${Contacto} no se ha encontrado.`);
//   }
// };
// // MOSTRAR EN CONSOLA LA LISTA DE CONTACTOS ORIGINAL
// console.log(listaContactos);

//**// LLAMAMOS A LA FUNCION AÑADIR CONTACTO Y SE MUESTRA EN CONSOLA LA LISTA DE CONTACTOS, CON EL NUEVO CONTACTO AÑADIDO
// añadirContacto("Lizzy Antonia");
// console.log(listaContactos);

//**// LLAMAMOS A LA FUNCION DE BORRAR CONTACTO Y SE MUESTRA EN CONSOLA LA LISTA DE CONTACTOS ACTUALIZADA, SIN EL CONTACTO QUE ELIMINAMOS
// borrarContacto(listaContactos, "Juan David Caceres");
// console.log(listaContactos);

//-------------------------------------------------------------------------------------------//
