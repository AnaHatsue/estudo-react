import { useState } from "react";

function Form() {

    function cadastrarUsuario(event) {
        event.preventDefault();
        console.log(`Usuário ${name} foi cadastrado com a senha ${password}`)
    }

    //Sempre tem um atributo que vai resgatar e um que vai receber as informações alteradas, de acordo com o input do usuário.

    const [name, setName] = useState();
    const [password, setPassword] = useState();

    return (
        <div>
            <h1>Meu cadastro:</h1>
            {/* Aqui é quando clicar em enviar, vai realizar a função cadastrarUsuario */}
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder = "Digite o seu nome"
                        // Aqui é quando mudar o campo "name" através de uma mudança pelo usuário, a variável setName vai receber o mesmo valor.
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <br></br>
                <div>
                    <label htmlFor="password">Senha: </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder = "Digite sua senha"
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <br></br>
                <input
                type="submit"
                value="Cadastrar"
                />
            </form>
        </div>
    )
}

export default Form;