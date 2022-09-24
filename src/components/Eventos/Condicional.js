import { useState } from "react";

function Condicional() {

    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();

    function enviarEmail(evento) {
        evento.preventDefault();
        //Ele precisa dessa variável porque é por ela que as informações são enviadas ao servidor e não pela userEmail, pois essa última é apenas para configuração.
        setUserEmail(email);
    }

    function limparEmail() {
        setUserEmail(" ");
    }

    return (
        <div>
            <h2>Cadastre o seu e-mail:</h2>
                <form>
                    <input type="email"
                    placeholder="Digite o seu e-mail..."
                    onChange={(event) => setEmail(event.target.value)}
                    />
                    <button type="submit" onClick={enviarEmail}>Enviar e-mail</button>
                    {/* Essa é a renderização condicional, basicamente um if */}
                    {userEmail && (
                        <div>
                            <p> O e-mail do usuário é: {userEmail}</p>
                            <button onClick={limparEmail}>Limpar e-mail</button>
                        </div>
                    )}
                    
                </form>
        </div>
    )
}

export default Condicional;