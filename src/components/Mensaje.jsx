export const Mensaje = ({texto, tipo}) => {
    return (
        <div className={`alerta ${tipo}`}>{texto}</div>
    )
}