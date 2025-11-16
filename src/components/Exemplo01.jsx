export default function Exemplo01() {
  const Ligado = false;
  let mensagem = "";
  if (Ligado === false) {
    mensagem = "O computador esta desligado";
  }

  return (
    <div>
      <h2> Condicional Simples </h2>
      <p>{mensagem}</p>
    </div>
  );
}
