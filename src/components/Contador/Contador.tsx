import React from "react"
import styles from "./Contador.module.css"

interface ContadorProps {
    valor: number
    incrementar: () => void
    decrementar: () => void
}

function Contador({ valor, incrementar, decrementar }: ContadorProps) {
    

    return (
        <div>
            <button className={styles.button} onClick={() => decrementar()} >-</button>
            <span className={styles.span}>{valor}</span>
            <button className={styles.button} onClick={() => incrementar()}>+</button>
        </div>
    )
}

export default Contador