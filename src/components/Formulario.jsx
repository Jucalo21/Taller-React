import React, {useState} from 'react'
import {db} from '../firebase'
import {collection, doc, addDoc} from 'firebase/firestore'

const Formulario = () => {

    const [nombre, setNombre]=useState('')
    const [apellido, setApellido]=useState('')
    const [genero, setGenero]=useState('')
    const [fecha, setFecha]=useState('')
    const [ciudad, setCiudad]=useState('')
    const [pais, setPais]=useState('')
    const [identificacion, setIdentificacion]=useState('')
    const [lista, setLista]=useState([])

    const guardarPersonas = async (e)=>{
        e.preventDefault()
        try{
            const data = await addDoc(collection(db,'Personas'),{
                nombrePersona: nombre,
                apellidoPersona: apellido,
                generoPersona: genero,
                fechaPersona: fecha,
                ciudadPersona: ciudad,
                paisPersona: pais,
                identificacionPersona: identificacion
            })
        }catch(error){
            console.log(error)
        }
    }

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
                <form onSubmit={guardarPersonas}>
                    <input type="text" className="form-control mb-2" placeholder='Ingrese Nombre' value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
                    <input type="text" className="form-control mb-2" placeholder='Ingrese Apellido' value={apellido} onChange={(e)=>setApellido(e.target.value)}/>
                    <input type="text" className="form-control mb-2" placeholder='Ingrese Genero' value={genero} onChange={(e)=>setGenero(e.target.value)}/>
                    <input type="text" className="form-control mb-2" placeholder='Ingrese Fecha de Nacimiento' value={fecha} onChange={(e)=>setFecha(e.target.value)}/>
                    <input type="text" className="form-control mb-2" placeholder='Ingrese Ciudad de Nacimiento' value={ciudad} onChange={(e)=>setCiudad(e.target.value)}/>
                    <input type="text" className="form-control mb-2" placeholder='Ingrese Pais de Nacimiento' value={pais} onChange={(e)=>setPais(e.target.value)}/>
                    <input type="text" className="form-control mb-2" placeholder='Ingrese CC o TI' value={identificacion} onChange={(e)=>setIdentificacion(e.target.value)}/>
                    <button className="btn btn-primary btn-block" on='submit'>Agregar</button>
                    <button className="btn btn-dark btn-block mx-2" on='submit'>Cancelar</button>
                </form>
            </div>
        </div>
        </div>
    )
}

export default Formulario
