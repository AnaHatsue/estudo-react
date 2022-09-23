// function Pessoa({props}) {

//     return (
//         <div>
//             <img src={props.foto} alt={props.nomeCompleto}/>
//             <h2>Nome: {props.nomeCompleto}</h2>
//             <p>Idade: {props.idade}</p>
//             <p>Profissão: {props.profissao}</p>
//         </div>
//     )
// }

//Para evitar ficar colocando sempre props. dá pra substituir o props e colocar entre {} no argumento da função.
function Pessoa({nomeCompleto, idade, profissao, foto,}) {

    return (
        <div>
            <img src={foto} alt={nomeCompleto}/>
            <h1>Nome: {nomeCompleto}</h1>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </div>
    )
}

export default Pessoa;