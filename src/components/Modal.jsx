import {useState, useEffect} from 'react'
import CerrarBtn from '../img/cerrar.svg'
import { Mensaje } from './Mensaje'

export const Modal = ({setModal, animarModal, setAnimarModal, guardarGasto, gastoEditar, setGastoEditar}) => {
    const [mensaje, setMensaje] = useState('')
    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState(0)
    const [categoria, setCategoria] = useState(0)
    const [id, setId] = useState()
    const [fecha, setFecha] = useState('')

    useEffect(() => {
        if(Object.keys(gastoEditar).length > 0) {
            setNombre(gastoEditar.nombre)
            setCantidad(gastoEditar.cantidad)
            setCategoria(gastoEditar.categoria)
            setId(gastoEditar.id)
            setFecha(gastoEditar.fecha)
          }
    }, [])

    const ocultarModal = () => {
        setAnimarModal(false)
        setGastoEditar({})
        setTimeout(() => {
            setModal(false)
        }, 400)
    }

    const handleSubmit = e => {
        e.preventDefault()
        if([nombre, cantidad, categoria].includes('' || 0)) {
            setMensaje('Todos los campos son obligatorios')

            setTimeout(() => {
                setMensaje('')
            }, 2000)
            return
        }

        guardarGasto({nombre, cantidad, categoria, id, fecha})
    }

    return (
        <div className="modal">
            <div className="cerrar-modal" onClick={ocultarModal} >
                <img src={CerrarBtn} alt="Boton Cerrar" className="Btn-Cerrar"/>
            </div>

            <form onSubmit={handleSubmit} className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}>
                <legend>{gastoEditar.nombre ? 'Editar Gasto' : 'Nuevo Gasto'}</legend>
                {mensaje ? <Mensaje tipo='error' texto={mensaje}/> :''}

                <div className='campo'>
                    <label htmlFor="nombre">Nombre Gasto</label>
                    <input 
                        id='nombre'
                        type="text" 
                        placeholder='Añade el Nombre del Gasto'
                        value={nombre}
                        onChange={() => setNombre(event.target.value)}
                    />
                </div>

                <div className='campo'>
                    <label htmlFor="cantidad">Cantidad</label>
                    <input 
                        id='cantidad'
                        type="number" 
                        placeholder='Añade la cantidad del gasto'
                        value={cantidad}
                        onChange={() => setCantidad(event.target.value)}
                    />
                </div>

                <div className='campo'>
                    <label htmlFor="categoria">Categoria</label>

                    <select id="categoria" value={categoria} onChange={() => setCategoria(event.target.value)}>
                        <option value="">-- Selecciona --</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos</option>
                        <option value="entretenimiento">Entretenimiento</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>

                <input type="submit" value={gastoEditar.nombre ? 'Guardar Cambios' : 'Añadir Gasto'}/>
            </form>
        </div>
    )
}