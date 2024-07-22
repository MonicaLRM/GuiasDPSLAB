"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState("");

  const handleOperacion = (operacion) => {
    setError("");
    let res;
    try {
      switch (operacion) {
        case "suma":
          res = numero1 + numero2;
          break;
        case "resta":
          res = numero1 - numero2;
          break;
        case "multiplicacion":
          res = numero1 * numero2;
          break;
        case "division":
          if (numero2 === 0) throw new Error("No se puede dividir por cero");
          res = numero1 / numero2;
          break;
        case "potenciacion":
          res = Math.pow(numero1, numero2);
          break;
        case "raiz":
          if (numero1 < 0) throw new Error("No se puede calcular la raíz cuadrada de un número negativo");
          res = Math.sqrt(numero1);
          break;
        default:
          res = null;
      }
    } catch (e) {
      setError(e.message);
      res = null;
    }
    setResultado(res);
  };

  const reset = () => {
    setNumero1(0);
    setNumero2(0);
    setResultado(null);
    setError("");
  };

  return (
    <main className={styles.main}>
      <div>
        <h2 className={styles.title2}>Calculadora</h2>
        <label className={styles.text}>
          Ingrese el primer número:
          <input
            className={styles.input}
            type="number"
            value={numero1}
            onChange={(e) => setNumero1(parseFloat(e.target.value))}
          />
        </label>
        <br />
        <label className={styles.text}>
          Ingrese el segundo número (si aplica):
          <input
            className={styles.input}
            type="number"
            value={numero2}
            onChange={(e) => setNumero2(parseFloat(e.target.value))}
          />
        </label>
        <br />
        <button className={styles.button} onClick={() => handleOperacion("suma")}>Suma</button>
        <button className={styles.button} onClick={() => handleOperacion("resta")}>Resta</button>
        <button className={styles.button} onClick={() => handleOperacion("multiplicacion")}>Multiplicación</button>
        <button className={styles.button} onClick={() => handleOperacion("division")}>División</button>
        <button className={styles.button} onClick={() => handleOperacion("potenciacion")}>Potenciación</button>
        <button className={styles.button} onClick={() => handleOperacion("raiz")}>Raíz Cuadrada</button>
        <button className={styles.button} onClick={reset}>Reiniciar</button>
        <hr />
        <h3>Resultado</h3>
        {error && <p className={styles.error}>{error}</p>}
        {resultado !== null && <p className={styles.resultado}>{resultado}</p>}
      </div>
    </main>
  );
}
