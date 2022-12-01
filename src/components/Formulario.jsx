import React, {useState,useEffect} from 'react'
import {db} from '../firebase'
import {collection, doc, addDoc, onSnapshot, query} from 'firebase/firestore'

const Formulario = () => {

    const [nombre, setNombre]=useState('')
    const [apellido, setApellido]=useState('')
    const [genero, setGenero]=useState('')
    const [fecha, setFecha]=useState('')
    const [ciudad, setCiudad]=useState('')
    const [pais, setPais]=useState('')
    const [identificacion, setIdentificacion]=useState('')
    const [lista, setLista]=useState([])

    useEffect(()=>{
        const obtenerDatos=async()=>{
            try{
                await onSnapshot(collection(db,'Personas'),(query)=>{
                    setLista(query.docs.map((doc)=> ({...doc.data(),id:doc.id})))
                })
            }catch(error){
                console.log(error)
            }
        }
            obtenerDatos();
    },[])

    const guardarPersonas = async (e)=>{
        e.preventDefault()
        try{
            //Agrega los datos a la base de datos
            const data = await addDoc(collection(db,'Personas'),{
                nombrePersona: nombre,
                apellidoPersona: apellido,
                generoPersona: genero,
                fechaPersona: fecha,
                ciudadPersona: ciudad,
                paisPersona: pais,
                identificacionPersona: identificacion
            })

            //Actualiza el array que se muestra en la pagina
            setLista(
                [...lista,{
                    nombrePersona: nombre,
                    apellidoPersona: apellido,
                    generoPersona: genero,
                    fechaPersona: fecha,
                    ciudadPersona: ciudad,
                    paisPersona: pais,
                    identificacionPersona: identificacion,
                    id:data.id
                }]
            )

            //Limpiar
            setNombre('')
            setApellido('')
            setCiudad('')
            setFecha('')
            setGenero('')
            setIdentificacion('')
            setPais('')
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
                    {
                    //Recorrer lista y mostrarla
                        lista.map(item=>(
                            <li className="list-group-item" key={item.id}>{"Nombre: "}{item.nombrePersona}-{"Apellido: "}
                            {item.apellidoPersona}-{"Genero: "}{item.generoPersona}-{"Fecha nacimiento: "}{item.fechaPersona}
                            -{"Ciudad Nacimiento: "}{item.ciudadPersona}-{"Pais de Nacimiento: "}{item.paisPersona}
                            -{"CC/TI: "}{item.identificacionPersona}</li>
                        ))
                    }
                </ul>
            </div>
            <div className="col-4">
                <h4 className="text-center">Agregar Persona</h4>
                {/*Llama a la funcion guardar personas 
                y le envia los datos de los inputs de abajo */}
                <form onSubmit={guardarPersonas}>
                    <input type="text" className="form-control mb-2" placeholder='Ingrese Nombre' value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
                    <input type="text" className="form-control mb-2" placeholder='Ingrese Apellido' value={apellido} onChange={(e)=>setApellido(e.target.value)}/>
                    <input type="text" className="form-control mb-2" placeholder='Ingrese Genero' value={genero} onChange={(e)=>setGenero(e.target.value)}/>
                    <input type="date" className="form-control mb-2" placeholder='Ingrese Fecha de Nacimiento' value={fecha} onChange={(e)=>setFecha(e.target.value)}/>
                    <input type="text" className="form-control mb-2" placeholder='Ingrese Ciudad de Nacimiento' value={ciudad} onChange={(e)=>setCiudad(e.target.value)}/>
                    <input type="text" className="form-control mb-2" placeholder='Ingrese Pais de Nacimiento' value={pais} onChange={(e)=>setPais(e.target.value)}/>
                    <input type="number" className="form-control mb-2" placeholder='Ingrese CC o TI' value={identificacion} onChange={(e)=>setIdentificacion(e.target.value)}/>
                    <button className="btn btn-primary btn-block" on='submit'>Agregar</button>
                    <button className="btn btn-dark btn-block mx-2" on='submit'>Cancelar</button>
                </form>
            </div>
        </div>
        </div>
    )
}

export default Formulario
