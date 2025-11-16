export default function Exemplo04(){
    const ligado = false
    let mensagem = ""
    return (
        <div>
            <h2>Condição Ternaria</h2>
            <p>{ligado ? "Ligado" : "Desligado"  }</p>
        </div>
    )
}