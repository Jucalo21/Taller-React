import React, {useState} from 'react'

const Formulario = () => {

    const [nombre, setNombre]=useState('')
    const [apellido, setApellido]=useState('')
    const [genero, setGenero]=useState('')
    const [fecha, setFecha]=useState('')
    const [ciudad, setCiudad]=useState('')
    const [pais, setPais]=useState('')
    const [identificacion, setidentificacion]=useState('')
    const [lista, setLista]=useState([])

    return (
        <div className="container mt-5">
            <h1 className="texte-center">Crud desarrollo web</h1>
        <hr />
        <div className="row">
            <div className="col-8">
                <h4 className="text-center">Listado de Personas</h4>
                <ul className="list-group">
                    <li className="list-group-item">Persona 1</li>
                    <li className="list-group-item">Persona 2</li>
                </ul>
            </div>
            <div className="col-4">
                <h4 className="text-center">Agregar Persona</h4>
                <form action="">
                    <input type="text" className="form-control mb-2" placeholder='Ingrese Nombre'/>
                    <input type="text" className="form-control mb-2" placeholder='Ingrese Apellido'/>
                    <input type="text" className="form-control mb-2" placeholder='Ingrese Genero'/>
                    <input type="text" className="form-control mb-2" placeholder='Ingrese Fecha de Nacimiento'/>
                    <input type="text" className="form-control mb-2" placeholder='Ingrese Ciudad de Nacimiento'/>
                    <input type="text" className="form-control mb-2" placeholder='Ingrese Pais de Nacimiento'/>
                    <input type="text" className="form-control mb-2" placeholder='Ingrese CC o TI'/>
                    <button className="btn btn-primary btn-block" on='submit'>Agregar</button>
                    <button className="btn btn-dark btn-block mx-2" on='submit'>Cancelar</button>
                </form>
            </div>
        </div>
        </div>
    )
}

export default Formulario
