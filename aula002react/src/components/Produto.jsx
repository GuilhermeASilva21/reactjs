import './Produto.css'

function Produto(props) {
    let p= props.produto

  return (
    <div className="produto-container">
        <h2>{p.nome}</h2>
        <p>{p.descricao}</p>
        <p>peso: {p.peso}kg</p>
        <p>R$ {p.preco}</p>
        <p>{p.id}</p>
    </div>
  )
}

export default Produto
