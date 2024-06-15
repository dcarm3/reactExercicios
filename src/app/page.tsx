"use client"
import React from "react"
import styles from "./page.module.css";
import Contador from "../components/Contador/Contador"

export default function Home() {
  const [contador, setContador] = React.useState(5)
  const [contador2, setContador2] = React.useState(2)

    function incrementar(){
        setContador(contador + 1)
    }

    function decrementar(){
        if (contador === 0) {
            return
        }
        setContador(contador - 1)
    }

    function incrementar2(){
      setContador2(contador2 + 1)
  }

  function decrementar2(){
      setContador2(contador2 - 1)
  }

  return (
    <main className={styles.main}>
      <h1>Home</h1>
      <Contador valor={contador} incrementar={() => incrementar()}  decrementar={() => decrementar()} />
      <Contador valor={contador2} incrementar={() => incrementar2()}  decrementar={() => decrementar2()} />
    </main>
  );
}
