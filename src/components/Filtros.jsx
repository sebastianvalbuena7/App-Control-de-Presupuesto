import { useState, useEffect } from 'react'

export const Filtros = ({filtro, setFiltro}) => {
    return (
        <div className='filtros sombra contenedor'>
            <form>
                <div className='campo'>
                    <label htmlFor="filtrar">Filtrar Gastos</label>
                    <select id="filtrar" value={filtro} onChange={() => setFiltro(event.target.value)}>
                        <option value="">Todas las categorías</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos</option>
                        <option value="entretenimiento">Entretenimiento</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>
            </form>
        </div>
    )
}