export default function Exemplo02() {
  const Ligado = true;
  let mensagem = ""
  
    
    if (Ligado === false) {
     mensagem = "O computador esta desligado"
    } else {
      mensagem = "O computador esta ligado"
    }

  return (
    <div>
      <h2> Condicional Composta </h2>
      <p>{mensagem}</p>
    </div>
  );
}
