import { useState, useEffect } from "react"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

export const ControlPresupuesto = ({ gastos, presupuesto, setPresupuesto, setGastos, setIsValidPresupuesto }) => {
    const nuevosGastos = gastos.map(gasto => Number(gasto.cantidad))
    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)
    const [porcentaje, setPorcentaje] = useState(0)

    useEffect(() => {
        const totalGastado = nuevosGastos.reduce((acc, gasto) => gasto + acc, 0)
        const totalDisponible = presupuesto - totalGastado
        // Calcular el porcentaje
        const nuevoPorcentaje = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2)

        setGastado(totalGastado)
        setDisponible(totalDisponible)
        setTimeout(() => {
            setPorcentaje(nuevoPorcentaje)
        }, 1000)
    }, [gastos])

    const formatearCantidad = cantidad => {
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'COP'
        })
    }

    const handleReset = () => {
        Swal.fire({
            title: 'Estás seguro(a)?',
            text: "Los cambios no se pueden revertir!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#4f41ce',
            cancelButtonColor: '#DC2626',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Resetear'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'App reseteada!',
                    '',
                    'success'
                )
                setGastos([])
                setPresupuesto(0)
                setIsValidPresupuesto(false)
            }
        })
    }

    return (
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
                <CircularProgressbar value={porcentaje} styles={buildStyles({
                    pathColor: porcentaje > 100 ? '#DC2626' : "#4f41ce",
                    trailColor: "#F5F5F5",
                    textColor: porcentaje > 100 ? '#DC2626' : "#4f41ce"
                })} text={`${porcentaje}% Gastado`} />
            </div>

            <div className="contenido-presupuesto">
                <button className="reset-app" type="button" onClick={handleReset}>Resetear App</button>
                <p>
                    <span>Presupuesto:</span> $ {formatearCantidad(presupuesto)}
                </p>

                <p className={`${disponible < 0 ? 'negativo' : ''}`}>
                    <span>Disponible:</span> $ {formatearCantidad(disponible)}
                </p>

                <p>
                    <span>Gastado:</span> $ {formatearCantidad(gastado)}
                </p>
            </div>
        </div>
    )
}