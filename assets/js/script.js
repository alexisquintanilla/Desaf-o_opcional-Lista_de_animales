//construccion de objeto
class Mascota {
    #nombreMascota
    #enfermedad
    constructor(nombreMascota, enfermedad) {
        this.#nombreMascota = nombreMascota
        this.#enfermedad = enfermedad
    }
    get getNombreMascota() {
        return this.#nombreMascota
    }
    get getEnfermedad() {
        return this.#enfermedad
    }
}
class Animal extends Mascota {
    #tipo
    constructor(nombreMascota, enfermedad, tipo) {
        super(nombreMascota, enfermedad)
        this.#tipo = tipo
    }
    get getTipo() {
        return this.#tipo
    }

}

class Propietario extends Animal {
    #propietario
    #telefono
    #direccion
    constructor(nombreMascota, enfermedad, tipo, propietario, telefono, direccion) {
        super(nombreMascota, enfermedad, tipo)
        this.#propietario = propietario
        this.#telefono = telefono
        this.#direccion = direccion
    }
    get getPropietario() {
        return this.#propietario
    }
    get getTelefono() {
        return this.#telefono
    }
    get getDireccion() {
        return this.#direccion
    }

}


// creacion de variables del DOM

const resultado = document.querySelector("#resultado")

const formulario = document.querySelector("#formulario")

// escuchar boton de formulario e imprimir datos de objeto

formulario.addEventListener("submit", (e) => {
    e.preventDefault()

    const propietario = document.querySelector("#propietario").value
    const telefono = document.querySelector("#telefono").value
    const direccion = document.querySelector("#direccion").value
    const nombreMascota = document.querySelector("#nombreMascota").value
    const tipo = document.querySelector("#tipo").value
    const enfermedad = document.querySelector("#enfermedad").value

    const nuevoCliente = new Propietario(nombreMascota, enfermedad, tipo, propietario, telefono, direccion)

    resultado.innerHTML += `
    <ul>
    <li>El nombre del Dueño es : ${nuevoCliente.getPropietario}. El domicilio es: ${nuevoCliente.getDireccion}, el Número telefónico de contacto : ${nuevoCliente.getTelefono}</li>
    <li>El tipo de animal es : ${nuevoCliente.getTipo}. mientras que el nombre de la mascota es: ${nuevoCliente.getNombreMascota}, y la enfermedad es : ${nuevoCliente.getEnfermedad}</li>
    </ul>
    <hr>
    `

})




