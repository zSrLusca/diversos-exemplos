import { useState } from "react";

export default function Exemplo05() {
  const [ligado, setLigado] = useState(false);
  let [mensagem, setMensagem] = useState("");

  function ligar() {
    const novoEstado = !ligado
    setLigado(novoEstado)

    if (novoEstado === false) {
      setMensagem("Esta desligado");
      
    } else {
      setMensagem("Esta ligado");
      
    }
  }
  return (
    <div>
      <h2>Condicional com input</h2>
      <button onClick={ligar}>Ligar/Desligar</button>
      <p>{mensagem}</p>
    </div>
  );
}
