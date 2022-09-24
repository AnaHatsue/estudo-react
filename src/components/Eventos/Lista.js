function Lista({atividades}) {

    return (
        <div>
            <h1>Atividades que eu gosto de fazer:</h1>
            {   //Para não imprimir uma lista em branco, então faz um if ternário (condição ? (true) : (false))
                atividades.length > 0 ? (
                // Tomar cuidado que depois da Arrow function será () e não {}, por causa do sintaxe do JSX.
                atividades.map((item, index) => (
                    //O React exige uma chave id para cada item de uma array, por isso precisa do argumento index definindo como chave.
                    <p key={index}>{item}</p>
                        
                        
                ))) : (
                    <p>Não há itens na lista.</p> 
                )
            }
        </div>
    )
}

export default Lista;