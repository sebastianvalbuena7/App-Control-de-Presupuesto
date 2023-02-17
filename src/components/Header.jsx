import { NuevoPresupuesto } from "./NuevoPresupuesto"
import { ControlPresupuesto } from "./ControlPresupuesto"

export const Header = ({gastos, setGastos, presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto}) => {
  return (
    <header>
        <h1>Planificador de gastos</h1>
        {isValidPresupuesto ? (
            <ControlPresupuesto gastos={gastos} presupuesto={presupuesto} setGastos={setGastos} setPresupuesto={setPresupuesto} setIsValidPresupuesto={setIsValidPresupuesto}/>
        ) : <NuevoPresupuesto presupuesto={presupuesto} setPresupuesto={setPresupuesto} isValidPresupuesto={isValidPresupuesto} setIsValidPresupuesto={setIsValidPresupuesto}/>}
    </header>
  )
}