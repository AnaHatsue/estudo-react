import PropTypes from 'prop-types';

function Item({marca, anoLancamento}) {
    return (
        <div>
            <li>{marca} - {anoLancamento}</li>
        </div>
    )
}

//A propriedade nós vamos acessar com o P minúsculo, para definir que é uma string e que é necessária. Já o anoLancamento, será definido um numero default.
Item.propTypes = {
    marca: PropTypes.string.isRequired,
    anoLancamento: PropTypes.number,
}

Item.defaultProps = {
    marca: "Faltou a marca",
    anoLancamento: 2000,
}

export default Item;