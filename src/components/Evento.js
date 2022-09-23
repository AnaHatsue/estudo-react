import Button from "./Button";

function Evento() {

    function primeiroEvento() {
        console.log(`Ativando primeiro evento.`);
    }

    function segundoEvento() {
        console.log(`Ativando segundo evento.`);
    }

    return (
        <div>
            <p>Clique para disparar um evento.</p>
            {/* Essa função está sendo passada como props, mas na condição de evento. Então quando acontecer o descrito no componente, acontecerá o que está na função para que seja possível reaproveitar o componente.  */}
            <Button event={primeiroEvento} text="Primeiro evento"/>
            <Button event={segundoEvento} text="Segundo evento"/>
        </div>
    )
}
export default Evento;