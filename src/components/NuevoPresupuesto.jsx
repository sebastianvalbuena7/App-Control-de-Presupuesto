import { useState } from "react"
import { Mensaje } from "./Mensaje"

export const NuevoPresupuesto = ({ presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto }) => {

    const [mensaje, setMensaje] = useState('')

    const handlePresupuesto = e => {
        e.preventDefault()
        if(!presupuesto || presupuesto < 0) {
            setMensaje('No es un presupuesto válido')
            setTimeout(() => {
                setMensaje('')
            }, 2000)
            return
        }
        setMensaje('')
        setIsValidPresupuesto(true)
    }

    return (
        <div className="contenedor-presupuesto contenedor sombra">
            <form onSubmit={handlePresupuesto} className="formulario">
                <div className="campo">
                    <label htmlFor="">Definir Presupuesto</label>

                    <input
                        type="number"
                        className="nuevo-presupuesto"
                        placeholder="Ej. 20.000"
                        onChange={() => setPresupuesto(Number(event.target.value))}
                    />
                </div>

                <input type="submit" value="Añadir" />

                {mensaje ? <Mensaje tipo="error" texto={mensaje}/> : ''}
            </form>
        </div>
    )
}