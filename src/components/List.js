import Item from "./Item";

function List() {
    return (
        <div>
            <h2>Vrum vrummmm
                <ol>
                    <Item marca="Fiat"
                    anoLancamento={1999}
                    />
                    <Item marca="Ford"
                    anoLancamento={2012}
                    />
                    <Item 
                    />
                </ol>
            </h2>
        </div>
    )
}

export default List;