//AÑADIR Y ELIMINAR CONTACTOS A UN ARREGLO QUE CONTIENE UN OBJETO
const agenda = {
  contactos: [
    {
      id: 5455,
      nombre: "Fernando",
      apellido: "Botero",
      telefono: "6545454124",
      ubicacion: {
        pais: "Colombia",
        ciudad: "Medellin",
        departamento: "Antioquia",
        direccion: "En medellin papà",
      },
    },
  ],
};

console.log(agenda);

//**//FUNCION AÑADIR CONTACTO
let añadirContacto = (agenda, Contacto) => {
  agenda.contactos.push(Contacto);
  console.log("Nuevo contacto añadido.");
};

//**//AÑADIMOS NUEVO CONTACTO, LLAMAMOS LA LISTA DE CONTACTOS, Y AGREGAMOS EL NUEVO CONTACTO.
let Contacto = {
  id: 102,
  nombre: "Robert",
  apellido: "De Niro",
  telefono: "44444444",
  ubicacion: {
    pais: "USA",
    ciudad: "Florida",
    departamento: "Orlando",
    direccion:
      "Al frente de la casa de Jhonny Deep, la que tiene una puerta de madera.",
  },
};
añadirContacto(agenda, Contacto);
console.log(agenda);
console.log(agenda.contactos[0].ubicacion);
console.log(agenda.contactos[1].ubicacion);

// FUNCION BORRAR CONTACTO DE UN OBJETO
let borrarContacto = (id) => {
  const indice = agenda.contactos.findIndex((contacto) => contacto.id === id);
  if (indice !== -1) {
    agenda.contactos.splice(indice, 1);
    console.log(`El id numero '${id}' ha sido eliminado.`);
  } else {
    console.log(`No se encontro un contacto con ese numero de id.`);
  }
};

console.log("------------------------------------------------");
borrarContacto(102);
borrarContacto(9);

console.log(agenda);
console.log(agenda.contactos[0].ubicacion);
