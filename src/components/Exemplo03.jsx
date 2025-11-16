export default function Exemplo03() {
  
    const idade = 90
    let faixa = ""

    if(idade <= 12){
        faixa = "Criança"

    } else if (idade <= 60) {
        faixa = "Adulto"

    } else {
        faixa = "Idoso"

    }


  return (
    <div>
      <h2> Condicional Aninhada </h2>
      <p>{faixa}</p>
    </div>
  );
}
